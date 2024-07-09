import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import { useState } from 'react'
import food from "./assets/food.json"


function App() {
  const [cart,setCart]=useState([]);
  return (
    <>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home cart={cart} setCart={setCart} />}/>
            <Route path='/cart' element={<Cart food={food} cart={cart} setCart={setCart}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
