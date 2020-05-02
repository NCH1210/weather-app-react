import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h2 id="city">Porto </h2>
      <h3 className="date-display"> 15:00 </h3>
      <p className="hue-rotate">
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          width="10%"
          id="description-icon"
        />
        <span id="description" />
      </p>
      <div className="row">
        <div className="col-sm">Temperature</div>
        <div className="col-sm">Humidity</div>
        <div className="col-sm">Wind</div>
      </div>
      <div className="row display">
        <div className="col-sm">
          <span id="temperature" />
          <span id="units">
            <a href="#" className="active" id="CelsiusLink">
              25°C
            </a>{" "}
            |
            <a id="FahrenheitLink" href="#">
              °F
            </a>
          </span>
        </div>
        <div className="col-sm">
          <span id="humidity" />
          20%
        </div>
        <div className="col-sm">
          <span id="wind" />
          10km/h
        </div>
      </div>
      <hr />
    </div>
  );
}
