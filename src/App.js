import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NoMatch from './components/NoMatch';
import "./App.css";



function App() {
  const [items, setItems] = useState([]);
  return (
    <>
      <NavBar count={items.length} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    
    </>
  );
}

export default App;
