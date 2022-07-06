import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className="navbarBG" expand="lg">
        <Container fluid className="navbarCont">
          <Navbar.Brand className="navbarCont" as={Link} to="/">
            <h2>DND SPELLS</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" className="navbarCont" />
          <Navbar.Collapse id="navbar" className="navbarCont">
            <Nav className="ml-auto navbarCont">
              <Nav.Link as={Link} to="/saved">
                <h4>Saved Spells</h4>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
