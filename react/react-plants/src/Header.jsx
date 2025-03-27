import "./Header.css";
import { BasketContext } from "./contexts";
import { Link } from "react-router";
import { useContext } from "react";
function Header() {
  const [basket] = useContext(BasketContext); // basketHook = [basket, setBasket]

  return (
    <header className="container">
      <div className="logo">
        <img src="../images/plant.svg" alt="logo" height="40px" width="40px" />
        <p> Plant Shop </p>
      </div>
      <ul className="navigation-bar">
        <li>
          <Link to="/">
            <img
              src="../images/home.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/catalogue">
            <img
              src="../images/menu.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span>Catalogue</span>
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <img
              src="../images/heart.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span>Wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/basket">
            <img
              src="../images/basket.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span> Cart {basket.length}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
