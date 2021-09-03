import ProductDetailActionTypes from "./ProductDetailActionTypes"

const initialState = {
    currentProduct: []
}

export const ProductDetailReducer = (state=initialState, action) => {
    switch(action.type) {
        case ProductDetailActionTypes.FETCH_PRODUCT_DETAILS: return {
            ...state,
            currentProduct: action.payload
        }

        default: return state
    }
}