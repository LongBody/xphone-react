import React from 'react';
import GridProduct from './grid_product'
import './style/product.scss'
function Product() {

    let product = [
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/228999/samsung-galaxy-a02-xanhduong-600x600-600x600.jpg",
            "title": "Samsung Galaxy A52 5G",
            "price": 10990000,
            "sale": 4,
            "rate": 5,
            "feedback": 19
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg",
            "title": "IPhone 12 64GB",
            "price": 21990000,
            "sale": 5,
            "rate": 4,
            "feedback": 56
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-600x600-600x600.jpg",
            "title": "Samsung Galaxy Note 20 Ultra",
            "price": 29990000,
            "sale": 26,
            "rate": 4,
            "feedback": 16
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg",
            "title": "Vivo Y51 (2020)",
            "price": 6290000,
            "sale": 17,
            "rate": 5,
            "feedback": 89
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/228999/samsung-galaxy-a02-xanhduong-600x600-600x600.jpg",
            "title": "Samsung Galaxy A52 5G",
            "price": 10990000,
            "sale": 6,
            "rate": 5,
            "feedback": 21
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/228999/samsung-galaxy-a02-xanhduong-600x600-600x600.jpg",
            "title": "Samsung Galaxy A52 5G",
            "price": 10990000,
            "sale": 6,
            "rate": 5,
            "feedback": 76
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/228999/samsung-galaxy-a02-xanhduong-600x600-600x600.jpg",
            "title": "Samsung Galaxy A52 5G",
            "price": 10990000,
            "sale": 6,
            "rate": 5,
            "feedback": 100
        },
        {
            "image": "https://cdn.tgdd.vn/Products/Images/42/228737/iphone-12-trang-new-600x600-600x600.jpg",
            "title": "iPhone 12 256GB",
            "price": 27490000,
            "sale": 5,
            "rate": 5,
            "feedback": 120
        },
    ]
    return (
        <div>
            <GridProduct product={product} />
        </div>

    );
}

export default Product;