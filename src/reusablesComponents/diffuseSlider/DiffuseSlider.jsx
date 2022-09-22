import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetSliderDataQuery } from "../../app/services/diffuseApiSlice";

function DiffuseSlider() {
  // hooks
  const dispatch = useDispatch();

  // rtk actions
  const { getSliderData } = useGetSliderDataQuery();

  // local states
  const [sliderCollection, setSliderCollection] = useState([
    {
      id: "10",
      mediaName: "Bleach",
      language: "EN",
      chapterNo: "101",
      mediaType: "manga",
      description: "lorem ipsum",
      slideUrl:
        "https://img.mreadercdn.com/_r/500x800/100/9a/66/9a663ccb11437b3eef4e6aa677f6b036/9a663ccb11437b3eef4e6aa677f6b036.jpg",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(sliderCollection[0]);
  const [currSlideIdx, setCurrSlideIdx] = useState(0);

  //   handlers

  // fetch slider data
  const fetchMedia = async () => {
    // console.log("res", res);
    dispatch(getSliderData());
    setSliderCollection(res.sliderData);
    return res.sliderData;
  };

  const transistSlideNext = () => {
    const currentSlideIndex = sliderCollection.findIndex(
      (slide) => currentSlide?.id == slide?.id
    );
    setCurrentSlide((prevSlide) => {
      let nextSlidesIndex = (currentSlideIndex + 1) % sliderCollection.length;
      return sliderCollection[nextSlidesIndex];
    });
  };

  //   previous navigation button handler
  const transistSlidePrev = () => {
    const currentSlideIndex = sliderCollection.findIndex(
      (slide) => currentSlide?.id == slide?.id
    );

    setCurrentSlide((prevSlide) => {
      let prevSlidesIndex = currentSlideIndex - 1;

      if (prevSlidesIndex < 0) {
        prevSlidesIndex = sliderCollection.length + prevSlidesIndex;
        return sliderCollection[prevSlidesIndex];
      }

      prevSlidesIndex = prevSlidesIndex % sliderCollection.length;
      return sliderCollection[prevSlidesIndex];
    });
  };

  //   effects
  useEffect(() => {
    // fetching slider data
    let res = fetchMedia();
    //   slinding time in milli seconds
    let TRANSITION_TIME = 2500;

    //   changing slides every 3 seconds
    let interID = setInterval(() => {
      setCurrSlideIdx((prevState) => {
        let index = prevState + 1;
        return index;
      });
    }, TRANSITION_TIME);

    // clearing interval
    return () => {
      clearInterval(interID);
    };
  }, []);

  useEffect(() => {
    setCurrentSlide(sliderCollection[currSlideIdx % sliderCollection.length]);
  }, [currSlideIdx]);

  useEffect(() => {
    console.log("sliderCollection", sliderCollection);
  }, [sliderCollection]);

  return (
    <div className="diffuse-slider">
      <div className="diffuse-blur-bg">
        <img className="diffuse-blur-img" src={currentSlide?.slideUrl} alt="" />
      </div>
      <div className="diffuse-overlay"></div>
      <div className="diffuse-content">
        <div className="diffuse-content-lhs">
          <div className="diffuse-chapter-update">
            Chapter: {currentSlide?.chapterNo}[{currentSlide?.language}]
          </div>
          <h1 className="diffuse-title">{currentSlide?.mediaName}</h1>
          <div className="diffuse-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            officiis officia impedit incidunt cum! Cumque, ad quae blanditiis
            facere obcaecati sequi ipsam aperiam recusandae dolore dicta debitis
            amet veritatis tempora?
          </div>
          <button className="diffuse-read-now-btn">Read Now</button>
          <div className="diffuse-navigation">
            <button className="diffuse-nav-btn">
              <i
                className="fa fa-chevron-left"
                aria-hidden="true"
                onClick={transistSlidePrev}
              ></i>
            </button>
            <button className="diffuse-nav-btn">
              <i
                className="fa fa-chevron-right"
                aria-hidden="true"
                onClick={transistSlideNext}
              ></i>
            </button>
          </div>
        </div>
        <div className="diffuse-content-rhs">
          <img
            className="diffuse-cover-img"
            src={currentSlide?.slideUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DiffuseSlider;
