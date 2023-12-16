import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.scss';


const Header = () => {
    return (
        <header className={styles.header__container}>
            <Link className={styles.logo__container} to="/"></Link>
            <h2 className={styles.header__title}>The Rick and Morty API</h2>
        </header>
    )
};

export default Header;
