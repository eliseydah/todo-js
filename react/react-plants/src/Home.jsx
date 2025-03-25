import "./Home.css";
import Categories from "./Categories";
import { useNavigate } from "react-router";
import Header from "./Header";
function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalogue");
  };

  return (
    <div className="home-container">
      <Header />
      <div className="intro">
        <h2>Welcome to Plant Shop</h2>
        <p>Find the perfect plant for your home</p>
        <p> We help create a cozy space for living and relaxation.</p>
        <button className="catalogue-button" onClick={handleClick}>
          open catalogue
        </button>
        <Categories />
      </div>
    </div>
  );
}
export default Home;
