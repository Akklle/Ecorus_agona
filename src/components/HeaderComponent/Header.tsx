import React from 'react';
import styles from './Header.module.sass';
import Ecorus from "../../assets/Ecorus.svg";
import location from "../../assets/location.svg";
import currency from "../../assets/currency.svg";
import avatar from "../../assets/avatar.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Ecorus} alt="Ecorus logo"/>

            <nav className={styles.navBar}>
                <a className={styles.navBarItem} href="">Главная</a>
                <a className={styles.navBarItem} href="">Пункты сбора</a>
                <a className={styles.navBarItem} href="">ЭкоМаркет</a>
                <a className={styles.navBarItem} href="">О свервисе</a>
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