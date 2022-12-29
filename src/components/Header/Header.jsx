import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logoNav from "../../assets/logo-copy.png";
import { FaUserAlt } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" variant="light" className="navbar">
        <Container className="color-nav">
      <Navbar.Brand href="/try"><img src={logoNav}></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          
      </Nav>
      <Nav >
      <Nav.Link href="/try">Home</Nav.Link>
          <Nav.Link href="/login">About Us</Nav.Link>
          <NavDropdown title="More Options" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Take a Tour</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
              Contact
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Add a complain</NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline-info" size='sm' style={{height: '40px', width : '100px' }} href="./login">Login</Button>
          <Button variant="secondary" size='sm' style={{height: '40px', width : '100px'}} href="./register">Sign Up</Button>
      </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>)
  
}

export default Header