import React from 'react'
import {checkBoxProps, CheckBox} from "./CheckBox";
import styles from './CheckBox.module.sass';


interface CheckBoxArray {
    checkBoxArray: Array<checkBoxProps>
}

export const CheckBoxArray = ({checkBoxArray}: CheckBoxArray) => {
    return (

        <div className={styles.CheckBoxArr}>
            {checkBoxArray.map((checkbox: checkBoxProps) => {
                return <CheckBox name={checkbox.name} key={checkbox.name}/>
            })}
        </div>
    )
}
