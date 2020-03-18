import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import ReduxThunk from "redux-thunk";

export const middleswares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleswares)(
  createStore
);

export const store = createStoreWithMiddleware(RootReducer);
