import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ auth: isAuth, component: Component, ...rest }) => {
  return (
    <Route
      exact
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  component: PropTypes.any.isRequired
};

export default PrivateRoute;
