import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
// import Users from "../pages/Users/Users";
// import Settings from "../pages/Settings/Settings";
// import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/settings" exact>
          <Dashboard />
        </Route>
        <Route path="/users" exact>
          <Dashboard />
        </Route>
        <Route path="/transactions" exact>
          <Dashboard />
        </Route>
        <Route path="/schedules" exact>
          <Dashboard />
        </Route>
        {/* <Route path="/edit" exact>
          <EditProfile />
        </Route> */}

        {/* <ProtectedRoute path="/" component={TodoContainer} auth={isAuth} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
