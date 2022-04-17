import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <Navbar bg="white" expand="lg"  style={{height: "60px"}}>
      <Container>
        <Navbar.Brand to="/home" className="fw-bold">Jack Travel Advisor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ms-auto fw-bold">
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/signup">Signup</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
