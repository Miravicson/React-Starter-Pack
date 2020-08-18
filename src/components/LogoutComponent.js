import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../store/actions/auth";

export function LogoutComponent(props) {
  const dispatch = useDispatch();
  const { logged } = useSelector(({ auth }) => {
    return { logged: auth.logged };
  });

  const logout = useCallback(
    function (...args) {
      return dispatch(logoutAction(...args));
    },
    [dispatch]
  );

  useEffect(
    function redirectIfLoggedIn() {
      if (!logged) {
        props.history.replace("/auth");
      }
    },
    [logged, props.history]
  );

  return (
    <div className="login-form">
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
