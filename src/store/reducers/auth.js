import * as types from "../types";

const initialState = {
  pending: false,
  logged: false,
};

function authReducer(state = initialState, action) {
  if (action.type === types.LOGIN) {
    return {
      ...state,
      pending: false,
      logged: true,
    };
  }
  if (action.type === types.LOGOUT) {
    return {
      ...state,
      pending: false,
      logged: false,
    };
  }

  if (action.type === types.LOADING) {
    return {
      ...state,
      pending: true,
    };
  }

  return state;
}

export default authReducer;
