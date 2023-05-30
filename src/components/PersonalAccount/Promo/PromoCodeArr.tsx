import React from 'react';
import {PromoCode, PromoCodeProps} from "./PromoCode";
import styles from './PromoCode.module.sass'

interface PromoCodeArrayInterface {
    promoCodeArray: Array<PromoCodeProps>
    state: boolean
}


export const PromoCodeArr = ({promoCodeArray, state}: PromoCodeArrayInterface) => {
    return (
        <div className={styles.promoCodeArr}>
            {state ? <span>
            {promoCodeArray.map((promo: PromoCodeProps) => {
                return <PromoCode
                    img={promo.img}
                    data={promo.data}
                    link={promo.link}
                    key={promo.link}
                />
            })}
                </span> : null}
        </div>
    )
}



