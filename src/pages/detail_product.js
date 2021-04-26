import React from 'react';
import Header from '../components/header/header'
import DetailProductComp from '../components/products/detail_product';
import Footer from '../components/footer/footer'
import { connect } from 'react-redux'
import * as actions from '../actions/productActions'
import ScrollToTop from '../hooks/scroll_to_top'

function DetailProduct(props) {

    props.idProductView(props.match.params.id)

    return (
        <div>
            <ScrollToTop />
            <Header />
            <div style={{ backgroundColor: "#FFFFFF" }}>
                <DetailProductComp idProduct={props.match.params.id} />
                <div style={{ width: "100%", marginTop: 40, height: 1, backgroundColor: "rgb(223, 223, 223)" }}></div>
                <Footer />
            </div>
        </div>

    );
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        idProductView: (id) => {
            dispatch(actions.idProductView(id))
        },
    }
}



export default connect(null, mapDispatchToProps)(DetailProduct);