import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/actions/auth";
export function LoginComponent(props) {
  const dispatch = useDispatch();
  const { logged, pending } = useSelector(({ auth }) => {
    return { logged: auth.logged, pending: auth.pending };
  });
  const login = useCallback(
    function (event) {
      event.preventDefault();
      return dispatch(loginAction());
    },
    [dispatch]
  );

  useEffect(
    function redirectIfLoggedIn() {
      if (logged) {
        props.history.replace("/app");
      }
    },
    [logged, props.history]
  );
  return (
    <div className="login-form">
      {pending ? (
        <div className="loading">
          <h1>Authenticating ...</h1>
        </div>
      ) : (
        <form onSubmit={login}>
          <label htmlFor="username">
            Username
            <input type="text" name="username" id="username" />
          </label>

          <label htmlFor="password">
            Password
            <input type="password" name="password" id="password" />
          </label>

          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      )}
    </div>
  );
}
