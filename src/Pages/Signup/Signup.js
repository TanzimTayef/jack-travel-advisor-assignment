import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OtherLogin from "../../Shared/OtherLogin/OtherLogin";
import "./Signup.css";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  let navigate = useNavigate();
  let errMsg;

// user navigate
  if (user) {
    navigate("/");
  }
// loading
  if (loading) {
    return <Loading/>
  }

  // error
  if (error) {
    errMsg = (
      <span className="text-danger text-center">Error: {error?.message}</span>
    );
  }

  const handleSignupForm = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      console.log("Your password must need to 6 chracter");
    }
    if (password !== confirmpassword) {
      console.log("Your email don't match");
      return;
    }
    // creating user by firebase hooks
    createUserWithEmailAndPassword(email, password);
    setName("")
    setEmail("")
    setPassword("")
    setConfirmpassword("")
  };

  return (
    <div className="text-center py-5">
      <h3 className="form-title">CREATE YOUR ACCOUNT</h3>
      <div className="form-container">
        <form onSubmit={handleSignupForm}>
          <input type="text"  onBlur={(e) => setName(e.target.value)} name="name" placeholder="User name" id="" />
          <input
            type="email"
            onBlur={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter your email address"
            id=""
            required
          />
          <input type="password" required  onBlur={(e) => setPassword(e.target.value)}  name="password" placeholder="Password" id="" />
          <input type="password" required onBlur={(e) => setConfirmpassword(e.target.value)} name="password" placeholder="Confirm Password" id="" />
          {errMsg}
          <div>
            <button className="sing-btn" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <p className="my-3">Already have an account?? <Link className="fs-5" to="/login">Login</Link></p>
      <OtherLogin />
    </div>
  );
};

export default Signup;
