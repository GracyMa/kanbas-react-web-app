/* src/Labs/Lab2/BootstrapNavigation.tsx */
import React from "react";

export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs-and-cards">
      {/* Tabs Section */}
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className="nav-link active">
            Active
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            Link
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link">
            Link
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link disabled" disabled>
            Disabled
          </button>
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
            <button className="btn btn-primary">
              Boldly Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
