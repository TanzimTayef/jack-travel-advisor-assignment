import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  // signIn firebase hooks state:
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
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

  // error
  if (error) {
    errMsg = (
      <p className="text-danger text-center mt-2">Error: {error?.message}</p>
    )
  }

  // handle login form:
  const handleLogin = (e) => {
    e.preventDefault();

    // signIn with firebase hooks
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1 className="text-center mt-3">Login</h1>
      <div className="w-50 p-3 rounded mx-auto my-5">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          Already have an account? <Link to="/signup">Sign up</Link>{" "}
        </p>
      </div>
      {errMsg}
    </div>
  );
};

export default Login;
