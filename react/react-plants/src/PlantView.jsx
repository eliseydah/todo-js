import React from "react";
import { useParams } from "react-router";
import { plants } from "./plants";
import Badge from "./Badge";
import "./PlantView.css";
function PlantView() {
  const { id } = useParams(); // Get plantId from the route
  console.log(plants);
  const plant = plants.find((plant) => plant.id === parseInt(id));
  const petFriendly = `${plant.petFriendly ? "pet-friendly" : "pet-dangerous"}`;
  return (
    <div className="view-container">
      <img src={plant.image} alt={plant.name} width="40%" height="80%" />
      <div className="plant-info">
        <h2>{[plant.name]}</h2>
        <p>{plant.type}</p>
        <div className="rating">
          <p>{[plant.price]} $</p>
          <img
            src="../images/star.svg"
            alt="logo"
            height="30px"
            width="30px"
            className="star-svg"
          />
          <span> {plant.rating} </span>
        </div>
        <div className="color-signs">
          <div className="difficulty">{plant.difficulty}</div>
          <div className="light">{plant.light}</div>
          <div className="water">{plant.watering}</div>
          <div className={petFriendly}>
            {plant.petFriendly ? (
              <Badge
                color="green"
                image="../images/paw.svg"
                text="Pet friendly"
              />
            ) : (
              <Badge
                color="red"
                image="../images/no-dogs.svg"
                text="Pet dangerous"
              />
            )}
          </div>
        </div>
        <h3>Overview:</h3>
        <p>{plant.description}</p>
      </div>
    </div>
  );
}

export default PlantView;
