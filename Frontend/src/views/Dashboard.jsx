import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user);
  debugger;
  if (user.token === undefined) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Welcome</h1>
      <h1>{JSON.stringify(user.email)}</h1>
    </div>
  );
};

export default Dashboard;
