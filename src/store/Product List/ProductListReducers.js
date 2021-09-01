import ProductListActionTypes from "./ProductListActionTypes"


const initialState = {
    products: []
}

export const ProductListReducer = (state=initialState, action) => {
    switch(action.type) {
        case ProductListActionTypes.FETCH_PRODUCT_LIST: return {
            ...state,
            products: action.payload
        }
        default: return state
    }
}