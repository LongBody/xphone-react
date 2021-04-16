import React from 'react';
import { Container } from '@material-ui/core';
import CategoryPhone from './category_phone'
import Product from '../products/products'
import BannerSlide from '../another/banner_slider'
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TitleSection from './title_section';
import './style/body.scss'

function FlashSale() {

    return (
        <div className="body__container">
            <Container >
                <Grid container spacing={1} xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={6} sm={6} md={8} lg={7} style={{ height: 220, width: "100%" }}>
                        <BannerSlide />
                    </Grid>

                    <Grid item xs={6} sm={6} md={4} lg={5}>
                        <LazyLoadImage effect="blur" src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/iPhone_12_640x278.png" style={{ height: 220, width: "100%", borderRadius: "5px", boxShadow: "0 11px 6px -6px black" }} />
                    </Grid>
                </Grid>

            </Container>
            <Container className="padding__fixed">
                <CategoryPhone />
                <TitleSection name="Suggests for you" />
                <Product />
            </Container>

        </div>

    );
}

export default FlashSale;