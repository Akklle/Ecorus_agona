import React from 'react';
import styles from './ClientBox.module.sass'
import avatar from '../../../assets/avatar.svg'

export const ClientBox = () => {
    return (
        <div className={styles.cardClient}>
            <img src={avatar} alt=""/>
            <div className={styles.infoClient}>
                <span className={styles.nameClient}>Алексей Петрович</span>
                <div className={styles.contactsClient}>
                    <span className={styles.numberClient}>+7 (917) 888 88 88</span>
                    <span className={styles.mailClient}>ivanov@gmail.com</span>
                </div>
            </div>
            <button className={styles.buttonClient}>Редактировать</button>
        </div>
    );
};
