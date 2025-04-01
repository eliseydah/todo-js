import PlantCard from "./PlantCard";
import "./PlantsMenu.css";
import { BasketContext } from "./contexts";
import { plants } from "./plants";
import { useContext } from "react";
function PlantsMenu() {
  const [basket, setBasket] = useContext(BasketContext);
  function addToBasket(plant) {
    setBasket([
      ...basket,
      {
        name: plant.name,
        price: plant.price,
        image: plant.image,
        rating: plant.rating,
      },
    ]);
    console.log(basket);
  }

  return (
    <div>
      <h2>Plants Catalogue</h2>
      <div className="plants-menu">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            link={`/catalogue/${plant.id}`}
            name={plant.name}
            id={plant.id}
            price={plant.price}
            image={plant.image}
            rating={plant.rating}
            toBuy={plant.toBuy}
            toWishlist={plant.toWishlist}
            addToBasket={() => {
              addToBasket(plant);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default PlantsMenu;
