import React from "react";
import "./styles.css";
import axios from "axios";

export default function Search(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.searchCity();
  }

  function handleCityChange(event) {
    props.setCity(event.target.value);
    Search();
  }
  /* function searchPosition(position) {
    props.setCity(position.target.value);
    navigator.geolocation.getCurrentPosition(Search);
  }

  function searchLocation(position) {
    let apiKey = "f45e74d7c2b9da42eac08c872edb3d3d";
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(searchPosition);
  } */

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
          /*onClick={searchLocation}*/
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
