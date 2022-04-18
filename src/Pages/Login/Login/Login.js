import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import OtherLogin from "../../../Shared/OtherLogin/OtherLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // signIn firebase hooks state:
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  // email, password state:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // navigation state:
  const navigate = useNavigate();
  // location state:
  const location = useLocation();
  // user current location path:
  let from = location.state?.from?.pathname || "/";
  let errMsg;

  // replace to user current location:
  if (user) {
    navigate(from, { replace: true });
  }
  // loading
  if (loading) {
    return <Loading />;
  }

  // error
  if (error) {
    errMsg = (
      <span className="text-danger text-center">Error: {error?.message}</span>
    );
  }

  const resetPassowrd = () => {
    sendPasswordResetEmail(email);
    toast("send email");
  };

  // handle login form:
  const handleLogin = (e) => {
    e.preventDefault();

    // signIn with firebase hooks
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="py-5">
      <h3 className="form-title">Log In with jack</h3>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            onBlur={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email address"
            id=""
            required
          />
          <input
            type="password"
            onBlur={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
            id=""
            required
          />

          <div>{errMsg ? errMsg : ""}</div>

          <div>
            <button className="sing-btn" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
      <p className="mt-3 text-center">
        Create an account!!{" "}
        <Link className="fs-6" to="/signup">
          Sign Up
        </Link>
      </p>
      <div className="text-center m-0 p-0 ">
        <Link to="" onClick={resetPassowrd}>
          Reset password
        </Link>
      </div>
      <OtherLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
