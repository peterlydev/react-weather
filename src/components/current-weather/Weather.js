import React from "react";
import "./Weather.css";

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
        <img src="icons/night.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temp">20°</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">25°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">25°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
