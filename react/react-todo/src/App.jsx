import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]); // ref([])
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "GET",
      });

      const todosJson = await response.json();
      setTodos(todosJson);
    } catch (err) {
      console.error(
        "Todo fetching has failed, the server is not accessible!",
        err
      );
    }
  }
  async function createTodo() {
    try {
      await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, completed }),
      });
    } catch (err) {
      console.error("Add todo has failed!", err);
    }
  }
  async function addTodo() {
    await createTodo();
    await fetchTodos();
    setTitle("");
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1>todos</h1>
      <div className="main-content">
        <form
          className="todo-form"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          <input
            className="todo-form-input"
            type="title"
            placeholder="What needs to be completed?"
            required
          />
        </form>
      </div>
      {todos.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </>
  );
}

export default App;
