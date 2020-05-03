import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: "Wednesday 07:00",
      wind: 12,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h2 id="city">{weatherData.city} </h2>
        <h3 className="date-display"> {weatherData.date} </h3>
        <p className="hue-rotate">
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            width="10%"
            id="description-icon"
          />
          <span id="description">{weatherData.description}</span>
        </p>
        <div className="row">
          <div className="col-sm">Temperature</div>
          <div className="col-sm">Humidity</div>
          <div className="col-sm">Wind</div>
        </div>
        <div className="row display">
          <div className="col-sm">
            <span id="temperature">{Math.round(weatherData.temperature)}</span>
            <span id="units">
              <a href="#" className="active" id="CelsiusLink">
                °C
              </a>{" "}
              |
              <a id="FahrenheitLink" href="#">
                °F
              </a>
            </span>
          </div>
          <div className="col-sm">
            <span id="humidity" />
            {weatherData.humidity}%
          </div>
          <div className="col-sm">
            <span id="wind" />
            {weatherData.wind}km/h
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "f45e74d7c2b9da42eac08c872edb3d3d";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
