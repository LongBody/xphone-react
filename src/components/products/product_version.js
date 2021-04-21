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

    const [selectedValue, setSelectedValue] = useState('128')
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
    return (
        <div>
            <Slider {...settings} >
                <div className="product__version__container">
                    <div>
                        <GreenRadio
                            checked={selectedValue === '128'}
                            onChange={() => handleChange('128')}
                            value="128"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '128' }}
                        />128GB
                    <p className="product__version__price">30.800.000</p>
                    </div>
                </div>
                <div className="product__version__container">
                    <div>
                        <GreenRadio
                            checked={selectedValue === '256'}
                            onChange={() => handleChange('256')}
                            value="256"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '256' }}
                        />256GB
                    <p className="product__version__price">33.890.000</p>
                    </div>
                </div>
                <div className="product__version__container">
                    <div>
                        <GreenRadio
                            checked={selectedValue === '512'}
                            onChange={() => handleChange('512')}
                            value="512"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': '512' }}
                        />512GB
                    <p className="product__version__price">41.490.000</p>
                    </div>
                </div>
            </Slider>
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