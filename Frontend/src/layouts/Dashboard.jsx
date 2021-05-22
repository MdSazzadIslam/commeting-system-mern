import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import routes from "../routes/route";

function Dashboard() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <div>
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
