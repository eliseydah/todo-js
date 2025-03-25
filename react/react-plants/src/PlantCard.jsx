import "./PlantCard.css";
function PlantCard(props) {
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
          <h3>{props.name}</h3>
          <p>Price: {props.price}$</p>
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
            <button>
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
      </a>
    </div>
  );
}
export default PlantCard;
