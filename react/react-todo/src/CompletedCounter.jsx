import "./CompletedCounter.css";
const TodoItem = (props) => {
  return (
    <div className="clear-completed">
      <button
        onClick="onRemoveCompleted"
        className="clear-completed-button"
        type="button"
      >
        <span id="clearElementCounter">{props}</span>
        clear completed
      </button>
    </div>
  );
};
export default TodoItem;
