import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import { Route, Routes } from 'react-router-dom';
import CustomHeader from "./componenten/header/CustomHeader";
import Footer from './componenten/Footer/Footer';
import kampoDB from './configuration';
import { getDatabase, ref, onValue } from "firebase/database";


function App() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
  
    const database = getDatabase(kampoDB);
    const collectionRef = ref(database, "kampoDB");
  
    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if(dataItem) {
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
      });
    }
  
    fetchData();
    
  },[])
  console.log(data);
  
  return (
    <div className="App">
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
