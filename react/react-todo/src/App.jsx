import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./App.css";
import Counter from "./Counter";
import CompletedCounter from "./CompletedCounter";
import RadioButtons from "./RadioButtons";

function App() {
  const [buttonFilter, setButtonFilter] = useState("All");
  const [todos, setTodos] = useState([]); // ref([])
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [title, setTitle] = useState("");

  async function updateTodo(id, state) {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: state }),
      });
    } catch (err) {
      console.error("Todo update has failed!", err);
    }
  }

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
        body: JSON.stringify({ title, completed: false }),
      });
    } catch (err) {
      console.error("Add todo has failed!", err);
    }
  }
  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error("Todo remove has failed!", err);
    }
  }
  async function addTodo() {
    await createTodo();
    await fetchTodos();
    setTitle("");
  }
  async function removeTodo(todo) {
    console.log(todo);
    await deleteTodo(todo.id);
    await fetchTodos();
  }
  async function onToggleTodo(todo) {
    await updateTodo(todo.id, !todo.completed);
    await fetchTodos();
  }
  function reloadFilteredTodos() {
    if (buttonFilter === "All") {
      setFilteredTodos(todos);
    }
    if (buttonFilter === "Active") {
      setFilteredTodos(todos.filter((t) => !t.completed));
    }
    if (buttonFilter === "Completed") {
      setFilteredTodos(todos.filter((t) => t.completed));
    }
  }

  useEffect(reloadFilteredTodos, [todos, buttonFilter]);

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
            onChange={(e) => setTitle(e.target.value)}
            className="todo-form-input"
            type="title"
            placeholder="What needs to be completed?"
            value={title}
            required
          />
        </form>
      </div>
      {filteredTodos.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          removeItem={() => {
            removeTodo(item);
          }}
          onToggleTodo={() => {
            onToggleTodo(item);
          }}
        />
      ))}
      <div className="panel">
        <Counter todos={todos} />
        <RadioButtons
          changeFilterValue={(value) => {
            setButtonFilter(value);
            buttonFilter = { buttonFilter };
          }}
        />
      </div>
    </>
  );
}

export default App;
