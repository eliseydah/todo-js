import React from "react";
import { useParams } from "react-router";
import { plants } from "./plants";
function PlantView() {
  const { id } = useParams(); // Get plantId from the route
  console.log(plants);
  return (
    <div>
      <h1>here is plant</h1>
      <p>Name</p>
    </div>
  );
}

export default PlantView;
