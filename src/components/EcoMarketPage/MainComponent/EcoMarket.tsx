import React from 'react';
import styles from './EcoMarket.module.sass';
import {CheckBoxArray} from './CheckBoxes/CheckBoxArray'
import {ProductArray} from './ProductComponent/ProductArray'

import nikeAirMax2021 from '../../../assets/ImgProducts/NikeAirMax2021.png'
import nikeAirMax90Premium from '../../../assets/ImgProducts/NikeAirMax90Premium.png'
import adidasAlphabounceRC from '../../../assets/ImgProducts/AdidasAlphabounceRC.png'
import hoodyNikeAirMax2021 from '../../../assets/ImgProducts/HoodyNikeAirMax2021.png'
import nikeAirForce1Low from '../../../assets/ImgProducts/NikeAirForce1Low.png'


const genderArray = [{name: "Мужской"}, {name: "Женский"}]
const typeArray = [{name: "Выбрать все"}, {name: "Одежда"}, {name: "Обувь"}, {name: "Аксессуары"}]
const brandArray = [{name: "Выбрать все"}, {name: "H&M"}, {name: "P&B"}, {name: "Adidas"}, {name: "Nike"}, {name: "Reebok"}]

const productArray = [
    {img: nikeAirMax2021, brand: 'NIKE', name: 'Nike Air Max 2021', type: 'Мужская обувь', price: 1000},
    {img: nikeAirMax90Premium, brand: 'NIKE', name: 'Nike Air Max 90 Premium', type: 'Мужская обувь', price: 750},
    {img: adidasAlphabounceRC, brand: 'Adidas', name: 'Adidas Alphabounce RC', type: 'Мужская обувь', price: 1200},
    {img: hoodyNikeAirMax2021, brand: 'H&M', name: 'Nike Air Max 2021', type: 'Мужская обувь', price: 1000},
    {img: nikeAirForce1Low, brand: 'NIKE', name: 'Nike Air Force 1 Low', type: 'Мужская обувь', price: 2100}
]


export const EcoMarket = () => {
    return (
        <section className={styles.mainSection}>

            <div className={styles.head}>
                <span className={styles.heading}>ЭкоМаркет</span>

                <div className={styles.sortingButtons}>
                    <button className={styles.sortingButton}>По популярности</button>
                    <button className={styles.sortingButton}>По цене</button>
                    <button className={styles.sortingButton}>По новизне</button>
                </div>
            </div>

            <div className={styles.bodyPart}>
                <div className={styles.filterPart}>
                    <div className={styles.filterBlock}>
                        <div className={styles.filterType}>
                            <span>Пол</span>
                            <CheckBoxArray checkBoxArray={genderArray}/>
                        </div>

                        <div className={styles.filterType}>
                            <span>Тип товара</span>
                            <CheckBoxArray checkBoxArray={typeArray}/>
                        </div>

                        <div className={styles.filterType}>
                            <span>Брэнд</span>
                            <CheckBoxArray checkBoxArray={brandArray}/>
                        </div>
                    </div>

                    <button className={styles.bigButton}>Сбросить фильтры</button>

                </div>

                <ProductArray productArray={productArray}/>

            </div>
        </section>
    );
};