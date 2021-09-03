import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { LoginReducer } from "./Auth/AuthReducers";
import storage from "redux-persist/lib/storage";
import { ProductListReducer } from "./Product List/ProductListReducers";
import { ProductDetailReducer } from "./Product Detail/ProductDetailReducers";
import { GetCartProductReducer } from "./Cart/CartReducers";

const persistConfig = {
  key: "root",
  storage: storage,
};

const LoginPersistedReducer = persistReducer(persistConfig, LoginReducer);

const reducers = combineReducers({
  login: LoginPersistedReducer,
  productList: ProductListReducer,
  productDetails: ProductDetailReducer,
  cartProducts: GetCartProductReducer
});

export default reducers;