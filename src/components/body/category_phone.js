import React from 'react';
import './style/category_phone.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategoryPhone() {

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (

        <Slider {...settings}>

            <div className="category__phone__item">
                <img src="https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340490193124614_iPhone-Apple@2x.jpg" alt="" />
            </div>
            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" alt="" />
            </div>

            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg" alt="" />
            </div>
            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg" alt="" />
            </div>
            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/Xiaomi42-b_45.jpg" alt="" />
            </div>
            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png" alt="" />
            </div>
            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/Vsmart42-b_40.png" alt="" />
            </div>
            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg" alt="" />
            </div>
            <div className="category__phone__item">
                <img src="https://cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg" alt="" />
            </div>

        </Slider>



    );
}

export default CategoryPhone;