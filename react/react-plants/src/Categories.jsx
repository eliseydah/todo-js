import CategoryItem from "./CategoryItem";
import "./Categories.css";
function Categories() {
  const categories = [
    { title: "Large Plants", image: "../images/spatifillum.png", link: "" },
    { title: "For Beginners", image: "../images/cactus.jpeg", link: "" },
    { title: "Low-Light", image: "../images/aglaonema.jpeg", link: "" },
    { title: "Succulents", image: "../images/succulent.jpeg", link: "" },
    { title: "Moisture-loving", image: "../images/fittonia.jpeg", link: "" },
    { title: "Small plants", image: " ../images/tolstyanka.jpeg", link: "" },
    { title: "Drought-tolerant", image: "../images/fikus.jpeg", link: "" },
    { title: "Air-purifying", image: "../images/sansevieria.jpeg", link: "" },
  ];
  return (
    <div>
      <div className="item-container">
        {categories.map((item) => (
          <CategoryItem
            title={item.title}
            image={item.image}
            link={item.link}
            key={item.id}
          />
        ))}
      </div>
      <div className="category-button-container">
        {/* <button className="category-button">View All Plants</button> */}
      </div>
    </div>
  );
}
export default Categories;
