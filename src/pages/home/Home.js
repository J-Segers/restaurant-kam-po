import React, { useContext, useEffect } from 'react';
import hero from '../../assets/20240825_172650.png';
import "./Home.css";
import { NavLink } from 'react-router-dom';
import WeekMenu from '../../componenten/weekMenu/WeekMenu';


function Home() {

    let weekMenu = ["babi pangang", "foe yong hai", "Tjap Tjoy"];
    let menuA = ["Babi Pangang", "Tjap Tjoy", "Kipfilet met Ananas", "Gebakken banaan", "Babi Ketjap", "Saté", "Kroepoek"];
    let menuB = ["Babi Pangang", "Foe Yong Hai", "Kantonese Koe Loe Yuk", "Mini loempia's", "Babi Ketjap", "Saté", "Kroepoek" ];
    let menuC = ["Babi Pangang", "Foe Yong Hai of Tjap Tjoy", "Saté", "kroepoek"];
    
    
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return ( 
        <div id="home">
            <div id="hero-container">
                <img id={"hero-img"} src={hero} alt="" />
            </div>
            <h1>Kam Po</h1>
            <h3>Chinees - Indisch afhaal Restaurant</h3>
                <WeekMenu id="weekMenu" menuNaam="van de Week" menu={weekMenu} aantal="2" prijs="17,60" />    
                <div id="week-menus-container">
                    <WeekMenu menuNaam="A" menu={menuA} aantal="2" prijs="18,00"/>
                    <WeekMenu menuNaam="B" menu={menuB} aantal="2" prijs="18,00"/>
                    <WeekMenu menuNaam="C" menu={menuC} aantal="1" prijs="9,30"/>
                </div>
            <p>
                liever trek in iets anders?<br />
                bekijk hier ons volledige menu.
            </p>
            <NavLink className="menu-btn" to={"/menu"}><p>menu</p></NavLink>
        </div>
    );
}

export default Home;