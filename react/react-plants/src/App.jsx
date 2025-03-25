// import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Categories from "./Categories";
import PlantsMenu from "./PlantsMenu";

function App() {
  return (
    <div className="root">
      <Home />
      <Categories />
      <PlantsMenu />
    </div>
  );
}

export default App;
