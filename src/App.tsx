import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LocationDetails from "./components/LocationDetails/LocationDetails";
import Weather from "./components/Weather/Weather";

const API_KEY = "c7af366394f85a1c4c6c09e10a4d89ef";
function App() {
  const [result, setResult] = useState({});
  const getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements["city"].value;
    const country = e.target.elements["country"].value;
    var API_URL = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}id=524901&appid=${API_KEY}`
    );
    var data = await API_URL.json();

    var lat = data.city.coord.lat;
    var lon = data.city.coord.lon;
    API_URL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    data = await API_URL.json();
    setResult(data);
  };

  return (
    <div className="container bg-dark vh-100 ">
      <div className="text-white row justify-content-center">
        <Header />
        <LocationDetails getWather={getWeather} />
        <Weather weather={result} />
      </div>
    </div>
  );
}

export default App;
