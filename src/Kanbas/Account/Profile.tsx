import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5">
      <h3>Profile</h3>
      <form>
        <div className="mb-3">
          <input 
            id="wd-username" 
            value="alice" 
            placeholder="Username" 
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input 
            id="wd-password" 
            value="123" 
            placeholder="Password" 
            type="password" 
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input 
            id="wd-firstname" 
            value="Alice" 
            placeholder="First Name" 
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input 
            id="wd-lastname" 
            value="Wonderland" 
            placeholder="Last Name" 
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input 
            id="wd-dob" 
            value="2000-01-01" 
            type="date" 
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input 
            id="wd-email" 
            value="alice@wonderland" 
            placeholder="Email" 
            type="email" 
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <select 
            id="wd-role" 
            className="form-select"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>

        <Link 
          to="/Kanbas/Account/Signin" 
          className="btn btn-danger w-100"
        >
          Sign out
        </Link>
      </form>
    </div>
  );
}
