import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar bg="white" expand="lg" style={{ height: "60px" }}>
      <Container>
        <Navbar.Brand to="/home" className="fw-bold">
          Jack Travel Advisor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/signup">Signup</Link>
            {user ? (
              <button className="bg-transparent border-0 fw-bold ms-2" onClick={handleSignOut}>Log Out</button>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
