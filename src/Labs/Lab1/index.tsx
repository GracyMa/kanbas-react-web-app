export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
     
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <p>
          Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance, this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
        </p>
      </div>
 
 
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-2">
          This is the second paragraph. Even though we added a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
        </p>
        <p id="wd-p-3">
          This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>
      </div>
 
 
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        <p>How to make pancakes:</p>
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
 
 
        <p>My favorite salad recipe:</p>
        <ol id="wd-your-favorite-recipe">
          <li>Chop fresh lettuce, cucumbers, and tomatoes.</li>
          <li>Add a handful of mixed greens.</li>
          <li>Top with sliced avocado and a sprinkle of feta cheese.</li>
          <li>Drizzle with olive oil and balsamic vinegar.</li>
          <li>Season with salt, pepper, and a pinch of oregano.</li>
          <li>Toss gently to mix all ingredients.</li>
          <li>Serve chilled and enjoy!</li>
        </ol>
 
 
        <h5>Unordered List Tag</h5>
        <p>My favorite books (in no particular order):</p>
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
 
 
        <p>Your favorite books (in no particular order):</p>
        <ul id="wd-your-books">
          <li>The Great Gatsby</li>
          <li>1984</li>
          <li>To Kill a Mockingbird</li>
          <li>Brave New World</li>
          <li>Catch-22</li>
        </ul>
      </div>
 
 
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td valign="top" align="center">Q1</td>
              <td valign="top">HTML</td>
              <td valign="top" align="center">2/3/21</td>
              <td valign="top" align="right">85</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q2</td>
              <td valign="top">CSS</td>
              <td valign="top" align="center">2/10/21</td>
              <td valign="top" align="right">90</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q3</td>
              <td valign="top">JavaScript</td>
              <td valign="top" align="center">2/17/21</td>
              <td valign="top" align="right">95</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q4</td>
              <td valign="top">React</td>
              <td valign="top" align="center">2/24/21</td>
              <td valign="top" align="right">88</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q5</td>
              <td valign="top">Node.js</td>
              <td valign="top" align="center">3/3/21</td>
              <td valign="top" align="right">92</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q6</td>
              <td valign="top">Redux</td>
              <td valign="top" align="center">3/10/21</td>
              <td valign="top" align="right">89</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q7</td>
              <td valign="top">Express.js</td>
              <td valign="top" align="center">3/17/21</td>
              <td valign="top" align="right">91</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q8</td>
              <td valign="top">MongoDB</td>
              <td valign="top" align="center">3/24/21</td>
              <td valign="top" align="right">86</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q9</td>
              <td valign="top">TypeScript</td>
              <td valign="top" align="center">3/31/21</td>
              <td valign="top" align="right">94</td>
            </tr>
            <tr>
              <td valign="top" align="center">Q10</td>
              <td valign="top">Bootstrap</td>
              <td valign="top" align="center">4/7/21</td>
              <td valign="top" align="right">87</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} valign="top">Average</td>
              <td valign="top" align="right">89</td>
            </tr>
          </tfoot>
        </table>
      </div>
 
 
      <div id="wd-images">
  <h4>Image tag</h4>
  <p>Loading an image from the internet:</p>
  <img
    id="wd-starship"
    width="400px"
    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
    alt="Starship"
  />
 
  <p>Loading a local image:</p>
  <img
    id="wd-teslabot"
    src="images/teslabot.jpg"
    height="200px"
    alt="Tesla Bot"
  />
</div>

 
 
      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
         
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input type="text" id="wd-text-fields-username" placeholder="jdoe" /> <br />
         
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" id="wd-text-fields-password" value="123@#$asd" /> <br />
         
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" placeholder="John" title="John" /> <br />
         
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" id="wd-text-fields-last-name" value="Wonderland" title="The last name" /> <br />
 
 
          {/* Add other form elements if necessary */}
        </form>
      </div>
 
 
      <div id="wd-textarea">
        <h5>Text Boxes</h5>
        <label htmlFor="wd-textarea">Biography:</label><br />
        <textarea
          id="wd-textarea"
          cols={30}
          rows={10}
          placeholder="Biography"
          title="Tooltip"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </textarea>
      </div>
 
 
      {/* Button Section */}
      <div id="wd-buttons">
        <h5>Buttons</h5>
        <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
          Hello World!
        </button>
      </div>
 
 
      {/* File Upload Section */}
      <div id="wd-file-upload">
        <h5>File upload</h5>
        <input id="wd-upload" type="file" />
      </div>
 
 
      {/* Radio Buttons Section */}
      <div id="wd-radio-buttons">
        <h5>Radio buttons</h5>
        <label>Favorite movie genre:</label><br />
       
        <input type="radio" name="radio-genre" id="wd-radio-comedy" value="comedy" />
        <label htmlFor="wd-radio-comedy">Comedy</label><br />
       
        <input type="radio" name="radio-genre" id="wd-radio-drama" value="drama" />
        <label htmlFor="wd-radio-drama">Drama</label><br />
       
        <input type="radio" name="radio-genre" id="wd-radio-scifi" value="scifi" defaultChecked />
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
       
        <input type="radio" name="radio-genre" id="wd-radio-fantasy" value="fantasy" />
        <label htmlFor="wd-radio-fantasy">Fantasy</label><br />
      </div>
 
 
      {/* Checkboxes Section */}
      <div id="wd-checkboxes">
        <h5>Checkboxes</h5>
        <label>Favorite movie genre:</label><br />
       
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
        <label htmlFor="wd-chkbox-comedy">Comedy</label><br />
       
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label htmlFor="wd-chkbox-drama">Drama</label><br />
       
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" defaultChecked />
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />
       
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" defaultChecked />
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label><br />
      </div>
 
 
      {/* Dropdown Section */}
      <div id="wd-dropdowns">
        <h4>Dropdowns</h4>
       
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre">Favorite movie genre:</label><br />
        <select id="wd-select-one-genre">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI" selected>Science Fiction</option>
          <option value="FANTASY">Fantasy</option>
        </select>
 
 
        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre">Favorite movie genres:</label><br />
        <select id="wd-select-many-genre" multiple>
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI" selected>Science Fiction</option>
          <option value="FANTASY" selected>Fantasy</option>
        </select>
      </div>
 
 
      {/* Other HTML Field Types Section */}
      <div id="wd-other-html-fields">
        <h4>Other HTML field types</h4>
 
 
        <label htmlFor="wd-text-fields-email">Email:</label>
        <input
          type="email"
          id="wd-text-fields-email"
          placeholder="jdoe@somewhere.com"
          value="jannunzi@gmail.com"
        /><br />
 
 
        <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
        <input
          type="number"
          id="wd-text-fields-salary-start"
          placeholder="1000"
          value="100000"
        /><br />
 
 
        <label htmlFor="wd-text-fields-rating">Rating:</label>
        <input
          type="range"
          id="wd-text-fields-rating"
          min="1"
          max="5"
          value="4"
        /><br />
 
 
        <label htmlFor="wd-text-fields-dob">Date of birth:</label>
        <input
          type="date"
          id="wd-text-fields-dob"
          value="2000-01-21"
        /><br />
      </div>
 
 
      {/* Anchor Tag Section */}
      <div id="wd-anchor">
        <h4>Anchor tag</h4>
        <p>Please <a id="wd-lipsum" href="https://www.lipsum.com">click here</a> to get dummy text.<br /></p>
        <p>View my code repository on <a id="wd-github" href="https://github.com">GitHub</a>.</p>
      </div>
   
 
 
    </div>
  );
 }
 