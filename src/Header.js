import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; // Import custom CSS

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      {/* <Navbar.Brand href="#">Ecommerce Store</Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav-links">
          <Nav.Link href="#" className="custom-nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="custom-nav-link">
            Store
          </Nav.Link>
          <Nav.Link href="#" className="custom-nav-link">
            About
          </Nav.Link>
        </Nav>
        <Nav className="custom-cart-section">
          <Nav.Link href="#" className="custom-cart-link">
            <i className="fa fa-shopping-cart"></i>
            {/* <Badge variant="warning">3</Badge> */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
