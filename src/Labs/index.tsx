import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";


export default function Labs() {
  return (
    <Provider store={store}>
    <div>
      <h1>Labs</h1>
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
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
          <Route path="Lab5/*" element={<Lab5 />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
