import React from "react";
import styles from "./index.module.sass";
import banner1 from "../../../assets/ImgBanner/banner1.png"

export const Slide_1 = () => {
    return (
        <div className={styles.slide1}>
            <div className={styles.left}>
                <h1 className={styles.title}>
                    Сделаем мир чище
                </h1>
                <h6 className={styles.text}>
                    Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов
                </h6>
                <div className={styles.btn}>
                    Условия сервиса
                </div>

            </div>
            <div className={styles.right}>
                <img className={styles.banner1} src={banner1} alt="banner1"/>
            </div>

        </div>
    )
}
