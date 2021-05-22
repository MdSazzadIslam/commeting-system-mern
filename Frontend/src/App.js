import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import { createBrowserHistory } from "history";
import { PrivateRoute } from "./routes/PrivateRoute";
const history = createBrowserHistory();

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Login = React.lazy(() => import("./views/Login"));
const Registration = React.lazy(() => import("./views/Registration"));
const ForgotPass = React.lazy(() => import("./views/ForgotPass"));
const Activation = React.lazy(() => import("./views/Activation"));
const dashboard = React.lazy(() => import("./layouts/Dashboard"));

function App() {
  return (
    <Router history={history}>
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/" exact render={(props) => <Login {...props} />} />
          <Route
            path="/auth/registration"
            exact
            render={(props) => <Registration {...props} />}
          />

          <Route
            path="/auth/activation"
            exact
            render={(props) => <Activation {...props} />}
          />

          <Route
            path="/auth/forgot-password"
            exact
            render={(props) => <ForgotPass {...props} />}
          />

          <PrivateRoute path="/dashboard" component={dashboard} />
          <Redirect from="/" to="/dashboard/feed" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
