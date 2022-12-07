import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import EatWhat from "../pages/eatwhat";
import ComputeDate from "../pages/compute-date";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/sign-in" exact component={Login} />
        <Route path="/eat-what" exact component={EatWhat} />
        <Route path="/compute-date" exact component={ComputeDate} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
