import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ProductVersion from '../products/product_version'
import { connect } from 'react-redux'
import './style/detail_product.scss'
function Product(props) {

    let products = [
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg",
            "color": "Xanh Dương",
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-vang-new-600x600-200x200.jpg",
            "color": "Vàng đồng",
        }, {
            "image": "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-trang-bac-600x600-200x200.jpg",
            "color": "Bạc",
        }, {
            "image": "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xam-new-600x600-200x200.jpg",
            "color": "Xám",
        }
    ]

    const [image, setImage] = useState("https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg")


    let productColor = products.map((item, index) => {
        return (

            <div key={index}>
                <img className="product__color__image" onClick={() => handleChangeImage(item.image)} src={item.image} alt="" />
                <div className="product__color__name">{item.color}</div>
            </div>

        )
    })
    return (
        <div className="detail__product__container">
            <Container >
                <div>Điện thoại IPhone</div>
                <h1>Điện thoại iPhone 12 Pro Max 128GB</h1>
                <hr style={{ backgroundColor: "rgb(223, 223, 223)", marginBottom: 10 }} />
                <Grid container xs={12} sm={6} md={12} lg={12} direction="row" >
                    <Grid item xs={12} sm={4} md={4} lg={4}  >
                        <div>
                            <img className="image__product" src={image} alt="" />
                        </div>
                        <div className="product__color__container">
                            {productColor}
                        </div>
                    </Grid >
                    <Grid item xs={12} sm={4} md={4} lg={4}  >
                        <div style={{ paddingBottom: 10 }}>Bạn đang xem phiên bản: <b>{props.productVersion}GB</b></div>
                        <ProductVersion />
                        <div className="product__promotion__container">
                            <div className="product__promotion__item">
                                <div className="product__promotion__item__icon">
                                    <i className="fas fa-gift"> Khuyến Mãi</i>
                                </div>

                                <div className="product__promotion__item__title">
                                    Phiếu mua hàng trị giá 500k cho các sản phẩm bên XPhone
                                </div>
                                <div className="product__promotion__item__title">
                                    Tặng gói dịch vụ XPhone care
                                </div>
                            </div>
                        </div>
                        <div className="btn__payment__container">
                            <button className="btn__payment">
                                Mua ngay
                                <p style={{ padding: 0, margin: 0 }}>Giao hàng tận nơi</p>
                            </button>
                        </div>
                    </Grid >
                    <Grid item xs={12} sm={4} md={4} lg={4} >
                        <div className="product__detail__warranty">
                            <div className="product__detail__warranty__item">
                                <i className="fas fa-box-open icon__full__box"></i> Hộp đầy đủ
                                </div>

                            <div className="product__detail__warranty__item">
                                <i className="fas fa-award icon__award"></i>Bảo hành trong 12 tháng
                                </div>

                            <div className="product__detail__warranty__item">
                                <i className="fas fa-undo-alt icon__change"></i> Đổi máy mới trong 3 tháng đầu
                                </div>
                        </div>

                        <div className="product__detail__parameter">
                            <div className="product__detail__parameter__title">Thông số:</div>
                            <Grid container xs={12} sm={6} md={12} lg={12} direction="row" >
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Màn hình
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    OLED, 6.7", Super Retina XDR
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Hệ điều hành:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    iOS 14
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Camera sau:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    3 camera 12 MP
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Camera trước:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    12 MP
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Chip:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    Apple A14 Bionic
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    RAM:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    6 GB
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Bộ nhớ trong:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    128 GB
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    SIM:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    1 Nano SIM & 1 eSIM, Hỗ trợ 5G
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Pin:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    3687 mAh, Sạc nhanh
                                </Grid >
                            </Grid>
                        </div>
                    </Grid >
                </Grid>
            </Container>
        </div>

    );
    function handleChangeImage(imageSrc) {
        setImage(imageSrc)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        productVersion: state.productVersion,
    }
}

export default connect(mapStateToProps, null)(Product);