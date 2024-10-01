import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <TOC />
      <div id="wd-labs">
        <h3>Tianyi Ma - Section 02</h3>

        <a
          href="https://github.com/GracyMa/kanbas-react-web-app"
          id="wd-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      <Routes>
      <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
        <Route path="/Lab1" element={<Lab1 />} />
        <Route path="/Lab2" element={<Lab2 />} />
        <Route path="/Lab3" element={<Lab3 />} />
      </Routes>


      </div>
    </div>
  );
}
