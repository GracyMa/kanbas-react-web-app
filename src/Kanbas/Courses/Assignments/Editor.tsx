export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h4>Assignment Name</h4>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
          The landing page should include the following: 
          - Your full name and section 
          - Links to each of the lab assignments 
          - Link to the Kanbas application 
          - Links to all relevant source code repositories 
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
  
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="projects">PROJECTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="letter-grade">Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="no-submission">No Submission</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <label htmlFor="wd-text-entry">
                <input id="wd-text-entry" type="checkbox" /> Text Entry
              </label><br />
              <label htmlFor="wd-website-url">
                <input id="wd-website-url" type="checkbox" checked /> Website URL
              </label><br />
              <label htmlFor="wd-media-recordings">
                <input id="wd-media-recordings" type="checkbox" /> Media Recordings
              </label><br />
              <label htmlFor="wd-student-annotation">
                <input id="wd-student-annotation" type="checkbox" /> Student Annotation
              </label><br />
              <label htmlFor="wd-file-upload">
                <input id="wd-file-upload" type="checkbox" /> File Uploads
              </label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <select id="wd-assign-to">
                <option value="everyone">Everyone</option>
                <option value="group-1">Group 1</option>
                <option value="group-2">Group 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" placeholder="mm/dd/yyyy" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until"> Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </table>
        <div style={{ marginTop: "20px", textAlign: "right", borderTop: '1px solid black' }}>
          <button style={{ marginRight: "10px" }}>Cancel</button>
          <button style={{ marginRight: "10px" }}>Save</button>
        </div>
      </div>
    );
  }
  