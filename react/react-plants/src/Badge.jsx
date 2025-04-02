import "./Badge.css";
function Badge(props) {
  return (
    <div className="pet-section">
      <div className={`pet-section ${props.color}`}>
        <img src={props.image} alt="logo" height="30px" width="30px" />
        <span> {props.text}</span>
      </div>
    </div>
  );
}
export default Badge;
