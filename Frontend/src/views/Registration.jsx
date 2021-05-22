import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registrationUser } from "../actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import validate from "../helpers/validate";
import "./Auth.css";

const Registration = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const register = useSelector((state) => state.authReducer.register);

  const submitHandler = async (e) => {
    e.preventDefault();
    if ((firstName, lastName, email, password)) {
      try {
        debugger;

        setDisabled(true);
        const inputs = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        };

        const validation = await validate(inputs);

        if (
          validation.firstName !== undefined ||
          validation.lastName !== undefined ||
          validation.email !== undefined ||
          validation.password !== undefined
        ) {
          if (validation.firstName) {
            setError(validation.firstName);
          }
          if (validation.lastName) {
            setError(validation.lastName);
          }

          if (validation.email) {
            setError(validation.email);
          }

          if (validation.password) {
            setError(validation.password);
          }
          setDisabled(false);
          return;
        }

        await dispatch(registrationUser(firstName, lastName, email, password));

        if (register.success === false) {
          setError(register.msg);
        }

        setDisabled(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setDisabled(false);
      }
    }
  };
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
                  <h4 className="card-title">Registration</h4>
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
                        id="firstName"
                        type="text"
                        className="form-control"
                        placeholder="Enter first name"
                        name="firstName"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                      />
                      <div className="invalid-feedback">
                        First name is invalid
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        id="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Enter last name"
                        name="lastName"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                      />
                      <div className="invalid-feedback">
                        First name is invalid
                      </div>
                    </div>

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
                    <div className="form-group">
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password"
                        required
                        minLength="8"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <div className="invalid-feedback">
                        Password is required
                      </div>
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
                      Go back?
                      <Link to="/">Login</Link>
                    </div>
                  </form>
                </div>
              </div>
              {/*   <div className="footer">
                Copyright © 2021 — Md. Sazzadul Islam
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
