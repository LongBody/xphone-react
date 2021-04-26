import React, { useState } from "react";
import Slider from "react-slick";
import './style/product.scss'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { connect } from 'react-redux'
import * as actions from '../../actions/productActions'

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

function ProductVersion(props) {

    const [selectedValue, setSelectedValue] = useState('128GB')
    function handleChange(event) {
        setSelectedValue(event);
        props.changeProductVersion(event);
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const settings_2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    let productVersion = []
    if (props.version.length > 0) {

        productVersion = props.version.map((item, index) => {
            return (
                <div className="product__version__container">
                    <div>
                        <GreenRadio
                            checked={selectedValue === props.productVersion && selectedValue === item.cap}
                            onChange={() => handleChange(item.cap)}
                            value={item.cap}
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': item.cap }}
                        />{item.cap}
                        <p className="product__version__price">{item.price}</p>
                    </div>
                </div>
            )
        })
    }


    return (
        <div>
            {
                props.version.length === 1 ?
                    <Slider {...settings_2} >

                        {productVersion}
                    </Slider>
                    :
                    <Slider {...settings} >

                        {productVersion}
                    </Slider>
            }
        </div>
    );
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



export default connect(mapStateToProps, mapDispatchToProps)(ProductVersion);