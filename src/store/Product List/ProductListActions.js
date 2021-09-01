import axios from 'axios';
import ProductListActionTypes from './ProductListActionTypes';


export const fetchProductList = () => async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products")
    dispatch({
        type: ProductListActionTypes.FETCH_PRODUCT_LIST,
        payload: response.data
    })
}