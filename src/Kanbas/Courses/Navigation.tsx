import { NavLink, useParams } from "react-router-dom";
import './CoursesNavigation.css';  // Make sure to import the custom CSS file


export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID dynamically from URL params

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink 
        to={`/Kanbas/Courses/${cid}/Home`}
        id="wd-course-home-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      > 
        Home 
      </NavLink>
      
      <NavLink 
        to={`/Kanbas/Courses/${cid}/Modules`}
        id="wd-course-modules-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      > 
        Modules 
      </NavLink>
      
      <NavLink 
        to={`/Kanbas/Courses/${cid}/Piazza`}
        id="wd-course-piazza-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      > 
        Piazza 
      </NavLink>
      
      <NavLink 
        to={`/Kanbas/Courses/${cid}/Zoom`}
        id="wd-course-zoom-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      > 
        Zoom 
      </NavLink>
      
      <NavLink 
        to={`/Kanbas/Courses/${cid}/Assignments`}
        id="wd-course-assignments-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      > 
        Assignments 
      </NavLink>
      
      <NavLink 
        to={`/Kanbas/Courses/${cid}/Quizzes`}
        id="wd-course-quizzes-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      > 
        Quizzes 
      </NavLink>
      
      <NavLink 
        to={`/Kanbas/Courses/${cid}/People`}
        id="wd-course-people-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      > 
        People 
      </NavLink>
    </div>
  );
}


