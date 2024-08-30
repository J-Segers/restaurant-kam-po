import React, { useEffect } from 'react';
import hero from '../../assets/restaurant_kampo_rijksweg.png';
import "./Home.css";
import { NavLink } from 'react-router-dom';
import WeekMenu from '../../componenten/weekMenu/WeekMenu';


function Home() {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return ( 
        <div id="home">
            <img id={"hero-img"} src={hero} alt="" />
            <h1>Kam Po</h1>
            <h3>Chinees - Indisch Restaurant</h3>

            <p id='info'>
                Toen wij tijdens de lock down de deuren hebben moeten sluiten van het restaurant hebben wij besloten om voortaan enkel nog te fungeren als afhaalpunt.
            </p>

            <WeekMenu />
            <p>
                liever trek in iets anders?<br />
                bekijk hier ons volledige menu.
            </p>
            <NavLink className="menu-btn" to={"/menu"}><p>menu</p></NavLink>
        </div>
    );
}

export default Home;