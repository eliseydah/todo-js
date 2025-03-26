// import { useState } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import "./App.css";
import Home from "./Home";
import PlantsBasket from "./PlantsBasket";
import { BasketContext } from "./contexts";
import Categories from "./Categories";
import PlantsMenu from "./PlantsMenu";

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<PlantsMenu />} />
          <Route path="/basket" element={<PlantsBasket />} />
        </Routes>
      </BrowserRouter>
    </BasketContext.Provider>
  );
}

export default App;
