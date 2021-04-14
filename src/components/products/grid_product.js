import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style/product.scss'
import { convertPrice } from '../../helpers/calculatePrice'
import { calculatePriceUseSale } from '../../helpers/calculatePrice'
import showRating from '../../helpers/showRating'

function GridProduct(props) {
    let result = []
    if (props) {
        result = props.product.map((item, index) => {
            return (
                <Grid item xs={12} sm={3} md={4} lg={3} className="remove__padding__grid" key={index}>
                    <div className="product__item">
                        <div className="product__detail">
                            <img src={item.image} alt="" className="product__image" /> {item.sale > 15 ? <span> <img src="https://cdn2.iconfinder.com/data/icons/shopping-online-e-commerce-store/512/hot_sale_discount-512.png" alt="" className="product__image__sale" /></span> : ""}
                            {item.title.toLowerCase().includes("iphone") ? <span> <img src="https://lh3.googleusercontent.com/proxy/Y7NDkJJQAg5GnxpjrP2NL976re3eq6fCtikVJGM0ry2w4S7Unay-KMeSk5UGVEkDBAlaQJAMHrqB_Ik1DwHdp7Um3r1yurBQEsAtvXY" alt="" className="product__image__sale" /></span> : ""}
                            <div>
                                <p className="product__title">{item.title}  </p>

                                <div className="product__price__container">
                                    <span className="product__price__sale">{calculatePriceUseSale(item.price, item.sale)}₫<span className="product__price">{convertPrice(item.price)}₫</span> <span className="product__sale">- {item.sale}%</span></span>

                                </div>

                                <div className="product__feedback__container">
                                    <span className="product__star">{showRating(item.rate)} <span className="product__feedback">{item.feedback} Đánh giá</span></span>

                                </div>
                            </div>
                        </div>

                    </div>
                </Grid >
            )



        })
    }
    return (

        <div>
            <Grid container spacing={1} xs={12} sm={6} md={12} lg={12} direction="row" >
                {result}
            </Grid>

        </div>

    );
}

export default GridProduct;