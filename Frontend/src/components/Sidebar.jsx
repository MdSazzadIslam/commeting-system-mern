import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_left">
        <div className="topBackground" />
        <div className="middle_container">
          <div className="img_container">
            <img
              className="logo"
              src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
              alt="profile"
            />
          </div>
          <div className="descriptions">
            <h1>Md Sazzadul Islam</h1>
            <span>Senior Full-stack Developer</span>
          </div>
          <div className="profile_viewers">
            <div className="profile_viewers_views">
              <a href="##">Who viewed your profile</a>
              <a href="##">1000</a>
            </div>
            <div className="profile_viewers_views">
              <a href="##">Views of your video</a>
              <a href="##">2000</a>
            </div>
          </div>
          <div className="premiumBox">
            <span>Access exclusive tools & insights</span>
            <span>Try premium Career for Free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
