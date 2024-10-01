import "./Assignment.css";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3 row">
        <label htmlFor="wd-name" className="col-sm-2 col-form-label text-end">
          Assignment Name
        </label>
        <div className="col-sm-10">
          <input
            id="wd-name"
            value="A1 - ENV + HTML"
            className="form-control"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label
          htmlFor="wd-description"
          className="col-sm-2 col-form-label"
        ></label>
        <div className="col-sm-10">
          <textarea id="wd-description" className="form-control" rows={4}>
            The assignment is available online. Submit a link to the landing
            page of your Web application running on Netlify. The landing page
            should include the following: - Your full name and section - Links
            to each of the lab assignments - Link to the Kanbas application -
            Links to all relevant source code repositories The Kanbas
            application should include a link to navigate back to the landing
            page.
          </textarea>
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
            value={100}
          />
        </div>
        <label htmlFor="wd-group" className="col-sm-2 col-form-label">
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
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label text-end"
        >
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
        <label className="col-sm-2 col-form-label text-end">
          Submission Type
        </label>

        <div className="col-sm-10">
          <div className="border p-3">
            <div className="mb-3">
              <select id="wd-submission-type" className="form-select">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="no-submission">No Submission</option>
              </select>
            </div>

            <fieldset className="mb-3 row">
              <h6>
                <strong>Online Entry Options</strong>
              </h6>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    id="wd-text-entry"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="wd-text-entry" className="form-check-label">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="wd-website-url"
                    type="checkbox"
                    className="form-check-input"
                    defaultChecked
                  />
                  <label htmlFor="wd-website-url" className="form-check-label">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="wd-media-recordings"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label
                    htmlFor="wd-media-recordings"
                    className="form-check-label"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="wd-student-annotation"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label
                    htmlFor="wd-student-annotation"
                    className="form-check-label"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="wd-file-upload"
                    type="checkbox"
                    className="form-check-input"
                  />
                  <label htmlFor="wd-file-upload" className="form-check-label">
                    File Uploads
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label text-end">Assign</label>
        <div className="col-sm-10">
          <div className="border p-3">
            <h6>
              <strong>Assign To</strong>
            </h6>

            <div className="mb-3">
              <select id="wd-assign-to" className="form-select">
                <option value="everyone">Everyone</option>
                <option value="group-1">Group 1</option>
                <option value="group-2">Group 2</option>
              </select>
            </div>
            <div className="mb-3">
              <h6>
                <strong>Due</strong>
              </h6>
              <input
                id="wd-due-date"
                type="date"
                value="2024-05-13"
                className="form-control"
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <h6>
                  <strong>Available From</strong>
                </h6>
                <input
                  id="wd-available-from"
                  type="date"
                  value="2024-05-06"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <h6>
                  <strong>Until</strong>
                </h6>
                <input
                  id="wd-available-until"
                  type="date"
                  value="2024-05-20"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-end mt-5"
        style={{ borderTop: "1px solid #80808040" }}
      >
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
