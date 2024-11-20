import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "101",
    name: "Introduction to NodeJS",
    description: "Learn the basics of Node.js and Express.js",
    course: "Backend Development",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Assignment Section */}
      <h4>Assignment</h4>
      <a
        id="wd-get-assignment"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}`}
      >
        Get Assignment
      </a>
      <input
        className="form-control mb-2"
        type="text"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <a
        id="wd-update-assignment-title"
        className="btn btn-success"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Assignment Title
      </a>
      <input
        className="form-control mb-2"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        id="wd-update-assignment-score"
        className="btn btn-warning"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Assignment Score
      </a>
      <label>
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <a
        id="wd-update-assignment-completed"
        className="btn btn-danger"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>

      <hr />

      {/* Module Section */}
      <h4>Module</h4>
      <a
        id="wd-get-module"
        className="btn btn-primary"
        href={`${MODULE_API_URL}`}
      >
        Get Module
      </a>
      <a
        id="wd-get-module-name"
        className="btn btn-secondary"
        href={`${MODULE_API_URL}/name`}
      >
        Get Module Name
      </a>
      <input
        className="form-control mb-2"
        type="text"
        value={module.name}
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
      />
      <a
        id="wd-update-module-name"
        className="btn btn-success"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Module Name
      </a>
      <input
        className="form-control mb-2"
        type="text"
        value={module.description}
        onChange={(e) =>
          setModule({ ...module, description: e.target.value })
        }
      />
      <a
        id="wd-update-module-description"
        className="btn btn-warning"
        href={`${MODULE_API_URL}/description/${module.description}`}
      >
        Update Module Description
      </a>
    </div>
  );
}
