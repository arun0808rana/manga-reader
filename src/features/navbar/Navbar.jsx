import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../reusablesComponents/searchBar/SearchBar";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-lhs">
          <Link className="nav-link link logo">Logo</Link>
          <div className="link-container">
            <Link className="nav-link link active">Manga</Link>
            <Link className="nav-link link">Anime</Link>
            <Link className="nav-link link">A-Z List</Link>
            <Link className="nav-link link">Categories</Link>
          </div>
        </div>
        <div className="nav-rhs">
          <SearchBar />
          <div className="dark-light-toggle">
            <i class="fa fa-moon-o" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
