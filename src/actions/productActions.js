import * as types from '../constants/actionTypes'

export const changeProductVersion = (version) => {
    return {
        type: types.CHANGE_PRODUCT_VERSION,
        version
    }
}