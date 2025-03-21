function CategoryItem(props) {
  return (
    <div>
      <a href={props.link}>
        <div className="category-item">
          <img
            src={props.image}
            alt={props.name}
            width="120px"
            height="120px"
          />
          <h3>{props.title}</h3>
        </div>
      </a>
    </div>
  );
}
export default CategoryItem;
