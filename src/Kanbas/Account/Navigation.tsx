

import { NavLink } from "react-router-dom";
import './AccountNavigation.css';  

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <NavLink 
        to="/Kanbas/Account/Signin"
        id="wd-signin-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      >
        Sign in
      </NavLink>

      <NavLink 
        to="/Kanbas/Account/Signup"
        id="wd-signup-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      >
        Sign up
      </NavLink>

      <NavLink 
        to="/Kanbas/Account/Profile"
        id="wd-profile-link"
        className={({ isActive }) => isActive ? 'list-group-item border-0 text-white active-link' : 'list-group-item border-0 text-danger'}
      >
        Profile
      </NavLink>
    </div>
  );
}
