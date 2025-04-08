import "./PlantCard.css";
import { useState } from "react";
function PlantCard(props) {
  const [wishlist, setWishlist] = useState(() => {
    // Проверяем, есть ли элемент в localStorage при загрузке
    return localStorage.getItem(props.name) !== null;
  });

  const checkboxClass = wishlist ? "checkbox" : "checkbox";

  function toWishlist() {
    if (wishlist) {
      setWishlist(false);
      window.localStorage.removeItem(`${props.name}`);
    } else {
      setWishlist(true);
      window.localStorage.setItem(`${props.name}`, `${props.id}`);
    }
    console.log(`Wishlist state: ${wishlist}`);
  }
  return (
    <div>
      <div className="plant-card">
        <img src={props.image} alt={props.name} width="250px" height="250px" />
        {props.isBasket ? (
          <span></span>
        ) : (
          <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={wishlist}
              className={checkboxClass}
              onChange={toWishlist}
            />
            <span className="checkbox-icon"></span>
          </label>
        )}
        <h3>{props.name}</h3>
        <div className="price-and-description">
          <div>Price: {props.price}$</div>
        </div>

        {props.isBasket ? (
          <div>
            <button className="remove-from-busket">
              <img
                className="cross"
                src="../images/cross.svg"
                width="30px"
                height="30px"
              />
            </button>
          </div>
        ) : (
          <div>
            <div className="icons">
              <div className="rating">
                <img
                  src="../images/star.svg"
                  alt="logo"
                  height="30px"
                  width="30px"
                  className="star-svg"
                />
                <span> {props.rating} </span>
              </div>
              <a href={props.link}>
                <button className="to-plant-info">Read More</button>
              </a>
              <button onClick={props.addToBasket}>
                <img
                  src="../images/newBasket.svg"
                  alt="logo"
                  height="30px"
                  width="30px"
                  className="basket-svg"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default PlantCard;
