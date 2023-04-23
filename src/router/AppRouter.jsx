import React from "react";
import packageJson from "../../package.json";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import EatWhat from "../pages/eatwhat";
import ComputeDate from "../pages/compute-date";

export const RouterPrefix = packageJson.homepage;

function AppRouter() {
  return (
    <Router basename={RouterPrefix}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path={`/register`} exact component={Register} />
        <Route path={`/sign-in`} exact component={Login} />
        {/*<Route path="/eat-what" exact component={EatWhat} />*/}
        {/*<Route path="/compute-date" exact component={ComputeDate} />*/}
      </Switch>
    </Router>
  );
}
export default AppRouter;
