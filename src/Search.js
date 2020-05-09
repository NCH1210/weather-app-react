import React, { useState } from "react";
import "./styles.css";
import Weather from "./Weather";

export default function Search(props) {
  function handleSubmit(event) {
    event.preventDefault();
    Search(props.city);
  }

  function handleCityChange(event) {
    props.setCity(event.target.value);
  }

  return (
    <div className="Search" searchdata={props.handleCityChange}>
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
