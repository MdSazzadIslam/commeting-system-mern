/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { activateUserToken } from "../actions/authAction";

import "./Auth.css";
const Activation = (props) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function activeUser() {
      await dispatch(activateUserToken(props.match.params.token));
    }
    setToken(props.match.params.token);
    console.log(token);
    activeUser();
    //var decoded = jwt_decode(props.match.params.token);
    //activeUser(props.match.params.token);
    //console.log("token", props.match.params.token, "Decode", decoded);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("Error");
  };
  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="logo"></div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Activation</h4>
                  {error !== "" ? (
                    <div className="error">
                      <span style={{ color: "red" }}>{error} </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={submitHandler}>
                    <div className="form-group m-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Go back?
                      <Link to="/auth/login">Login</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activation;
