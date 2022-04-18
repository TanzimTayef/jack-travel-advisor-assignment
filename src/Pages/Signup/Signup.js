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

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();

  const handleSignupForm = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Your password must need to 6 chracter");
    }
    if (password !== confirmpassword) {
      setError("Your email don't match");
      return;
    }
    if (user) {
      navigate("/");
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
          />
          <input type="password"  onBlur={(e) => setPassword(e.target.value)}  name="password" placeholder="Password" id="" />
          <input type="password"  onBlur={(e) => setConfirmpassword(e.target.value)}  name="password" placeholder="Confirm Password" id="" />
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
