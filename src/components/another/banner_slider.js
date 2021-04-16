import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../../../node_modules/swiper/components/effect-cube/effect-cube.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import banner_1 from '../../image/banner1.png'
import banner_2 from '../../image/banner2.png'
import banner_3 from '../../image/banner4.png'
import banner_4 from '../../image/banner4.jpg'
import './style/banner_slider.scss'

// install Swiper modules
SwiperCore.use([Navigation, EffectCube, Pagination, Scrollbar, A11y, Autoplay]);

function Banner() {
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={1}
            navigation
            effect="cube"
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide> <LazyLoadImage effect="blur" style={{ width: "100%", height: 220, }} src={banner_1} /></SwiperSlide>
            <SwiperSlide><LazyLoadImage effect="blur" style={{ width: "100%", height: 220, }} src={banner_2} /></SwiperSlide>
            <SwiperSlide><LazyLoadImage effect="blur" style={{ width: "100%", height: 220, }} src={banner_3} /></SwiperSlide>
            <SwiperSlide><LazyLoadImage effect="blur" style={{ width: "100%", height: 220, }} src={banner_4} /></SwiperSlide>
        </Swiper>
    );
};

export default Banner