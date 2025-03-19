import { useState } from "react";

import "./App.css";

function App() {
  const [cityName, setCityName] = useState(" ");
  return (
    <div className="root">
      <div className="container">
        <div className="city-input">
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            type="text"
            className="city-value"
            placeholder="Enter Location"
          />
          <button onClick="weatherInfo" className="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="mainContentDisplay"></div>
      </div>
    </div>
  );
}

export default App;
