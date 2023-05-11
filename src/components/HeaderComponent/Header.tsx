import React from 'react';
import styles from './Header.module.sass';
import Ecorus from "../../assets/Ecorus.svg";
import location from "../../assets/location.svg";
import currency from "../../assets/currency.svg";
import avatar from "../../assets/avatar.svg";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Ecorus} alt="Ecorus logo"/>

            <nav className={styles.navBar}>
                <NavLink to="/main" className={styles.navBarItem}>
                    Главная
                </NavLink>
                <NavLink to="/collection-points" className={styles.navBarItem}>
                    Пункты сбора
                </NavLink>
                <NavLink to="/ecomarket" className={styles.navBarItem}>
                    ЭкоМаркет
                </NavLink>
                <NavLink to="/about-service" className={styles.navBarItem}>
                    О сервисе
                </NavLink>
            </nav>

            <nav className={styles.accountNavBar}>
                <div className={styles.locationGroup}>
                    <a className={styles.item} href="">
                        <img src={location} alt="location"/>
                        <p>Казань</p>
                    </a>
                </div>

                <div>
                    <a className={styles.item} href="">
                        <img src={currency} alt="currency"/>
                        <p className={styles.balance}>1000</p>
                    </a>
                </div>

                <div>
                    <a className={styles.item} href="">
                        <img src={avatar} alt="profile avatar"/>
                        <p>Алексей</p>
                    </a>
                </div>
            </nav>
        </header>
    );
};