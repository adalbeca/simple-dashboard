import React, {useState} from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Simple Form</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="/form">REGISTER</Nav.Link>
                    <Nav.Link href="#link">SEARCH</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu;