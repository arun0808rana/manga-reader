import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CategoryPills() {
  const route = useLocation().pathname;

  const [categories, setCategories] = useState([
    "All",
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
    <div className={route.includes('/manga-view')  ? "categories-strip" : "categories-strip-sticky"}>
      {categories.map((category) => {
        return (
          <Link key={`category__${category}`} className="category-pill">
            {category}
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryPills;
