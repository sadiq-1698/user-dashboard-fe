import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "../contexts/authContext";

const Routes = () => {
  const { isLoggedIn } = useAuth();

  const dashboardRoutes = [
    "/",
    "/settings",
    "/users",
    "/transactions",
    "/schedules"
  ];

  return (
    <Router>
      <Switch>
        <Route path="/register" exact>
          <Register />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <PrivateRoute
          path={dashboardRoutes}
          component={Dashboard}
          auth={isLoggedIn}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
