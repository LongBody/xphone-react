function convertPrice(number) {
    let price = number.toString().split("").reverse()
    for (let i = 3; i < price.length; i++) {
        price.splice(i, 0, '.');
        i += 3
    }
    return price.reverse().join('');
}


function calculatePriceUseSale(price, sale) {
    let priceSale = price - price * (sale / 100);
    return convertPrice(priceSale);
}

export {
    convertPrice,
    calculatePriceUseSale
}