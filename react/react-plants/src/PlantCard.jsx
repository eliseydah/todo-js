import "./PlantCard.css";
import { useState } from "react";
function PlantCard(props) {
  const [wishlist, addToWishlist] = useState();
  let checkboxClass = "checkbox";

  function toWishlist() {
    if (wishlist) {
      addToWishlist(false);
      window.localStorage.removeItem(`${props.name}`);
      checkboxClass = "checkbox:checked::after";
    } else {
      addToWishlist(true);
      window.localStorage.setItem(`${props.name}`, `${props.id}`);
      checkboxClass = "checkbox::after";
    }
    console.log("added to Wislist");
    console.log(wishlist);
    console.log(window.localStorage.getItem(`${props.name}`));
  }
  return (
    <div>
      <a href={props.link}>
        <div className="plant-card">
          <img
            src={props.image}
            alt={props.name}
            width="250px"
            height="250px"
          />
          {props.isBasket ? (
            <span></span>
          ) : (
            <label className="custom-checkbox">
              <input
                type="checkbox"
                className={checkboxClass}
                onChange={toWishlist}
              />
              <span className="checkbox-icon"></span>
            </label>
          )}
          <h3>{props.name}</h3>
          <div className="price-and-description">
            <p>Price: {props.price}$</p>
            <button className="to-plant-info">Read More</button>
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
      </a>
    </div>
  );
}
export default PlantCard;
