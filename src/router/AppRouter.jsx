import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/sign-in" exact component={Login} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
