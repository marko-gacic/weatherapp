import React, { useState } from 'react';
const api = {
  key: "aa26bd80befae81140394a9972d98f93",
  base: "https://api.openweathermap.org/data/2.5/"


}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');

          console.log(result)
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Octobar", "Novembar", "Decembar"]
    let days = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota"];

    let day = days[d.getDay()];


    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16)
          ? 'app warm'
          : 'app')
        : 'app'}>
      <main>
        <div className="search-box" >
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name},{weather.sys.county}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main} </div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>

  );
}

export default App;
