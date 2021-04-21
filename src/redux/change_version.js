import * as types from '../constants/actionTypes'


const initialState = "128"



const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_PRODUCT_VERSION:
            state = action.version
            return [...state]
        default:
            return state
    }
}


export default myReducer