import * as types from '../constants/actionTypes'

export const changeProductVersion = (version) => {
    return {
        type: types.CHANGE_PRODUCT_VERSION,
        version
    }
}


export const idProductView = (id) => {
    return {
        type: types.VIEW_PRODUCT_DETAIL,
        id
    }
}