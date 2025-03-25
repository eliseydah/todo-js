import "./Home.css";
import Categories from "./Categories";
// import { useNavigate } from "react-router";
import Header from "./Header";
function Home() {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/catalogue");
  // };

  return (
    <div className="home-container">
      <Header />
      <div className="intro">
        <h2>Welcome to Plant Shop</h2>
        <p className="description">Find the perfect plant for your home</p>
        <p className="description">
          We help create a cozy space for living and relaxation.
        </p>
        <a className="catalogue-link" href="/catalogue">
          open catalogue
        </a>
        <Categories />
      </div>
    </div>
  );
}
export default Home;
