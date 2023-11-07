import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import ImageUploader from "../pages/upload";

function AppRouter() {
  return (
    <Router basename="auth">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/auth" exact component={Login} />
        <Route path={`/register`} exact component={Register} />
        <Route path={`/sign-in`} exact component={Login} />
        <Route path="/upload" exact component={ImageUploader} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </Router>
  );
}
export default AppRouter;
