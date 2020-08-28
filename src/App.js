import React from 'react';
const api = {
  key: "aa26bd80befae81140394a9972d98f93",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box" >
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
