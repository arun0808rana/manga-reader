import React, { useState } from "react";
import { Link } from "react-router-dom";

function MostViewed() {
  const [mostViewedActiveTime, setMostViewedActiveTime] = useState("Today");

  // functions
  const handleMostViewedTimeClick = (e) => {
    if (["Today", "Week", "Month"].includes(e.target.innerText)) {
      setMostViewedActiveTime(e.target.innerText);
    }
  };

  return (
    <div className="most-viewed">
      <h2 className="most-viewed-heading">Most Viewed</h2>
      <div className="most-viewed-body">
        <div
          className="most-viewed-time-strip"
          onClick={handleMostViewedTimeClick}
        >
          <div
            data-active={mostViewedActiveTime === "Today"}
            className="most-viewed-time-strip-item time-today active"
          >
            Today
          </div>
          <div
            data-active={mostViewedActiveTime === "Week"}
            className="most-viewed-time-strip-item time-week"
          >
            Week
          </div>
          <div
            data-active={mostViewedActiveTime === "Month"}
            className="most-viewed-time-strip-item time-month"
          >
            Month
          </div>
        </div>
        <div className="most-view-manga-panel">
          {[1, 3, 3, 3].map((manga, index) => {
            return (
              <div
                key={`manga-strip-most-viewed-${index}`}
                className="most-view-manga-strip"
              >
                <div className="most-viewed-manga-strip-lhs">
                  <div className="most-viewed-manga-strip-lhs-img-container">
                    <img
                      src="https://img.mreadercdn.com/_r/200x300/100/cb/28/cb2828d5cd6929b3c8d1a2b25590a51b/cb2828d5cd6929b3c8d1a2b25590a51b.jpg"
                      alt=""
                      className="most-viewed-manga-strip-lhs-img"
                    />
                  </div>
                  <div className="most-viewed-manga-strip-details">
                    <Link className="most-viewed-manga-strip-name">One Piece</Link>
                    <div className="most-viewed-sub-text">
                      <div className="most-viewed-languages">EN/FR/JA</div>
                      <span className="ml-8">|</span>
                      <div className="most-viewed-genre ml-8">Action, Adventure</div>
                    </div>
                    <div className="most-viewed-chapter-updates">
                      <Link to={`manga-view/${555}`}>
                        <span></span>
                        Chap 1004
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="manga-strip-rhs"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MostViewed;
