import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
                  <h4 className="card-title">Forgot password</h4>
                  {error !== "" ? (
                    <div className="error">
                      <span style={{ color: "red" }}>{error} </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={submitHandler}>
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
                      <div className="invalid-feedback">Email is invalid</div>
                    </div>

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
                      <Link to="/">Login</Link>
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

export default ForgotPass;
