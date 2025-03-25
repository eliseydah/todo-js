import "./Header.css";
function Header() {
  return (
    <header className="container">
      <div className="logo">
        <img src="../images/plant.svg" alt="logo" height="40px" width="40px" />
        <p> Plant Shop </p>
      </div>
      <ul className="navigation-bar">
        <li>
          <a href="/">
            <img
              src="../images/home.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/catalogue">
            <img
              src="../images/menu.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span>Catalogue</span>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="../images/heart.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span>Wishlist</span>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="../images/basket.svg"
              alt="logo"
              height="25px"
              width="25px"
            />
            <span>Basket</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
