import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="searchform" id="search-form">
        <input type="text" id="city-input" placeholder="Enter your city..." />
        <input type="submit" className="btn-search" value="Search" />
        <input
          type="button"
          className="btn-current"
          value="Current"
          id="current-location"
        />
      </form>
      <hr />
    </div>
  );
}
