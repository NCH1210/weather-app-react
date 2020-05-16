import React from "react";
import "./styles.css";

export default function Search(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.searchCity();
  }

  function handleCityChange(event) {
    props.setCity(event.target.value);
    Search();
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="searchform" id="search-form">
        <input
          onChange={handleCityChange}
          type="text"
          id="cityinput"
          placeholder="Enter your city..."
        />
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
