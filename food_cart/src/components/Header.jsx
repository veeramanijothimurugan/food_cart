import React from "react";
import { Link } from "react-router-dom";
import "../components/header.css";

const Header = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src="./logo.png" alt="Food cart" />
          <span>Food Cart</span>
        </div>
        <div className="nav-btn">
          <ul>
            <li>
              <img className="icon" src="./home.png" alt="" />
              <Link to={"/"}>  Home</Link>
            </li>
            <li>
              <Link to={"/Cart"}>
                <img className="icon" src="./cart.png" alt="" />
                  Cart<span id="count"> 1</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
