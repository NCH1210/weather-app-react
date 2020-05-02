import React from "react";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h4>
        <span className="badge badge-light">Forecast</span>
      </h4>
      <div className="container-group hue-rotate">
        <div className="row" id="forecast-block">
          <div className="col-2">
            <span id="hours">10:00 </span>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="icon"
              alt="weather-icon"
              width="50"
            />
            <span id="forecast"> 15°C </span>
          </div>
          <div className="col-2">
            <span id="hours">13:00 </span>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="icon"
              alt="weather-icon"
              width="50"
            />
            <span id="forecast"> 17°C </span>
          </div>
          <div className="col-2">
            <span id="hours">16:00 </span>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="icon"
              alt="weather-icon"
              width="50"
            />
            <span id="forecast"> 20°C </span>
          </div>
          <div className="col-2">
            <span id="hours">19:00 </span>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="icon"
              alt="weather-icon"
              width="50"
            />
            <span id="forecast"> 16°C </span>
          </div>
          <div className="col-2">
            <span id="hours">22:00 </span>
            <img
              src="http://openweathermap.org/img/wn/02d@2x.png"
              id="icon"
              alt="weather-icon"
              width="50"
            />
            <span id="forecast"> 14°C </span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
