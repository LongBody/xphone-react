import React from 'react';
import { Container } from '@material-ui/core';
import CategoryPhone from './category_phone'
import Slider from '../products/products'

function FlashSale() {

    return (
        <div>
            <Container>
                <CategoryPhone />
                <Slider />
            </Container>

        </div>

    );
}

export default FlashSale;