import React, {useState} from 'react';
import styles from './PersonalAccount.module.sass'
import Promo1 from "../../assets/Promo1.svg";
import {ClientBox} from "./ClientBox/ClientBox";
import {HistoryArr} from "./History/HistoryArr";
import {PromoCodeArr} from "./Promo/PromoCodeArr";

const historyArr = [
    {address : 'Казань, Кремлёвская, 88',
        material1 : 'Пластик: 1 кг',
        material2:'Стекло: 2 кг',
        material3:'Бумага: 25 кг',
        data:'25.09.2021',
        points:1000},
    {address:'Казань, Кремлёвская, 88',
        material1:'Пластик: 1 кг',
        material2:'Стекло: 2 кг',
        material3:'Бумага: 25 кг',
        data:'25.09.2021',
        points:1000}
]
const promoCodeArr = [
    {img:Promo1,
        data:'25.09.2021',
        link:'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...'}
]



export const PersonalAccount = () => {
    const [visibleHistory, setVisibleHistory] = useState(true)
    const [visiblePromo, setVisiblePromo] = useState(false)

    function setStateHistory() {
        setVisiblePromo(false)
        setVisibleHistory(true)
    }

    function setStatePromo() {
        setVisibleHistory(false)
        setVisiblePromo(true)
    }

    return (
        <main className={styles.main}>
            <div className={styles.wrapperMain}>
                <span className={styles.personalAccount}>Личный кабинет</span>
                <div className={styles.mainWrapper}>
                    <ClientBox/>
                    <div className={styles.navWrapper}>
                        <nav className={styles.navLink}>
                            <a onClick={setStatePromo}>Промокоды</a>
                            <a onClick={setStateHistory}>История</a>
                        </nav>
                        <HistoryArr state={visibleHistory} historyArray={historyArr}/>
                        <PromoCodeArr state={visiblePromo} promoCodeArray={promoCodeArr}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

