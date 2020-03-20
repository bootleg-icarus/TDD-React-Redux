import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

export const middlewares = [ReduxThunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
