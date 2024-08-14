import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';


function App() {
  var data = require("./data/menukaart_kam_po.json");

  return (
    <div className="App">
      <Home />
      <Menu data={data} />
    </div>
  );
}

export default App;
