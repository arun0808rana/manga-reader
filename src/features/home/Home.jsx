import React, { useState } from "react";
import DiffuseSlider from "../../reusablesComponents/diffuseSlider/DiffuseSlider";
import CategoryPill from "../../reusablesComponents/category/CategoryPill";
import Carousel from "../../reusablesComponents/carousel/Carousel";
import { useGetSliderDataQuery } from "../../app/services/diffuseApiSlice";
import LatestUpdates from "./LatestUpdates";

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
      <div className="categories-strip">
        {categories.map((category) => {
          return (
            <CategoryPill key={`category__${category}`} category={category} />
          );
        })}
      </div>
      <DiffuseSlider />
      <div className="recommended-carousel">
        <Carousel
          heading={"Recommended"}
          slideingItems={sliderData?.sliderData}
        />
      </div>
      <LatestUpdates />
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
