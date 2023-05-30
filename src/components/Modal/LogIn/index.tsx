import React, {useRef} from 'react'
import styles from './Login.module.sass'
import cross from '../../../assets/cross.svg'
import {Portal} from '../../Portal'
import {useModalClose} from "../../../hooks/useModalClose";
import * as yup from 'yup'
import {Formik, Form, Field} from "formik";


export const LogIn = (props: { visible: boolean, onModalClose: () => void }) => {
    const ref = useRef<HTMLDivElement>(null)
    useModalClose(ref, () => props.onModalClose())

    const validation = yup.object({
        phone: yup.string().required(),
        password: yup.string().required(),
    })

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
                        <Formik initialValues={{phone: '', password: ''}}
                                validationSchema={validation} onSubmit={(values)=>{console.log(values)}}>
                            {({errors}) => (
                                <Form className={styles.inputs}>
                                    <label htmlFor="phone"></label>
                                    <Field className={styles.input} id="phone" name="phone" placeholder="Телефон"/>

                                    <label htmlFor="password"></label>
                                    <Field className={styles.input} type={'password'}
                                           id="password" name="password" placeholder="Пароль"/>

                                    <button type={"submit"} className={styles.firstButton }>Войти</button>
                                </Form>
                            )}
                        </Formik>

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