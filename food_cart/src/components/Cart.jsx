import React, { useEffect, useState } from "react";
import "../components/cart.css";
import Food from "./Food";

const Cart = ({cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== cart.id ));
    console.log(cart);
  };

  return (
    <>
      <div className="cart-sologan">
        <h2>
          " From Our <span>Kitchen</span> to Your<span> Doorstep</span> "
        </h2>
      </div>

      <div className="cart-container">
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
              <p>Rs {food.price}</p>
              <button onClick={removeCart} className="btn">
                Remove
              </button>
            </div>
          </div>
        ))}
        ;
        <br />
        <p>Total Amount {total}</p>
      </div>
    </>
  );
};

export default Cart;
