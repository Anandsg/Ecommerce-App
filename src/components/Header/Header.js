import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Assuming you have a cartItems array to keep track of items in the cart
  const cartItems = []; // Replace this with your actual cart items
  
  return (
    <>
      <Navbar bg='dark' expand='sm' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            The Generics
          </Navbar.Brand>
        </Container>
        <Nav className='ml-auto justify-content-start'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#store'>Store</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#cart'>
            <div className="position-relative">
              <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-4" />
              <span
                className="position-absolute top-0 start-8 translate-middle badge rounded-pill bg-dark"
              >
                {cartItems.length} {/* Display the cart items count */}
              </span>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;


