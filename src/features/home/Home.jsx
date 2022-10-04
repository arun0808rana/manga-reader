import React, { useState } from "react";
import DiffuseSlider from "../../reusablesComponents/diffuseSlider/DiffuseSlider";
import Carousel from "../../reusablesComponents/carousel/Carousel";
import { useGetSliderDataQuery } from "../../app/services/diffuseApiSlice";
import LatestUpdates from "./LatestUpdates";
import MostViewed from "./MostViewed";

function Home() {
  const [categories, setCategories] = useState([
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Game",
    "Harem",
    "Horror",
    "Magic",
    "Martial Arts",
    "Mecha",
    "+More",
  ]);
  const { data: sliderData } = useGetSliderDataQuery();
  return (
    <div className="home">

      <DiffuseSlider />
      <div className="recommended-carousel">
        <Carousel
          heading={"Recommended"}
          slideingItems={sliderData?.sliderData}
        />
      </div>
      <div className="latest-updates-cum-most-viewed">
        <LatestUpdates />
        <MostViewed />
      </div>
      <div className="completed-carousel">
        <Carousel
          heading={"Completed"}
          slideingItems={sliderData?.sliderData}
        />
      </div>
    </div>
  );
}

export default Home;
