import React, { useState } from "react";
import { Link } from "react-router-dom";

function MangaDetails() {
  const [genre, setGenre] = useState(["Action", "Comedy", "Fantasy", "Shonen"]);
  return (
    <div className="manga-details">
      <div className="manga-details-upper">
        <img
          src="https://img.mreadercdn.com/_r/300x400/100/13/9d/139d4560d1144c90a9d001c24c56f792/139d4560d1144c90a9d001c24c56f792.jpg"
          alt=""
          className="manga-details-img"
        />
        <div className="manga-details-rhs">
          <h1 className="manga-details-rhs-heading">Bleach</h1>
          <div className="manga-details-genre">
            {genre.map((genra, index) => {
              return (
                <Link
                  key={`manga-details-genra-${index}`}
                  className="manga-details-genra"
                >
                  {genra}
                </Link>
              );
            })}
          </div>
          <div className="manga-details-description">
            For as long as he can remember, high school student Ichigo Kurosaki
            has been able to see the spirits of the dead, but that has not
            stopped him from leading an ordinary life. One day, Ichigo returns
            home to find an intruder in his room who introduces herself as Rukia
            Kuchiki, a Soul Reaper.
          </div>
          <button className="manga-details-read-now">Read Now</button>
        </div>
      </div>
      <div className="manga-details-lower">
        <h2 className="manga-details-lower-heading">Chapters</h2>
        <div className="chapters-input-combo">
          <input
            type="text"
            className="manga-details-search-bar"
            placeholder="Seach Chapter"
          />
          <div className="manga-details-chapter-container">
            {[
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ].map((chapter, index) => {
              return (
                <Link
                  key={`manga-details-chapter-${index}`}
                  className="manga-details-chapter"
                >
                  <h4 className="manga-details-chapter-heading">
                    Chapter {index}
                  </h4>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaDetails;
