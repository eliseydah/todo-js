// import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Categories from "./Categories";

function App() {
  return (
    <div className="root">
      <Header />
      <Home />
      <Categories />
    </div>
  );
}

export default App;
