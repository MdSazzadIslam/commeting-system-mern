//import React from "react";
//import Dashboard from "../views/Dashboard";
import Profile from "../components/Profile";
import Feed from "../components/Feed";
import Post from "../components/Post";

const route = [
  {
    path: "/dashboard/profile",
    name: "profile",
    icon: "fas fa-home",
    component: Profile,
    layout: "/Dashboard/profile",
  },

  {
    path: "/dashboard/feed",
    name: "feed",
    icon: "fas fa-home",
    component: Feed,
    layout: "/Dashboard",
  },

  {
    path: "/dashboard/post",
    name: "post",
    icon: "fas fa-home",
    component: Post,
    layout: "/Dashboard",
  },
];
export default route;
