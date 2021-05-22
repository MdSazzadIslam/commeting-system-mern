import React, { useState, shallowEqual } from "react";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import validate from "../helpers/validate";
import "./Auth.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const user = useSelector((state) => state.authReducer, shallowEqual);

  //const user = useSelector((state) => state.authReducer);
  console.log("token", user);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        setDisabled(true);

        const inputs = {
          email: email,
          password: password,
        };

        const validation = await validate(inputs);
        debugger;
        if (
          validation.email !== undefined ||
          validation.password !== undefined
        ) {
          if (validation.password) {
            setError(validation.password);
          }
          if (validation.email) {
            setError(validation.email);
          }
          setDisabled(false);
          return;
        } else {
          await dispatch(loginUser(email, password));
          //alert(user.msg);

          /*  if (user.success === false) {
            setError(user.msg);
          } */

          setDisabled(false);
        }
      } catch (err) {
        setError(err);
        setDisabled(false);
      }
    } else {
      setError("Please Enter email and password.");
      setDisabled(false);
      return;
    }
  };

  debugger;
  if (user.loggedIn === true) {
    return <Redirect to="/dashboard/feed" />;
  }

  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="logo">
                {/* <img src="img/logo.jpg" alt="logo" /> */}
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  {error !== "" ? (
                    <div className="error">
                      <span style={{ color: "red" }}>{error} </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={(e) => submitHandler(e)}>
                    <div className="form-group">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <div className="invalid-feedback">{error.email}</div>
                    </div>
                    <div className="form-group">
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        minLength="8"
                      />
                      <div className="invalid-feedback">{error.password}</div>
                    </div>

                    <div className="form-group m-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={disabled}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Don't have an account?
                      <Link to="/auth/registration">Register here</Link>
                    </div>
                  </form>
                </div>
              </div>
              {/*  <div className="footer">
                Copyright © 2021 — Md. Sazzadul Islam
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
