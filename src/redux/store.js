import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducers";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer
});

const composeEnhancer =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancer(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
