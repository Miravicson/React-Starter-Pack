import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { UsersMenu } from "../pages/user/UsersMenu";
import { LogoutComponent } from "./LogoutComponent";

export function PrimaryHeader() {
  return (
    <header className="primary-header">
      <h1>Welcome to our app!</h1>
      <nav>
        <Switch>
          <Route path="/auth">
            <NavLink to="/auth/forgot-password" exact activeClassName="active">
              Forgot Password
            </NavLink>
          </Route>
          <Route>
            <NavLink to="/app/users" exact activeClassName="active">
              Users
            </NavLink>
            <NavLink to="/app/products" exact activeClassName="active">
              Products
            </NavLink>
            <LogoutComponent />
          </Route>
        </Switch>
      </nav>
      <Route path="/users" component={UsersMenu} />
    </header>
  );
}
