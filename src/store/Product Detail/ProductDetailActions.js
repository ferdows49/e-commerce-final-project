import axios from "axios";
import ProductDetailActionTypes from "./ProductDetailActionTypes";

export const fetchProductDetail = (productId) => async (dispatch) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );
  dispatch({
    type: ProductDetailActionTypes.FETCH_PRODUCT_DETAILS,
    payload: response.data,
  });
};
