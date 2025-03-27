import PlantCard from "./PlantCard";
function PlantsWishlist() {
  const plants = [
    {
      name: "Fikus Elastica",
      price: 10,
      image: "../images/fikus.jpeg",
      rating: 4.1,
      id: 1,
    },
    {
      name: "Aglaonema",
      price: 15,
      image: "../images/aglaonema.jpeg",
      rating: 4.2,
      id: 2,
    },
    {
      name: "Fittonia",
      price: 20,
      image: "../images/fittonia.jpeg",
      rating: 4.3,
      id: 3,
    },
    {
      name: "Cactus",
      price: 25,
      image: "../images/cactus.jpeg",
      rating: 4.0,
      id: 4,
    },
    {
      name: "Rubber Plant",
      price: 30,
      image: "../images/succulent.jpeg",
      rating: 4.4,
      id: 5,
    },
    {
      name: "Money Tree",
      price: 35,
      image: "../images/tolstyanka.jpeg",
      rating: 4.1,
      id: 6,
    },
    {
      name: "Spatifillum",
      price: 40,
      image: "../images/spatifillum.png",
      rating: 3.9,
      id: 7,
    },
    {
      name: "Sansevieria",
      price: 45,
      image: "../images/sansevieria.jpeg",
      rating: 4.2,
      id: 8,
    },
  ];
  const wishArray = plants.filter((item) => {
    return item.id.toString() === window.localStorage.getItem(`${item.name}`);
  });
  console.log(wishArray);
  return (
    <div>
      <h2>Wishlist</h2>
      <div className="plants-menu">
        {wishArray.map((plant) => (
          <PlantCard
            key={plant.id}
            link="#"
            name={plant.name}
            id={plant.id}
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
export default PlantsWishlist;
