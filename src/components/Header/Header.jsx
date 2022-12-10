import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../assets/Picture1.png";
import { FaUserAlt } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
const Header = () => {
  return (<Navbar collapseOnSelect expand="lg" variant="light" className="color-nav">
  <Container className="color-nav">
      <Navbar.Brand href="#home"><img src={logo} width="100" height="100"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          
      </Nav>
      <Nav >
      <Nav.Link href="/try">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Take a Tour</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
              Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
              Separated link
          </NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline-info" size='sm' style={{height: '40px', width : '100px'}}>Login</Button>
          <Button variant="secondary" size='sm' style={{height: '40px', width : '100px'}}>Sign Up</Button>
      </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>)
  
}

export default Header