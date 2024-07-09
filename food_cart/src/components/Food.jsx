import React, { useState } from "react";
import "../components/food.css";

const Food = ({ food, cart, setCart }) => {
  const addCart = () => {
    setCart([...cart, food]);
    console.log(cart);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== food.id ));
    console.log("button clicked");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="num">
          <p>{food.id}</p>
        </div>
        <img className="food" src={food.image} alt="sample" />
        <img
          className="food-type"
          src={food.veg ? "./veg.png" : "./nonveg.png"}
          alt=""
        />
        <div className="details">
          <p id="name">{food.name}</p>
          <p>₹ {food.price}</p>
          <img className="rating" src="./rating.png" alt="rating" />
          <span className="rating">{food.ratings}</span>
          <p className="ingredients">{food.ingredients}</p>
          {cart.includes(food)?<button className="remove" onClick={removeCart}>REMOVE CART</button>:<button className="add" onClick={addCart}>ADD CART</button>}
        </div>
      </div>
    </div>
  );
};

export default Food;
