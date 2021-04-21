import React from 'react';
import Header from '../components/header/header'
import DetailProductComp from '../components/products/detail_product';
import Footer from '../components/footer/footer'

function DetailProduct() {

    return (
        <div>
            <Header />
            <div style={{ backgroundColor: "#FFFFFF" }}>
                <DetailProductComp />
                <div style={{ width: "100%", marginTop: 40, height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                <Footer />
            </div>
        </div>

    );
}

export default DetailProduct;