import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

export default function NavbarMauaCheck() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-cyan fixed-top shadow-lg">
    <Container fluid>
      <Navbar.Brand href="/">Maua-Check</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link href="/">Página Principal</Nav.Link>
          <Nav.Link href="/Relatorio">Relatórios</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
