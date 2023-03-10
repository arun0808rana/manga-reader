import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SLIDE_PIXELS = 150;

function Carousel({ heading, slideingItems = [] }) {
  const [scrollPos, setScrollPos] = useState(0);
  const carouselContainerRef = useRef();

  const slideRight = () => {
    const container = carouselContainerRef.current;
    container.scrollLeft = scrollPos + SLIDE_PIXELS;
    setScrollPos((prevState) => {
      if (prevState >= container.offsetWidth) {
        return prevState;
      } else {
        return prevState + SLIDE_PIXELS;
      }
    });
  };

  const slideLeft = () => {
    const container = carouselContainerRef.current;
    container.scrollLeft = scrollPos - SLIDE_PIXELS;
    setScrollPos((prevState) => {
      if (SLIDE_PIXELS <= prevState) {
        return prevState - SLIDE_PIXELS;
      } else {
        return prevState;
      }
    });
  };

  return (
    <div className="carousel">
      <div className="carousel-heading-strip">
        <h2 className="carousel-heading">{heading}</h2>
        <div className="carousel-btns">
          <i
            className="carousel-btns fa fa-chevron-left"
            aria-hidden="true"
            onClick={slideLeft}
          ></i>
          <i
            className="carousel-btns fa fa-chevron-right"
            aria-hidden="true"
            onClick={slideRight}
          ></i>
        </div>
      </div>
      <div ref={carouselContainerRef} className="carousel-slider">
        {slideingItems.map((slide, index) => {
          return (
            <div
              className="carousel-slide-container"
              key={`carousel-slide-${index}-${slide?.id}`}
            >
              <Link to={`/manga-view/${1234}`}><img className="carousel-slide" src={slide?.slideUrl} alt="" /></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
