import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import "./style.sass"
import "swiper/css";
import "swiper/css/navigation";
import {Slide_1} from "./Slide_1";
import {Slide_2} from "./Slide_2";
import {Slide_3} from "./Slide_3";

export const SwiperSlides = () => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
        >

            <SwiperSlide><Slide_1/></SwiperSlide>
            <SwiperSlide><Slide_2/></SwiperSlide>
            <SwiperSlide><Slide_3/></SwiperSlide>
        </Swiper>
    )
}