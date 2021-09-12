import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { ProductListReducer } from "./Product List/ProductListReducers";
import { ProductDetailReducer } from "./Product Detail/ProductDetailReducers";
import { GetCartProductReducer } from "./Cart/CartReducers";
import { SignUpReducer } from "./Auth/SignUpReduce";
import { LogInReducer } from "./Auth/LogInReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const LoginPersistedReducer = persistReducer(persistConfig, LogInReducer);

const reducers = combineReducers({
  login: LoginPersistedReducer,
  signup: SignUpReducer,
  productList: ProductListReducer,
  productDetails: ProductDetailReducer,
  cartProducts: GetCartProductReducer
});

export default reducers;