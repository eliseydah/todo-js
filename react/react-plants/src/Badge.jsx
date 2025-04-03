import "./Badge.css";
function Badge(props) {
  return (
    <div className="pet-section">
      <div className={`pet-section ${props.color}`}>
        {props.image ? (
          <img src={props.image} alt="logo" height="30px" width="30px" />
        ) : null}
        <span className="badge-text"> {props.text}</span>
      </div>
    </div>
  );
}
export default Badge;
