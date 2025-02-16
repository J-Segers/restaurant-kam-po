import React, { useEffect } from 'react';
import "./Menu.css";

function Menu({data}) {

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    let menuCatArr = new Array();
    let euCurrency = new Intl.NumberFormat('en-NL', {
        style: 'currency',
        currency: 'EUR'
    })
    
    Object.keys(data).forEach(key => {
        menuCatArr.push(data[key])
    });
    
    return ( 
        <div id="menu">
            <h2>Afhaal menu</h2>
            <hr />
            {   
                menuCatArr.map((cat) => {                    
                    var menuItems = new Array();
                    Object.entries(cat).forEach((items) => {
                        
                        Object.values(items[1]).forEach((item) => {
                            menuItems.push(item)
                        })                       
                    })
                    return(
                        <div className="menu-categorie">
                            <h3 className="title">{Object.keys(cat)[0]}</h3>
                            {
                                menuItems.map((item) => {
                                    return(
                                        <div className="menu-item">
                                            <div className="menu-nummer">{item.menuNummer}</div>
                                            <div className="menu-gerecht">{item.gerechtNaam}</div>
                                            <div className="menu-prijs">{euCurrency.format(item.prijs)}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
     );
}

export default Menu;