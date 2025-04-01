import React from "react";
import { useParams } from "react-router";
import { plants } from "./plants";
function PlantView() {
  const { id } = useParams(); // Get plantId from the route
  console.log(plants);
  const plant = plants.find((plant) => plant.id === parseInt(id));
  return (
    <div>
      <img src={plant.image} alt={plant.name} width="500px" height="500px" />
      <div>
        <p>{[plant.name]}</p>
        <p>{[plant.price]}</p>
        <p>{[plant.rating]}</p>
        <p>{plant.description}</p>
      </div>
    </div>
  );
}

export default PlantView;
