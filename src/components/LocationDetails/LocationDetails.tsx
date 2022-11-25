import React, { useState } from "react";

const LocationDetails = (props: any) => {
  const [countries, setCountry] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const getCountry = async () => {
    const API_URL = await fetch(
      `https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`
    );
    var data = await API_URL.json();
    var countris = data.map((country: any) => country.country);
    var adata = [...new Set(countris)];
    adata.sort();
    setCountry(adata);
  };
  /**/
  const getSelectedCountry = async (e: any) => {
    const API_URL = await fetch(
      `https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`
    );
    var data = await API_URL.json();
    var citie = data.filter(
      (country: any) => country.country === e.target.value
    );
    var acountris = citie.map((city: any) => city.name);
    var acitie = [...new Set(acountris)];
    acitie.sort();
    setCities(acitie);
  };
  /**/

  /**/
  if (Object.keys(countries).length === 0) {
    return (
      <div className="mb-5 col-12">
        <form onSubmit={props.getWather} className="text-center">
          <select className="bg-transparent text-white p-1 w-50"
            name="country"
            id="countries"
            onClick={getCountry}
            onChange={getSelectedCountry}
            required
          >
            <option value="">Select Country</option>;
            {countries.map((contry) => {
              return (
                <option
                  value={contry}
                  key={contry}
                  onClick={getSelectedCountry}
                >
                  {contry}
                </option>
              );
            })}
          </select>
          <select className="bg-transparent text-white p-1 w-50" name="city" id="city" required>
            <option value="">Select City</option>
          </select>
          <button className="p-1 mt-3 bg-transparent text-white border-white w-50">Get Weather</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="mb-5 col-12">
        <form onSubmit={props.getWather} className="text-center">
          <select className="bg-transparent text-white p-1 w-50"
            name="country"
            id="countries"
            onClick={getCountry}
            onChange={getSelectedCountry}
            required
          >
            <option value=""  className="bg-transparent text-black">Select Country</option>;
            {countries.map((contry) => {
              return (
                <option className="bg-transparent text-black"
                  value={contry}
                  key={contry}
                  onClick={getSelectedCountry}
                >
                  {contry}
                </option>
              );
            })}
          </select>
          <select className="bg-transparent text-white p-1 w-50" name="city" id="city" required>
            <option value=""  className="bg-transparent text-black">Select City</option>;
            {cities.map((city) => {
              return (
                <option  className="bg-transparent text-black" value={city} key={city} onClick={getSelectedCountry}>
                  {city}
                </option>
              );
            })}
          </select>
          <button className="p-1 mt-3 bg-transparent text-white border-white w-50">Get Weather</button>
        </form>
      </div>
    );
  }
};

export default LocationDetails;
