import React from 'react';
import "./WeekMenu.css";

function WeekMenu({menuNaam,menu}) {
    return ( 
        <div class="week-menu">
            <h2>Menu {menuNaam}</h2>
            {menu.map((item) => {
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