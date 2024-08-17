import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import { Route, Routes } from 'react-router-dom';


function App() {
  var data = require("./data/menukaart_kam_po.json");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu data={data} />} />
        <Route path="/contact" element={{}} />
      </Routes>
    </div>
  );
}

export default App;
