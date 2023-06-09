import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="white" expand="0">
      <Container className="my-2">
        <Navbar.Brand href="#home">Strapko.D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas id="basic-navbar-nav" className="w-75">
          <Nav className="me-auto m-3">
            <div className="d-flex gap-2 mb-3">
              <img
                src={require("../img/avatar.jpeg")}
                alt="avatar"
                width="80px"
                height="80px"
              />
              <div>
                <h1>Daniil Strapko</h1>
                <a
                  href="mailto: strapko.dev@gmail.com"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  strapko.dev@gmail.com
                </a>
              </div>
            </div>
            <Nav.Link href="#" className="pb-0">
              Список постов
            </Nav.Link>
            <Nav.Link href="#">Обо мне</Nav.Link>
          </Nav>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
