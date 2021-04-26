import React, { useEffect, useState } from 'react';
import GridProduct from './grid_product'
import { callApi } from '../../apis/api'
import './style/product.scss'
function Product(props) {

    const [product, setProduct] = useState([])



    useEffect(() => {
        const fetchData = async () => {

            const callApiData = await callApi("product").then(async (response) => {
                let data = await response.data;
                // document.title = data[0].title + " " + product[0].version[0].cap + " | XPhone Việt Nam"

                return data
            })
            setProduct(callApiData)


        }
        fetchData()
    }, [props.fetchData]);

    return (
        <div className="background__item ">
            <GridProduct product={product.length > 0 ? product : []} />
        </div>

    );
}

export default Product;