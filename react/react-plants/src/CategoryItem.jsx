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
          <p>{props.title}</p>
        </div>
      </a>
    </div>
  );
}
export default CategoryItem;
