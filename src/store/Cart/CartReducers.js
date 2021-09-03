import CartActionTypes from "./CartActionTypes"


const initialState = {
    cartProducts: []
}

export const AddToCartReducer = (state=initialState, action) => {
    switch(action.type) {
        case CartActionTypes.ADD_TO_CART: return {
            ...state,
            cartProducts: action.payload
        }
        case CartActionTypes.GET_CART_PRODUCTS: return {
            ...state,
            cartProducts: action.payload
        }
        default: return state;
    }
}

export const GetCartProductReducer = (state=initialState, action) => {
    switch(action.type) {
        case CartActionTypes.GET_CART_PRODUCTS: return {
            ...state,
            cartProducts: action.payload
        }
        default: return state;
    }
}