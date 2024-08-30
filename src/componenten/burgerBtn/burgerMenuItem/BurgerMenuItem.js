import React from 'react';
import "./BurgerMenuItem.css";
import { Link } from 'react-router-dom';

function BurgerMenuItem({title, url}) {
    return ( 
        <div className="link-container">
            <Link to={url}>{title}</Link>
        </div>
     );
}

export default BurgerMenuItem;