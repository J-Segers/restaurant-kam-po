import React, { useState } from 'react';
import "./BurgerMenu.css";
import BurgerMenuItem from './burgerMenuItem/BurgerMenuItem';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div id="burger-menu">
            <div className="burger-bar" >&nbsp;</div>
            <div id="drop-down" className={isOpen ? "open" : "closed"} onClick={() => setIsOpen(!isOpen)}>
                <BurgerMenuItem title="🏠" url="/" />
                <BurgerMenuItem title={"🍜"} url={"/menu"} />
                <BurgerMenuItem title={"📞"} url={'/contact'} />
            </div>
        </div>
     );
}

export default BurgerMenu;