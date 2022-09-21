import React from "react";

function DiffuseSlider() {
  return (
    <div className="diffuse-slider">
      <div className="diffuse-blur-bg">
        <img
          className="diffuse-blur-img"
          src="https://img.mreadercdn.com/_r/500x800/100/46/e2/46e2d152984ab1d6d90c6fc7fbaaebea/46e2d152984ab1d6d90c6fc7fbaaebea.jpg"
          alt=""
        />
      </div>
      <div className="diffuse-overlay"></div>
      <div className="diffuse-content">
          <div className="diffuse-chapter-update">Chapter: 105[EN]</div>
      </div>
    </div>
  );
}

export default DiffuseSlider;
