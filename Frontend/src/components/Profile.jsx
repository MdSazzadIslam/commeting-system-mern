import React from "react";
import profileImage from "../assets/images/avatar.png";
import { useSelector } from "react-redux";
import "./Profile.css";
const Profile = () => {
  const authReducer = useSelector((state) => state.authReducer);
  var { user } = authReducer;
  debugger;
  console.log(user);
  if (user.firstName === null || user.firstName === undefined) {
    user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  }

  return (
    <div className="container">
      <div className="main-body">
        <div className="container mt-5">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={profileImage}
                      alt="avatar"
                      className="rounded-circle"
                      width={150}
                    />
                    <div className="mt-3">
                      <h4> {user.firstName + " " + user.lastName}</h4>
                      <p className="text-secondary mb-1">
                        Sr. Full Stack Developer
                      </p>
                      <p className="text-muted font-size-sm">
                        Dhaka, Bangladesh
                      </p>
                      <button className="btn btn-primary">Follow</button>
                      <button className="btn btn-outline-primary">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {user.firstName + " " + user.lastName}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">{user.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      +880 1722536673
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      +880 1722536673
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
