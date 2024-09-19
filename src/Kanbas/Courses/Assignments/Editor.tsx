export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <h4>Assignment Name</h4>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        {/* Assignment Description */}
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
  
        {/* Assignment Editor Table */}
        <table>
          {/* Points Row */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
  
          {/* Assignment Group Row */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">Assignments</option>
                <option value="quizzes">Quizzes</option>
                <option value="exams">Exams</option>
                <option value="projects">Projects</option>
              </select>
            </td>
          </tr>
  
          {/* Display Grade As Row */}
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
  
          {/* Submission Type Row */}
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
  
          {/* Online Entry Options Row */}
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
  
          {/* Due Date Row */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2024-05-13" />
            </td>
          </tr>
  
          {/* Available From Row */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" />
            </td>
          </tr>
  
          {/* Available Until Row */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </table>
  
        {/* Save and Cancel Buttons */}
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button style={{ marginRight: "10px" }}>Cancel</button>
          <button style={{ backgroundColor: "red", color: "white" }}>Save</button>
        </div>
      </div>
    );
  }
  