import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from "redux-persist/lib/persistStore";
import thunk from 'redux-thunk'
import { persistedReducer, reducers } from "./RootReducer";

const compose = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(persistedReducer, compose)

export const persistor = persistStore(store)
