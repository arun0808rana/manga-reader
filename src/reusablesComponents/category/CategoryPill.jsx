import React from "react";
import { Link } from "react-router-dom";

function CategoryPill({ category }) {
  return <Link className="category-pill">{category}</Link>;
}

export default CategoryPill;
