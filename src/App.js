import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shopping from "./components/Shopping";
import NoMatch from './components/NoMatch';
import "./App.css";



function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <NavBar count={cart.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shopping cart={cart} />} />

        <Route path='*' element={<NoMatch />} />
      </Routes>
    
    </>
  );
}

export default App;
