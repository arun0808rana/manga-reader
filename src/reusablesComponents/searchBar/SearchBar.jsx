import React from "react";

function SearchBar() {
  return (
    <div className="nav-search-bar">
      <input type="text" className="nav-search-bar-input"/>
      <i class="fa fa-search nav-search-icon hover-active" aria-hidden="true"></i>
    </div>
  );
}

export default SearchBar;
