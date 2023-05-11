import React, {useRef} from 'react'
import styles from './Login.module.sass'
import cross from '../../../assets/cross.svg'
import {Portal} from '../../Portal'
import {useModalClose} from "../../../hooks/useModalClose";

export const LogIn = (props: { visible: boolean, onModalClose: () => void }) => {
    const ref = useRef<HTMLDivElement>(null)
    useModalClose(ref, () => props.onModalClose())

    return (<>
        {props.visible &&
            <Portal>
                <div className={styles.modalScreen} ref={ref}>
                    <div className={styles.box}>
                        <div className={styles.boxHead}>
                            <h1>Вход</h1>
                            <div onClick={() => props.onModalClose()} className={styles.close}>
                                <img src={cross} alt="cross"/>
                            </div>
                        </div>

                        <div className={styles.inputs}>
                            <input type='text' placeholder='Телефон' className={styles.input}/>
                            <input type='password' placeholder='Пароль' className={styles.input}/>
                        </div>

                        <button className={styles.firstButton}>Войти</button>

                        <div className={styles.links}>
                            <div className={styles.link}>Войти с помощью смс</div>
                            <div className={styles.link}>Регистрация</div>
                        </div>

                        <button className={styles.secButton}>Вход для партнеров</button>

                    </div>
                </div>
            </Portal>
        }
    </>)
}