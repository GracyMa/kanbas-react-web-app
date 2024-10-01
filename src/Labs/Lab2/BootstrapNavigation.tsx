/* src/Labs/Lab2/BootstrapNavigation.tsx */
import React from "react";

export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs-and-cards">
      {/* Tabs Section */}
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>

      {/* Cards Section */}
      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img src="images/stacked.jpg" className="card-img-top" alt="Stacking Starship" />
          <div className="card-body">
            <h5 className="card-title">Stacking Starship</h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <a href="#" className="btn btn-primary">
              Boldly Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
