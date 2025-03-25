import PlantCard from "./PlantCard";
import "./PlantsMenu.css";
function PlantsMenu() {
  const plants = [
    {
      name: "Fikus Elastica",
      price: 10,
      image: "../images/fikus.jpeg",
      rating: 4.1,
    },
    {
      name: "Aglaonema",
      price: 15,
      image: "../images/aglaonema.jpeg",
      rating: 4.2,
    },
    {
      name: "Fittonia",
      price: 20,
      image: "../images/fittonia.jpeg",
      rating: 4.3,
    },
    { name: "Cactus", price: 25, image: "../images/cactus.jpeg", rating: 4.0 },
    {
      name: "Rubber Plant",
      price: 30,
      image: "../images/succulent.jpeg",
      rating: 4.4,
    },
    {
      name: "Money Tree",
      price: 35,
      image: "../images/tolstyanka.jpeg",
      rating: 4.1,
    },
    {
      name: "Spatifillum",
      price: 40,
      image: "../images/spatifillum.png",
      rating: 3.9,
    },
    {
      name: "Sansevieria",
      price: 45,
      image: "../images/sansevieria.jpeg",
      rating: 4.2,
      toBuy: false,
      toWishlist: false,
    },
  ];
  return (
    <div>
      <h2>Plants Catalogue</h2>
      <div className="plants-menu">
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            link="#"
            name={plant.name}
            price={plant.price}
            image={plant.image}
            rating={plant.rating}
            toBuy={plant.toBuy}
            toWishlist={plant.toWishlist}
          />
        ))}
      </div>
    </div>
  );
}
export default PlantsMenu;
