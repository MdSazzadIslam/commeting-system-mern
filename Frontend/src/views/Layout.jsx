import React from "react";
import Header from "../components/Header";
/* import Comment from "../components/Comment";
import Post from "../components/Post"; */

//import { Redirect } from "react-router-dom";

//import Feed from "../components/Feed";
import Footer from "../components/Footer";
//import { useSelector } from "react-redux";
import Meta from '../components/Meta'
const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

export default function Layout({ ...rest }) {
  return (
    <>
  
      <Header />
      {props.children}
     
    </>
  );
}

export default Layout;
