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

    // creating user by firebase hooks
    createUserWithEmailAndPassword(email, password);
    console.log("send email");

    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="text-center py-5">
      <h3 className="form-title">CREATE YOUR ACCOUNT</h3>
      <div className="form-container">
        <form>
          <input type="text" name="name" placeholder="User name" id="" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            id=""
          />
          <input type="password" name="password" placeholder="Password" id="" />
          <div>
            <button className="sing-btn" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
      <p className="my-3">Already have an account?? <Link className="fs-5" to="/login">Login</Link></p>
      <OtherLogin />
    </div>

    // <div>
    //   <h1 className="text-center mt-3">Sign Up</h1>
    //   <div className="w-50 mx-auto mt-3">
    //     <Form onSubmit={handleSignupForm}>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Control
    //           onBlur={(e) => setName(e.target.value)}
    //           type="text"
    //           placeholder="user name"
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Control
    //           onBlur={(e) => setEmail(e.target.value)}
    //           type="email"
    //           placeholder="enter email"
    //         />
    //         <Form.Text className="text-muted">
    //           We'll never share your email with anyone else.
    //         </Form.Text>
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Control
    //           onBlur={(e) => setPassword(e.target.value)}
    //           type="password"
    //           placeholder="password"
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Control
    //           onBlur={(e) => setConfirmpassword(e.target.value)}
    //           type="password"
    //           placeholder="password"
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //         <Form.Check type="checkbox" label="Check me out" />
    //       </Form.Group>
    //       {error}
    //       <Button variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form>
    //     <p>
    //       Already have an account? <Link to="/login">Login</Link>{" "}
    //     </p>
    //   </div>
    //   <OtherLogin />
    // </div>
  );
};

export default Signup;
