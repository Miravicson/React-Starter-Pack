import React from "react";
export function ForgotPassword() {
  return (
    <div className="login-form">
      <form>
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
    </div>
  );
}
