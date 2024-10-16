import { FaPlus, FaSearch } from "react-icons/fa";


export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>

      <button id="wd-add-group-btn" className="btn btn-lg btn-outline-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>

      <div className="input-group me-1 float-start" style={{ width: "50%" }}>
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          id="wd-search-assignments"
          placeholder="Search for Assignments"
        />
      </div>
    </div>
  );
}
