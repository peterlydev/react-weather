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
        <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Min Temp</span>
            <span className="parameter-value">{Math.round(data.main.temp_min)}°</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Max Temp</span>
            <span className="parameter-value">{Math.round(data.main.temp_max)}°</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(data.wind.speed)} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{Math.round(data.main.pressure)} mb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
