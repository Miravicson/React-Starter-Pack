import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class AuthorizedRoute extends React.Component {
  render() {
    const { component: Component, pending, logged, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (pending) return <div>Loading ...</div>;
          return logged ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          );
        }}
      />
    );
  }
}

const stateToProps = ({ auth }) => ({
  pending: auth.pending,
  logged: auth.logged,
});

export default connect(stateToProps)(AuthorizedRoute);
