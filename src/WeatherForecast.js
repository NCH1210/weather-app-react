import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <h4>
          <span id="badge" className="badge badge-light">
            Forecast
          </span>
        </h4>
        <div className="container-group">
          <div className="row" id="forecast-block">
            <div className="col-2" id="element">
              {new Date(forecast.list[0].dt * 1000).getHours()}:00
              <WeatherIcon data={forecast.list[0].weather[0].icon} />
              {Math.round(forecast.list[0].main.temp)}°C
            </div>
            <div className="col-2" id="element">
              {new Date(forecast.list[1].dt * 1000).getHours()}:00
              <WeatherIcon data={forecast.list[1].weather[0].icon} />
              {Math.round(forecast.list[1].main.temp)}°C
            </div>
            <div className="col-2" id="element">
              {new Date(forecast.list[2].dt * 1000).getHours()}:00
              <WeatherIcon data={forecast.list[2].weather[0].icon} />
              {Math.round(forecast.list[2].main.temp)}°C
            </div>
            <div className="col-2" id="element">
              {new Date(forecast.list[3].dt * 1000).getHours()}:00
              <WeatherIcon data={forecast.list[3].weather[0].icon} />
              {Math.round(forecast.list[3].main.temp)}°C
            </div>
            <div className="col-2" id="element">
              {new Date(forecast.list[4].dt * 1000).getHours()}:00
              <WeatherIcon data={forecast.list[4].weather[0].icon} />
              {Math.round(forecast.list[4].main.temp)}°C
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=f45e74d7c2b9da42eac08c872edb3d3d&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
