import React from "react";

const Weather = (props: any) => {
  // console.log( Object.keys(props.weather).length === 0)
  if (Object.keys(props.weather).length !== 0) {
    var temp = (props.weather.main.temp - 273.15).toFixed(2);
    var feel_temp = (props.weather.main.feels_like - 273.15).toFixed(2);
    var temp_min = (props.weather.main.temp_min - 273.15).toFixed(2);
    var temp_max = (props.weather.main.temp_max - 273.15).toFixed(2);
    return (
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h4>
            Today's Weather of {props.weather.name}, {props.weather.sys.country}
          </h4>
        </div>
        <div className="col-6 text-end">
          <strong>Temperature: </strong>
        </div>
        <div className="col-6 text-start">
          {temp}ºC
        </div>
        <div className="col-6 text-end">
          <strong>Feels Like: </strong>
        </div>
        <div className="col-6 text-start">
          {feel_temp}ºC
        </div>
        <div className="col-6 text-end">
          <strong>Minimum Temperature: </strong>
        </div>
        <div className="col-6 text-start">
          {temp_min}ºC
        </div>
        <div className="col-6 text-end">
          <strong>Maximum Temperature: </strong>
        </div>
        <div className="col-6 text-start">
          {temp_max}ºC
        </div>
        <div className="col-6 text-end">
          <strong>Weather State: </strong>
        </div>
        <div className="col-6 text-start">
          {props.weather.weather[0].main}
        </div>
        <div className="col-6 text-end">
          <strong>Weather Description: </strong>
        </div>
        <div className="col-6 text-start">
          {props.weather.weather[0].description}
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h3>Select Your Location</h3>
      </div>
    );
  }
};

export default Weather;
