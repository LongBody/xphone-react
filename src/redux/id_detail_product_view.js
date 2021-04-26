import * as types from '../constants/actionTypes'


const initialState = ""



const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.VIEW_PRODUCT_DETAIL:
            state = action.id
            return state
        default:
            return state
    }
}


export default myReducer