import React from "react";
import "../components/food.css"

const Food = ({food}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="num">
        <p>{food.id}</p>
        </div>
        <img
          className="food"
          src={food.image}
          alt="sample"
        />
        <div className="details">
          <img className="food-type" src={food.veg?"./veg.png":"./nonveg.png"} alt="" />
          <p id="name">{food.name}</p>
          <p>₹ {food.price}</p>
          <img className="rating" src="./rating.png" alt="rating" /><span className="rating">{food.ratings}</span>
          <button>ADD CART</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
