import React from 'react';
import style from './PromoCode.module.sass'


export interface PromoCodeProps {
    img: string;
    data: string;
    link: string;
}


export const PromoCode = ({img, data, link}: PromoCodeProps) => {
    return (
        <div>
            <div className={style.wrapperMain}>
                <img src={img} alt=''/>
                <div className={style.wrapper}>
                    <div className={style.info}>
                        <div className={style.data}>
                            <span className={style.dataTitle}>Дата создания:</span>
                            <span className={style.dataProp}>{data}</span>
                        </div>
                        <div className={style.link}>
                            <span className={style.linkTitle}>Ссылка на товар:</span>
                            <span>{link}</span>
                        </div>
                    </div>
                    <button className={style.buttonQR}>Показать qr-код</button>
                </div>
            </div>
            <hr className={style.line}/>
        </div>
    );
};
