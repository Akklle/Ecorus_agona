import React from "react";
import styles from "./index.module.sass";
import banner2 from "../../../assets/ImgBanner/banner2.png";

export const Slide_2 = () => {
    return (
        <div className={styles.slide2}>
            <div className={styles.left}>
                <h1 className={styles.title}>
                    А вы знали...
                </h1>
                <h6 className={styles.text}>
                    что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых
                    пакетов — от 100 до 200 лет?
                </h6>
                <div className={styles.btn}>
                    Узнать больше
                </div>

            </div>
            <div className={styles.right2}>
                <img className={styles.banner2} src={banner2} alt="banner2"/>
            </div>

        </div>
    )
}