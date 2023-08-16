import React from "react";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import CartButton from "./CartButton";

const Header = (props) => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    The Generics
                </Navbar.Brand>
                <Nav className={'me-auto'}>
                    <NavLink to='/home' className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to='/' className="nav-link" style={{ color: 'black' }}>
                        Store
                    </NavLink>
                    <NavLink to='/about' className="nav-link" style={{ color: 'black' }}>
                        About
                    </NavLink>
                </Nav>
                <div className="d-flex w-auto mb-3">
                    <CartButton onOpenCart={props.onOpenCart} />
                </div>
            </Container>
        </Navbar>
    )
}

export default Header;