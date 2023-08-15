import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartButton from "./CartButton";

const Header = (props) => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    The Generics
                </Navbar.Brand>
                <Nav className={'me-auto'}>
                    <Nav.Link href="#" >Home</Nav.Link>
                    <Nav.Link href="#">Store</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
                <div className="d-flex w-auto mb-3">
                    <CartButton onOpenCart={props.onOpenCart} />
                </div>
            </Container>
        </Navbar>
    )
}

export default Header;