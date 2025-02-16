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
  
  const [dataDB, setDataDB] = useState([]);

  useEffect(() => {
  
    const database = getDatabase(kampoDB);
    const collectionRef = ref(database, "kampoDB");
  
    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if(dataItem) {
          const displayItem = Object.values(dataItem);
          setDataDB(displayItem[0]);
        }
      });
    }
  
    fetchData();
    
  },[])
  console.log(dataDB);
  
  return (
    <div className="App">
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home info={dataDB.info} menus={dataDB.setMenus} />} />
        <Route path="/menu" element={<Menu data={dataDB.fullMenu} />} />
      </Routes>
      <Footer info={dataDB.info} />
    </div>
  );
}

export default App;
