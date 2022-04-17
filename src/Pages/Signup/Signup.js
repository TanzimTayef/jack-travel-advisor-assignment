import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1 className="text-center mt-3">Sign Up</h1>
      <div className="w-50 p-3 rounded mx-auto my-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="user name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
              </Form>
            <p>Already have an account? <Link to="/login">Login</Link> </p>
      </div>
    </div>
  );
};

export default Signup;
