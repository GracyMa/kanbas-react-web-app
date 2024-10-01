/* src/Labs/Lab2/ScreenSizeLabel.tsx */
import React from "react";

export default function ScreenSizeLabel() {
  return (
    <div id="wd-screen-size-label">
      {/* XS: Extra Small (less than 576px) */}
      <div className="d-block d-sm-none">
        XS - Extra Small (&lt;576px)
      </div>

      {/* S: Small (576px and up) */}
      <div className="d-none d-sm-block d-md-none">
        S - Small (≥576px)
      </div>

      {/* M: Medium (768px and up) */}
      <div className="d-none d-md-block d-lg-none">
        M - Medium (≥768px)
      </div>

      {/* L: Large (992px and up) */}
      <div className="d-none d-lg-block d-xl-none">
        L - Large (≥992px)
      </div>

      {/* XL: Extra Large (1200px and up) */}
      <div className="d-none d-xl-block d-xxl-none">
        XL - Extra Large (≥1200px)
      </div>

      {/* XXL: Extra Extra Large (1400px and up) */}
      <div className="d-none d-xxl-block">
        XXL - Extra Extra Large (≥1400px)
      </div>
    </div>
  );
}
