import React, { useEffect, useState } from "react";
import * as client from "./client"; 
import { FaTrash } from "react-icons/fa"; 
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";


export default function WorkingWithObjectsAsynchronously() {
  // State for assignment
  const [assignment, setAssignment] = useState<any>({});
  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };

  // Update assignment title
  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  // State for todos
  const [todos, setTodos] = useState<any[]>([]);
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Remove todo by ID
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createTodo = async () => {
    const updatedTodos = await client.createTodo();
    setTodos(updatedTodos);
  };
  const postTodo = async () => {
    const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t );
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: any) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };




  return (
    <div id="wd-asynchronous-objects">
      {/* Assignment Section */}
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input
        defaultValue={assignment.title}
        className="form-control mb-2"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <textarea
        defaultValue={assignment.description}
        className="form-control mb-2"
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <input
        type="date"
        className="form-control mb-2"
        defaultValue={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-completed"
          defaultChecked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label className="form-check-label" htmlFor="wd-completed">
          Completed
        </label>
      </div>
      <button
        className="btn btn-primary me-2"
        onClick={() => updateTitle(assignment.title)}
      >
        Update Title
      </button>

      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />

      {/* Todos Section */}
      <div id="wd-asynchronous-arrays">
        <h3>Working with Arrays Asynchronously</h3>
        <h4>
        Todos
        <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"      id="wd-create-todo" />
        <FaPlusCircle onClick={postTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo"   />

      </h4>

        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <FaTrash onClick={() => removeTodo(todo)}  className="text-danger float-end mt-1"      id="wd-remove-todo" />
                <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
                <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />

                <input type="checkbox" defaultChecked={todo.completed} className="form-check-input me-2 float-start"
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked }) } />
              {!todo.editing ? ( todo.title ) : (
                <input className="form-control w-50 float-start" defaultValue={todo.title}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, editing: false });
                    }
                  }}
                  onChange={(e) =>
                    updateTodo({ ...todo, title: e.target.value })
                  }
                />
              )}

                
                <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}
