import React from "react";
import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App container weather-app">
      <h1>Weather App</h1>
      <Search />
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
}
