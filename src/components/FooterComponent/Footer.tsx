import React from 'react';
import styles from './Footer.module.sass';
import mail from "../../assets/mail.svg";
import call from "../../assets/call.svg";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.InfoBlock}>
                <img src={mail} alt="mail"/>
                <p>info@ecorus.ru</p>
            </div>

            <div className={styles.InfoBlock}>
                <img src={call} alt="call"/>
                <p>+7 (800) 880-88-88</p>
            </div>
        </footer>
    );
};