import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
