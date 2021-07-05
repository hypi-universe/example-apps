import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../views/Dashboard";
// core components
import Login from "../views/Login";

export default function MainRoute() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path={`/`} component={Login} />
      </Switch>
    </div>
  );
}
