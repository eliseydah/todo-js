import React from "react";
import { useParams } from "react-router";
import { plants } from "./plants";
import Badge from "./Badge";
import "./PlantView.css";
function PlantView() {
  const { id } = useParams(); // Get plantId from the route
  console.log(plants);
  const plant = plants.find((plant) => plant.id === parseInt(id));
  function getDifficultyColor(difficulty) {
    if (difficulty === "Beginner-friendly") {
      return "green";
    } else if (difficulty === "Intermediate") {
      return "yellow";
    } else {
      return "red";
    }
  }
  function getWateringColor(watering) {
    if (watering === "Regular") {
      return "blue";
    } else if (watering === "Moderate") {
      return "green";
    } else {
      return "yellow";
    }
  }
  return (
    <div className="view-container">
      <img src={plant.image} alt={plant.name} width="40%" height="80%" />
      <div className="plant-info">
        <h2>{[plant.name]}</h2>
        <p className="plant-type">{plant.type}</p>
        <div className="rating">
          <p className="price">{[plant.price]} $</p>
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
          <div>
            <Badge
              color={getDifficultyColor(plant.difficulty)}
              text={plant.difficulty}
              image="../images/plant.svg"
            />
          </div>
          <div>
            {plant.light === "Low-light" ? (
              <Badge
                color="blue"
                image="../images/half-sun.svg"
                text="Low-light"
              />
            ) : (
              <Badge
                color="yellow"
                image="../images/full-sun.svg"
                text="Bright light"
              />
            )}
          </div>
          <div>
            <Badge
              color={getWateringColor(plant.watering)}
              text={plant.watering}
              image="../images/water.svg"
            />
          </div>
          <div>
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
        <h3 className="plant-type">Overview:</h3>
        <p className="plant-description">{plant.description}</p>
      </div>
    </div>
  );
}

export default PlantView;
