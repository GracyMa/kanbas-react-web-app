import { NavLink, useParams } from "react-router-dom";
import './CoursesNavigation.css';  // Make sure to import the custom CSS file

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID dynamically from URL params

  // Define the links array
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <NavLink
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={({ isActive }) =>
            isActive
              ? 'list-group-item border-0 text-white active-link'
              : 'list-group-item border-0 text-danger'
          }
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
}
