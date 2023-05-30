import React from 'react';
import styles from './Main.module.sass';
import arrow from "../../assets/cardArrow.svg";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import {NavLink} from "react-router-dom";
import {SwiperSlides} from "./Slide/SwiperSlides";


export const Main = () => {
    return (
        <section className={styles.mainPage}>
            <SwiperSlides/>
            <div className={styles.cards}>
                <div className={styles.smallCard}>
                    <div className={styles.smallCardInfo}>
                        <div className={styles.smallCardInfoBigText}>Пункты сбора</div>
                        <div className={styles.smallCardInfoSmallText}>
                            Посмотри, где в твоем городе можно сдать вторсырье на переработк
                        </div>
                        <NavLink to="/collection-points" className={styles.smallCardInfoArrowButton}>
                            <img className={styles.smallCardInfoArrowImage} src={arrow}/>
                        </NavLink>
                    </div>
                    <div className={styles.smallCardPicture}>
                        <img src={card1}/>
                    </div>
                </div>
                <div className={styles.smallCard}>
                    <div className={styles.smallCardInfo}>
                        <div className={styles.smallCardInfoBigText}>ЭкоМаркет</div>
                        <div className={styles.smallCardInfoSmallText}>
                            Используй заработанные экокоины для покупки товаров из переработанных материалов                         </div>
                        <NavLink to="/ecomarket" className={styles.smallCardInfoArrowButton}>
                            <img className={styles.smallCardInfoArrowImage} src={arrow}/>
                        </NavLink>
                    </div>
                    <div className={styles.smallCardPicture}>
                        <img src={card2}/>
                    </div>
                </div>
            </div>
        </section>
    );
}