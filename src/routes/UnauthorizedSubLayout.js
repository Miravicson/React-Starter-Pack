import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LoginComponent } from "../components/LoginComponent";
import { ForgotPassword } from "../components/ForgotPassword";
import { ResetPassword } from "../components/ResetPassword";
import withLayout from "./withLayout";

function UnauthorizedLayout(props) {
  return (
    <Switch>
      <Route path={`${props.match.path}/login`} component={LoginComponent} />
      <Route
        path={`${props.match.path}/reset-password`}
        component={ResetPassword}
      />
      <Route
        path={`${props.match.path}/reset-password`}
        component={ForgotPassword}
      />
      <Redirect to={`${props.match.path}/login`} />
    </Switch>
  );
}

export default withLayout(UnauthorizedLayout);
