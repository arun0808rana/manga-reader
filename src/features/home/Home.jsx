import React, { useState } from "react";
import DiffuseSlider from "../../reusablesComponents/diffuseSlider/DiffuseSlider";
import CategoryPill from "../../reusablesComponents/category/CategoryPill";

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
    </div>
  );
}

export default Home;
