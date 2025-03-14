import "./BackgroundImage.css";
function BackgroundImage(props) {
  return (
    <div className="buttons">
      <button
        className="color-button rose"
        onClick={() => {
          props.changeColor("rose");
        }}
      ></button>
      <button
        className="color-button blue"
        onClick={() => {
          props.changeColor("blue");
        }}
      ></button>
      <button
        className="color-button"
        id="green"
        onClick={() => {
          props.changeColor("green");
        }}
      ></button>
      <button
        className="color-button beige"
        onClick={() => {
          props.changeColor("beige");
        }}
      ></button>
      <button
        className="color-button brown"
        onClick={() => {
          props.changeColor("brown");
        }}
      ></button>
      <button
        className="color-button yellow"
        onClick={() => {
          props.changeColor("yellow");
        }}
      ></button>
    </div>
  );
}
export default BackgroundImage;
