import React from 'react';
import "./WeekMenu.css";

function WeekMenu() {
    let weekMenu = ["babi pangang", "foe yong hai", "saté", "mini loempia's"];
    return ( 
        <div id="week-menu">
            <h2>Week Menu</h2>
            {weekMenu.map((item) => {
                return (
                    <>
                        <h3>{item}</h3>
                    </>
                )
            })}
        </div>
     );
}

export default WeekMenu;