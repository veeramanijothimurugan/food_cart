import "../components/home.css";
import Food from "./Food";
import data from "../assets/food.json";

const Home = () => {
  return (
    <>
      <div className="sologan">
        <h2>
          "Taste the Difference, Feel the Excellence"
          <br />
          <span>Where Every Dish Tells a Tale of Craftsmanship</span>
        </h2>
      </div>
      <div className="container">
        {data.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
    </>
  );
};

export default Home;
