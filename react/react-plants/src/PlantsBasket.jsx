import React, { useContext } from "react";
import { BasketContext } from "./contexts";

const PlantsBasket = () => {
  const { basket } = useContext(BasketContext);

  return (
    <div>
      <h1>My Basket</h1>
      {basket.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        <p>Your basket has {basket.length} items</p>
      )}
      {basket.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
export default PlantsBasket;
