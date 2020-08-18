import * as types from "../types";

export function loginAction(dispatch, getState) {
  return (dispatch) => {
    dispatch(setStatusLoading());
    setTimeout(() => {
      dispatch(login());
    }, 500);
  };
}

export function login() {
  return {
    type: types.LOGIN,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function setStatusLoading() {
  return {
    type: types.LOADING,
  };
}
