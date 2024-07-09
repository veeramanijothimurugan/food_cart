import React, { useEffect, useState } from "react";
import "../components/cart.css";
import Food from "./Food";
import empty from "../assets/empty.png";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const length = cart.length;
  console.log(length);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  return (
    <>
      {length !== 0 && (
        <div className="cart-sologan">
          <h2>
            " From Our <span>Kitchen</span> to Your<span> Doorstep</span> "
          </h2>
        </div>
      )}
      {length !== 0 ? (
        <div className="cart-container">
          <h3>CHECKOUT MEAL</h3>
          <hr />
          <div className="header">
            <h4>Price</h4>
          </div>
          {cart.map((food) => (
            <div className="cart-card" key={food.id}>
              <div className="img">
                <img src={food.image} alt="sample" />
              </div>
              <div className="veg-name">
                <img src={food.veg ? "./veg.png" : "./nonveg.png"} alt="" />
                <p className="name">{food.name}</p>
                <p className="ingre">{food.ingredients}</p>
              </div>
              <div className="price-btn">
                <p>₹{food.price}</p>
                <button
                  onClick={() => {
                    setCart(cart.filter((c) => c.id !== food.id));
                  }}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          ;
          <div className="total-pay">
            <h3>TOTAL {total} ₹</h3>
            <button>Pay</button>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <img className="mt-img" width="200px" src={empty} alt="empty" />
          <h3>No items in cart</h3>
        </div>
      )}
    </>
  );
};

export default Cart;
