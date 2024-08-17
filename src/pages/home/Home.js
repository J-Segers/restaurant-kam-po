import React from 'react';
import hero from '../../assets/restaurant_kampo_rijksweg.png';
import "./Home.css";
import { NavLink } from 'react-router-dom';


function Home() {
    return ( 
        <div id="home">
            <img id={"hero-img"} src={hero} alt="" />
            <h1>Kam Po</h1>
            <h3>Chinees - Indisch Restaurant</h3>

            <p>
                toen wij tijdens de lock down de deuren hebben moeten sluiten van het restaurant hebben wij besloten om voortaan enkel nog te fungeren als afhaalpunt.
            </p>

            <NavLink to={"/menu"}>afhaal menu bekijken</NavLink>
        </div>
    );
}

export default Home;