import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Entry from "../pages/Entry/Entry";

import { useAuth } from "../contexts/authContext";
import NotFound from "../pages/NotFound/NotFound";

const Routes = () => {
  const { isLoggedIn } = useAuth();

  const dashboardRoutes = [
    "/",
    "/settings",
    "/users",
    "/transactions",
    "/schedules"
  ];

  const entryRoutes = ["/register", "/login"];

  return (
    <Router>
      <Switch>
        <Route path={entryRoutes} exact>
          <Entry />
        </Route>

        <Route path="/404" exact>
          <NotFound />
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
