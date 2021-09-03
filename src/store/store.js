import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from "redux-persist/lib/persistStore";
import thunk from 'redux-thunk'
import reducers from "./RootReducer";

const compose = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(reducers, compose)

export const persistor = persistStore(store)
