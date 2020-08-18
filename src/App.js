import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AuthorizedSubLayout from "./routes/AuthorizedSubLayout";
import UnauthorizedSubLayout from "./routes/UnauthorizedSubLayout";
import AuthorizedRoute from "./routes/AuthorizedRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={UnauthorizedSubLayout} />
          <AuthorizedRoute path="/app" component={AuthorizedSubLayout} />
          <Redirect to="/app" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
