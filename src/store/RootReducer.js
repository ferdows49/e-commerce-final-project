import { combineReducers } from "redux";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistReducer from "redux-persist/es/persistReducer";
import { LoginReducer } from "./Auth/AuthReducers";
import storage from 'redux-persist/lib/storage'
import {ProductListReducer} from './Product List/ProductListReducers'

const persistConfig = {
    key: 'root',
    storage: storage,
};

// const persistedCombineReducers = persistCombineReducers({
//     LoginReducer
// });

const reducers = combineReducers({
  LoginReducer,
  productList: ProductListReducer
});

export const persistedReducer = persistReducer(
  //   persistedCombineReducers,
  persistConfig,
  reducers
);
