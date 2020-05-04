import React, { useState } from "react";
import "./styles.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="searchform" id="search-form">
        <input
          onChange={handleCityChange}
          type="text"
          id="city-input"
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
