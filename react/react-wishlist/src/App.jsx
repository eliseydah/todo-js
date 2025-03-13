import { useState, useEffect } from "react";
import { fetchWishes, createWish, deleteWish } from "./api";
import ModalButton from "./ModalButton";
import WishItem from "./WishItem";
import "./App.css";

function App() {
  const [wishes, setWishes] = useState([]);

  async function getWishes() {
    const result = await fetchWishes();
    setWishes(result);
  }
  async function addWish(description, title, link, category) {
    await createWish(description, title, link, category);
    await getWishes();
  }

  async function removeWish(wish) {
    await deleteWish(wish.id);
    await getWishes();
  }
  // function selectedChangeValue(value) {
  //   console.log(value);
  //   return (selectedvalue.value = value);
  // }
  useEffect(() => {
    getWishes();
  }, []);
  return (
    <div className="mainPicture">
      <header className="top">
        <div className="inscription">&#x270E; MyWishlist</div>
        <div className="theme-choice">
          <div className="color-choice">Design choice</div>
        </div>

        <button
          className="add-wishes btn btn-warning btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Add wishes
        </button>
      </header>
      <main>
        <div className="main-content">
          <ModalButton
            addWish={(description, title, link, category) => {
              addWish(description, title, link, category);
            }}
          />
        </div>
        <div className="container">
          {wishes.map((item) => (
            <WishItem
              wish={item}
              key={item.id}
              removeWish={() => {
                removeWish(item);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
