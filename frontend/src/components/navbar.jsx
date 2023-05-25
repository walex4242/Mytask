import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const AppNav = () => {
  return (
    <Navbar bg="light" expand="sm" className="shadow" >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            className="text-capitalize text-decoration-none text-dark fw-bold"
          >
            Product App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-md-flex align-items-start justify-content-end"
        >
          <Nav className="d-md-flex align-items-center justify-content-around">
            <Link to="/" className="app-nav-links mx-md-3 my-3">
              {" "}
              Shop{" "}
            </Link>
            <Link to="/create" className="app-nav-links">
              {" "}
              Add Product{" "}
            </Link>{" "}
            <Link to="/cart" className="app-nav-links mx-md-2 my-3">
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNav;
