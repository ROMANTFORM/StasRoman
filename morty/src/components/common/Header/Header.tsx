import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="header__container">
            <Link className="logo__container" to="/"></Link>
            <h2 className="header__title">The Rick and Morty API</h2>
        </header>
    )
};

export default Header;
