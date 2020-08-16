import user from "./user";
import basket from "./basket";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { Actions } from "../types/actions/rootActions";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  basket,
  user,
});

export type AppState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, Actions>))
);
