import React from "react";
import styles from "./index.module.sass";
import banner3 from "../../../assets/ImgBanner/banner3.png";

export const Slide_3 = () => {
    return (
        <div className={styles.slide3}>
            <div className={styles.left}>
                <h1 className={styles.title}>
                    Что с масками?
                </h1>
                <h6 className={styles.text}>
                    Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку.
                </h6>
                <div className={styles.btn}>
                    Условия сервиса
                </div>
            </div>
            <div>
                <img className={styles.banner3} src={banner3} alt="banner3"/>
            </div>

        </div>
    )
}
