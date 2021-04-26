import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ProductVersion from '../products/product_version'
import { connect } from 'react-redux'
import './style/detail_product.scss'
import { callApi } from '../../apis/api'
import * as actions from '../../actions/productActions'
function Product(props) {


    const [product, setProduct] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const callApiData = await callApi("product/" + props.idProduct).then(async (response) => {
                let data = await response.data;
                document.title = data.title + " " + data.version[0].cap + " | XPhone Việt Nam"

                return data
            })

            await setImage(callApiData.color[0].imageURL);
            await setProduct(callApiData)
            await props.changeProductVersion(callApiData.version[0].cap)


        }
        fetchData()
    }, []);
    const [image, setImage] = useState("")
    let productColor = []
    var size = Object.keys(product).length;
    if (size > 0) {
        productColor = product.color.map((item, index) => {
            return (

                <div key={index}>
                    <img className="product__color__image" onClick={() => handleChangeImage(item.imageURL)} src={item.imageURL} alt="" />
                    <div className="product__color__name">{item.color}</div>
                </div>

            )
        })
    }

    return (
        <div className="detail__product__container">
            <Container >
                <div>Điện thoại {size > 0 ? product.brand : ""}</div>
                <h1>{size > 0 ? product.title + " " + product.version[0].cap : ""}</h1>
                <hr style={{ backgroundColor: "rgb(223, 223, 223)", marginBottom: 10 }} />
                <Grid container xs={12} sm={6} md={12} lg={12} direction="row" >
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                        <div>
                            {
                                image !== "" ?
                                    <img className="image__product" src={image} alt="" />
                                    : "Loading..."
                            }
                        </div>
                        <div className="product__color__container">
                            {size > 0 > 0 ? productColor : "Loading..."}
                        </div>
                    </Grid >
                    <Grid item xs={12} sm={4} md={4} lg={4}  >
                        <div style={{ paddingBottom: 10 }}>Bạn đang xem phiên bản: <b>{props.productVersion !== "" ? props.productVersion : ""}</b></div>
                        <ProductVersion version={size > 0 ? product.version : []} />
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
                                    {product.screen}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Hệ điều hành:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {product.os}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Camera sau:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {product.rearCamera}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Camera trước:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {product.frontCamera}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Chip:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {product.chip}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    RAM:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {product.ram}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Bộ nhớ trong:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {props.productVersion}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    SIM:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {product.sim}
                                </Grid >
                                <div style={{ width: "100%", height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                                <Grid item xs={12} sm={4} md={4} lg={4} className="product__detail__parameter__item">
                                    Pin:
                                </Grid >
                                <Grid item xs={12} sm={4} md={4} lg={8} className="product__detail__parameter__item">
                                    {product.pin}
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeProductVersion: (version) => {
            dispatch(actions.changeProductVersion(version))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);