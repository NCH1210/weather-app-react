import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App container weather-app">
      <h1>Weather App</h1>
      <Weather defaultCity="Porto" />

      <Footer />
    </div>
  );
}
