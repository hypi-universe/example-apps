import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Dashboard from "../views/Dashboard";
// core components
import Login from "../views/Login";
import SignUp from "../views/SignUp";

export default function MainRoute() {
  const history = useHistory();
  const isLoggedIn = JSON.parse(window.localStorage.getItem("user"));
  useEffect(() => {
    if (isLoggedIn?.id) {
      history.push("/dashboard");
    } else {
      history.push("/login");
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/signup`} component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}
