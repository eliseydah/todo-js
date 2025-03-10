import "./TodoItem.css";
const TodoItem = (props) => {
  return (
    <div className="panel">
      <label>
        <input type="checkbox" className="todo-checkbox" />
        <span></span>
      </label>
      <p className="">Title</p>
      <button className="todo-delete-button">X</button>
    </div>
  );
};
export default TodoItem;
