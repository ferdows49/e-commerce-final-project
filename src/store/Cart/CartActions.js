import axios from "axios";
import CartActionTypes from "./CartActionTypes";

export const AddToCart = (item) => async (dispatch) => {
    const response = await axios.post(`http://localhost:8080/cart`, item)
    dispatch({
        type: CartActionTypes.ADD_TO_CART,
        payload: response.data
    })
}

export const GetCartProducts = (userId) => async (dispatch) => {
    const response = await axios.get(`https://fakestoreapi.com/carts`)
    dispatch({
        type: CartActionTypes.GET_CART_PRODUCTS,
        payload: response.data
    })
}