import React from 'react';
import styles from './CheckBox.module.sass';
import checkmark from "../../../../assets/checkmark.svg";

export interface checkBoxProps {
    name: string
}

export const CheckBox = ({name}: checkBoxProps) => {
    return (
        <label className={styles.label}>
            <input type="checkbox" className={styles.checkBox}/>

            <div className={styles.checkMark}>
                <img className={styles.checkmarkImg} src={checkmark} alt="checkmark"/>
            </div>

            <span>{name}</span>
        </label>
    )
}