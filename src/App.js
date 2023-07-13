import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shopping from "./components/Shopping";
import NoMatch from './components/NoMatch';
import "./App.css";
import cloneDeep from 'lodash/cloneDeep';



export default function App() {
  const [cart, setCart] = useState([{name: "Donte DiVincenzo Nike Icon Swingman Jersey1", count: 2}]);

  function changeQuantity(quantity, itemName) {
    if (quantity >= 0) {
      const newCart = cloneDeep(cart);
      let item = newCart.find(obj => obj.name === itemName);
      if (item === undefined) {
        item = {name: itemName};
        newCart.push(item);
      } 
      item.count = quantity;
      setCart(newCart);
    }
  }


  useEffect(() => console.log(cart));
  return (
    <>
      <NavBar count={cart.length} price={'$2.00'} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shopping cart={cart} changeQuantity={changeQuantity} />} />

        <Route path='*' element={<NoMatch />} />
      </Routes>
    
    </>
  );
}
