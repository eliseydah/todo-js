import "./index.css";
import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Categories from "./Categories.jsx";
import PlantsMenu from "./PlantsMenu.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<PlantsMenu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
