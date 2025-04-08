import PlantCard from "./PlantCard";
import "./PlantsMenu.css";
import { BasketContext } from "./contexts";
import { plants } from "./plants";
import { useContext } from "react";
import { useSearchParams } from "react-router";
function PlantsMenu() {
  const [basket, setBasket] = useContext(BasketContext);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const filteredPlants = filter
    ? plants.filter(
        (plant) =>
          plant.difficulty === filter ||
          plant.light === filter ||
          plant.type === filter ||
          plant.watering === filter ||
          plant.bonus === filter ||
          plant.size === filter
      )
    : plants;
  const plantsTitle = filter ? `${filter} plants` : "Plants catalogue";
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
      <h2>{plantsTitle}</h2>
      <div className="plants-menu">
        {filteredPlants.map((plant) => (
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
