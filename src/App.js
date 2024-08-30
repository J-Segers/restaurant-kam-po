import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import { Route, Routes } from 'react-router-dom';
import CustomHeader from "./componenten/header/CustomHeader";
import Footer from './componenten/Footer/Footer';


function App() {
  var data = require("./data/menukaart_kam_po.json");

  return (
    <div className="App">
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu data={data} />} />
        <Route path="/contact" element={{}} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
