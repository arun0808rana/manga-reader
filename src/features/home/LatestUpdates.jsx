import React from "react";
import { Link } from "react-router-dom";

function LatestUpdates() {
  return (
    <div className="latest-updates">
      <h2 className="latest-updates-heading">Latest Updates</h2>
      <div className="latest-updates-body">
        {[1, 3, 3, 1].map((updateItem, index) => {
          return (
            <div className="update-item" key={`update-item-${index}`}>
              <div className="update-item-lhs">
                <img
                  className="update-item-lhs img"
                  src="https://img.mreadercdn.com/_r/300x400/100/ee/2d/ee2d5df07dcbb4a6856061b4c499b841/ee2d5df07dcbb4a6856061b4c499b841.jpg"
                  alt=""
                />
              </div>
              <div className="update-item-rhs">
                <div className="update-item-heading">
                  <h3 className="update-heading">Amagai Nano Nino Lasan</h3>
                  <div className="update-item-genere">
                    Comedy, Harem, Romance
                  </div>
                  <div className="update-items-chapters">
                    {[1, 23, 3].map((chapter, index) => {
                      return (
                        <div
                          key={`update-chapter-${index}`}
                          className="update-chapter-links"
                        >
                          <Link className="update-items-chapters chapter" to={`manga-view/${999}`}>
                            Chap 66 [EN]
                          </Link>
                          <div
                            style={{ display: index === 2 ? "none" : "" }}
                            className="update-chapter-separator"
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LatestUpdates;
