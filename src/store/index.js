import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./reducers/auth";

const rootReducer = combineReducers({ auth });
/**
 *
 * @param {*} middleware
 * @param  {...any} enhancers
 */
function composeMiddleWare(middleware = [], ...enhancers) {
  if (process.env.NODE_ENV === "development") {
    return composeWithDevTools(applyMiddleware(...middleware), ...enhancers);
  }

  return compose(applyMiddleware(...middleware), ...enhancers);
}

const store = createStore(rootReducer, composeMiddleWare([thunk]));

export default store;
