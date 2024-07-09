import "../components/home.css";
import Food from "./Food";
import data from "../assets/food.json";

const Home = ({cart,setCart}) => {
  return (
    <>
      <div className="sologan">
        <h2>
          "Taste the Difference, Feel the Excellence"
          <br />
          <span>Where Every Dish Tells a Tale of Craftsmanship</span>
        </h2>
      </div>
      <div className="home-container">
        {data.map((food) => (
          <Food key={food.id} food={food} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};

export default Home;
