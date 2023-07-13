import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavToggle}>
          Dog Grooming Salon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={handleNavToggle} />
        <Navbar.Collapse id="navbar-nav" className={isNavOpen ? 'show' : ''}>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavToggle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavToggle}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleNavToggle}>
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;