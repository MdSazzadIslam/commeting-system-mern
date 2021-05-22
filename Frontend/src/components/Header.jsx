import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authAction";
import { useDispatch } from "react-redux";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    debugger;
    await dispatch(logoutUser());
  };
  return (
    <div className="header">
      <div class="topnav">
        <Link to="/dashboard/feed">Feed</Link>
        <Link to="/dashboard/post">Post</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/" onClick={(e) => logoutHandler(e)}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Header;
