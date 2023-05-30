import React from 'react';
import styles from './History.module.sass'
import circle from '../../../assets/circle.svg'

export interface HistoryProps {
    address: string;
    material1: string;
    material2: string;
    material3: string;
    data: string;
    points: number
}


export const History = (props: HistoryProps) => {
    return (
        <div className={styles.componentHistory}>
            <div className={styles.centerComponent}>
                <div className={styles.infoHistory}>
                    <div className={styles.item}>
                        <span className={styles.nameItem}>Адрес</span>
                        <span className={styles.itemProps}>{props.address}</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.nameItem}>Материал</span>
                        <div className={styles.materialItems}>
                            <span className={styles.itemProps}>{props.material1}</span>
                            <img src={circle}/>
                            <span className={styles.itemProps}>{props.material2}</span>
                            <img src={circle}/>
                            <span className={styles.itemProps}>{props.material3}</span>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.nameItem}>Дата</span>
                        <span className={styles.itemProps}>{props.data}</span>
                    </div>
                </div>
                <span className={styles.points}>{props.points}</span>
            </div>
        </div>
    );
};