import React from 'react';
import "./CustomHeader.css";
import logo from "../../assets/LogoImg.png";
import BurgerMenu from '../burgerBtn/BurgerMenu';

function CustomHeader() {
    return ( 
        <header>
            <img src={logo} alt="" />
            <h1>Kam Po</h1>
            <BurgerMenu />
        </header>
     );
}

export default CustomHeader;