import React, { useContext } from "react";
import { BasketContext } from "./contexts";
import PlantCard from "./PlantCard";

const PlantsBasket = () => {
  const [basket] = useContext(BasketContext); // basketHook = [basket, setBasket]

  return (
    <div>
      <h1>My Basket</h1>
      <p>Your basket has {basket.length} items</p>
      {/* {basket.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}
      <div className="plants-menu">
        {basket.map((plant, index) => (
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
};
export default PlantsBasket;
