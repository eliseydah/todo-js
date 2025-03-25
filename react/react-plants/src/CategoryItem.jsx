function CategoryItem(props) {
  return (
    <div>
      <a href={props.link}>
        <div className="category-item">
          <img
            src={props.image}
            alt={props.name}
            width="150px"
            height="150px"
          />
          <p className="plant-title">{props.title}</p>
        </div>
      </a>
    </div>
  );
}
export default CategoryItem;
