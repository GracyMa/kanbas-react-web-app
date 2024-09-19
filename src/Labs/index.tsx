import Lab1 from "./Lab1";
import { Link } from "react-router-dom";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Tianyi Ma - Section 02</h1>
      <Lab1 />
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>

      </ul>
      <a
        href="https://github.com/GracyMa/kanbas-react-web-app"
        id="wd-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository
      </a>
    </div>
  );
}
