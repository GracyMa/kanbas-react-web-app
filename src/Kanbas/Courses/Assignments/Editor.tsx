import { useParams, useNavigate } from "react-router-dom";
import "./Assignment.css";
import * as db from "../../Database"; // Import the entire database

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get the course ID and assignment ID from URL params
  const navigate = useNavigate();

  // Find the assignment based on the course and assignment ID
  const assignment = db.assignments.find(
    (a) => a.course === cid && a._id === aid
  );

  // Handle cases where assignment might not be found
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3 row">
        <label htmlFor="wd-name" className="col-sm-2 col-form-label text-end">
          Assignment Name
        </label>
        <div className="col-sm-10">
          <input
            id="wd-name"
            value={assignment.title}
            className="form-control"
            readOnly
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-description" className="col-sm-2 col-form-label text-end">
          Description
        </label>
        <div className="col-sm-10">
          <textarea
            id="wd-description"
            className="form-control"
            rows={4}
            defaultValue="This is a placeholder description. You can replace it with assignment-specific details."
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-4">
          <input
            id="wd-points"
            type="number"
            className="form-control"
            defaultValue={100}
          />
        </div>
        <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-4">
          <select id="wd-group" className="form-select">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="quizzes">QUIZZES</option>
            <option value="exams">EXAMS</option>
            <option value="projects">PROJECTS</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label text-end">
          Display Grade As
        </label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="letter-grade">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label text-end">Submission Type</label>
        <div className="col-sm-10">
          <div className="border p-3">
            <select id="wd-submission-type" className="form-select mb-3">
              <option value="online">Online</option>
              <option value="on-paper">On Paper</option>
              <option value="no-submission">No Submission</option>
            </select>
            <fieldset>
              <h6><strong>Online Entry Options</strong></h6>
              <div className="form-check">
                <input id="wd-text-entry" type="checkbox" className="form-check-input" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input id="wd-website-url" type="checkbox" className="form-check-input" defaultChecked />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input id="wd-media-recordings" type="checkbox" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input id="wd-file-upload" type="checkbox" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label text-end">Assign</label>
        <div className="col-sm-10">
          <div className="border p-3">
            <h6><strong>Assign To</strong></h6>
            <select id="wd-assign-to" className="form-select mb-3">
              <option value="everyone">Everyone</option>
              <option value="group-1">Group 1</option>
              <option value="group-2">Group 2</option>
            </select>
            <h6><strong>Due</strong></h6>
            <input
              id="wd-due-date"
              type="date"
              className="form-control mb-3"
              defaultValue="2024-05-13"
            />
            <div className="row">
              <div className="col-md-6">
                <h6><strong>Available From</strong></h6>
                <input
                  id="wd-available-from"
                  type="date"
                  className="form-control"
                  defaultValue="2024-05-06"
                />
              </div>
              <div className="col-md-6">
                <h6><strong>Until</strong></h6>
                <input
                  id="wd-available-until"
                  type="date"
                  className="form-control"
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-end mt-5" style={{ borderTop: "1px solid #80808040" }}>
        <button
          className="btn btn-secondary me-2"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
        >
          Cancel
        </button>
        <button 
        className="btn btn-danger" 
        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>
          Save
        </button>
      </div>
      
    </div>
  );
}
