import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
// import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
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
        <Route path={dashboardRoutes} exact>
          <Dashboard />
        </Route>

        {/* <ProtectedRoute path="/" component={TodoContainer} auth={isAuth} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
