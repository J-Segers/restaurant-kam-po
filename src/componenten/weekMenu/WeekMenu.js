import React from 'react';
import "./WeekMenu.css";

function WeekMenu({menuNaam,menu,aantal,prijs}) {
    return ( 
        <div class="week-menu">
            <h2>Menu {menuNaam}</h2>
            <span className='red'>
                <h3>{aantal} {aantal > 1 ? 'personen' : "persoon"}</h3>
                <h3 className='prijs'>€{prijs}</h3>
            </span>
            {menu.map((item) => {
                return (
                    <>
                        <h3 className='week-menu-item'>{item}</h3>
                    </>
                )
            })}
        </div>
     );
}

export default WeekMenu;