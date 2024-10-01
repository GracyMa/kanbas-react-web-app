// import { BsGripVertical } from "react-icons/bs";
// import AssignmentControls from "./AssignmentControls";
// import AssignmentItem from "./AssignmentItem";
// import AssignmentControlButtons from "./AssignmentControlButtons";

// const assignmentData = [
//   {
//     title: "A1 - ENV + HTML",
//     modules: "Multiple Modules",
//     available: "May 6 at 12:00am",
//     due: "May 13 at 11:59pm",
//     points: "100 pts",
//   },
//   {
//     title: "A2 - CSS + BOOTSTRAP",
//     modules: "Multiple Modules",
//     available: "May 13 at 12:00am",
//     due: "May 20 at 11:59pm",
//     points: "100 pts",
//   },
//   {
//     title: "A3 - JAVASCRIPT + REACT",
//     modules: "Multiple Modules",
//     available: "May 20 at 12:00am",
//     due: "May 27 at 11:59pm",
//     points: "100 pts",
//   },
// ];

// const Assignment = () => {
//   return (
//     <div>
//       <div className="row">
//         <AssignmentControls />
//         <br />
//         <br />
//         <br />
//         <ul id="wd-modules" className="list-group rounded-0">
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />
//               ASSIGNMENTS
//               <AssignmentControlButtons />
//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               {assignmentData.map((assignment, idx) => (
//                 <AssignmentItem content={assignment} index={idx} />
//               ))}
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Assignment;
import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentItem from "./AssignmentItem";
import AssignmentControlButtons from "./AssignmentControlButtons";
import "./Assignment.css"; // Ensure the CSS file is imported

const assignmentData = [
  {
    id: 123, // Unique ID for each assignment
    title: "A1 - ENV + HTML",
    modules: "Multiple Modules",
    available: "May 6 at 12:00am",
    due: "May 13 at 11:59pm",
    points: "100 pts",
  },
  {
    id: 124,
    title: "A2 - CSS + BOOTSTRAP",
    modules: "Multiple Modules",
    available: "May 13 at 12:00am",
    due: "May 20 at 11:59pm",
    points: "100 pts",
  },
  {
    id: 125,
    title: "A3 - JAVASCRIPT + REACT",
    modules: "Multiple Modules",
    available: "May 20 at 12:00am",
    due: "May 27 at 11:59pm",
    points: "100 pts",
  },
];

const Assignment = () => {
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
              {assignmentData.map((assignment, idx) => (
                <li key={assignment.id}>
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/1234/Assignments/${assignment.id}`}
                  >
                    <AssignmentItem content={assignment} index={idx} />
                  </a>
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
