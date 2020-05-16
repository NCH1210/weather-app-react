import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Search from "./Search";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
      /*<!--`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png` -->*/
      date: new Date(response.data.dt * 1000),
      wind: 12,
      city: response.data.name,
    });
  }
  function searchCity() {
    const apiKey = "f45e74d7c2b9da42eac08c872edb3d3d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div>
          <Search city={city} setCity={setCity} searchCity={searchCity} />
        </div>
        <div className="Weather">
          <h2 id="city">{weatherData.city} </h2>
          <h3 className="date-display">
            <FormattedDate date={weatherData.date} />
          </h3>
          <p className="weather-icon">
            <WeatherIcon
              data={weatherData.icon}
              width="10%"
              id="description-icon"
            />
          </p>
          <div className="row">
            <div className="col-sm">Temperature</div>
            <div className="col-sm">Humidity</div>
            <div className="col-sm">Wind</div>
          </div>
          <div className="row display">
            <div className="col-sm">
              <WeatherTemperature celsius={weatherData.temperature} />
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
      </div>
    );
  } else {
    searchCity();
    return "Loading...";
  }
}
