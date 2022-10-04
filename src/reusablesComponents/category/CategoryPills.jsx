import React, { useState } from "react";
import { Link } from "react-router-dom";

function CategoryPills() {
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
    <div className="categories-strip">
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
