import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      fixed="top"
      expand="md"
      style={{
        backgroundColor: "white",
        fontFamily: "ui-monospace, monospace",
        borderBottom: "1px solid #dee2e6",
        padding: "1rem 0",
      }}
    >
      <Container>
        <Navbar.Brand
          style={{
            color: "#0d6efd",
            fontWeight: "bold",
            // textDecoration: 'underline'
          }}
        >
          Haris Alic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "#666", marginLeft: "2rem" }}
            >
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
