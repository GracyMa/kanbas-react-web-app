
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentItem from "./AssignmentItem";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "./Assignment.css"; // Ensure the CSS file is imported
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Adjust this path if needed

const Assignment = () => {
  const { cid } = useParams(); // Retrieve the course ID from URL parameters

  // Filter assignments for the current course
  const courseAssignments = db.assignments
    .filter((assignment) => assignment.course === cid)
    .map((assignment, idx) => ({
      ...assignment,
      modules: "Multiple Modules",
      available: `Available Date for Assignment ${idx + 1}`, // Default value
      due: `Due Date for Assignment ${idx + 1}`, // Default value
      points: "100 pts" // Default value
    }));

  return (
    <div>
      <div className="row">
        <AssignmentControls />
        <br />
        <br />
        <br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <AssignmentControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {courseAssignments.map((assignment) => (
                <li key={assignment._id}>
                  <Link
                    className="wd-assignment-link"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    <AssignmentItem content={assignment} index={0} />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Assignment;
