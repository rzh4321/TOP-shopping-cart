import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shopping from "./components/Shopping";
import NoMatch from './components/NoMatch';
import "./App.css";
import cloneDeep from 'lodash/cloneDeep';



export default function App() {
  const [cart, setCart] = useState([]);

  function changeQuantity(quantity, itemName, price) {
    if (quantity >= 0) {
      const newCart = cloneDeep(cart);
      let item = newCart.find(obj => obj.name === itemName);
      if (item === undefined) {
        item = {name: itemName, cost: price};
        newCart.push(item);
      } 
      item.count = quantity;
      if (item.count === 0) {
        newCart.splice(newCart.indexOf(item), 1);
      }
      setCart(newCart);
    }
  }

  function getTotal() {
    let tot = 0;
    for (const item of cart) {
      console.log(item);
      tot += (item.cost * item.count);
    }

    return tot.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }


  // useEffect(() => console.log(cart));
  return (
    <>
      <NavBar count={cart.length} price={getTotal()} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/TOP-shopping-cart/' element={<Home />} />

        <Route path='shop' element={<Shopping cart={cart} changeQuantity={changeQuantity} title="Knicks Mens Jerseys" />} />

        <Route path='*' element={<NoMatch />} />
      </Routes>
    
    </>
  );
}
