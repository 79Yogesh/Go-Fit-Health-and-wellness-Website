

import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';

import img6 from './images/developer.jpg'

import pic from "./images/logo.jpg"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export function NavigationBar() {
    const linkStyle = { color: 'white' }; // Custom style for the navigation links
    const brandNameStyle = { color: 'white', fontFamily: 'YourFunkyFont', fontSize: '2rem' }; // Add your funky font family
  
    return (
      <Navbar expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center" style={brandNameStyle}>
            <img
              src={pic}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Go-Fit Logo"
              rounded
            />
            {' '}
            Go-Fit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link style={linkStyle}>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link style={linkStyle}>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/programs">
                <Nav.Link style={linkStyle}>Programs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactus">
                <Nav.Link style={linkStyle}>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              <LinkContainer to="/signup">
                <Nav.Link style={linkStyle}><Button>Sign Up</Button></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link style={linkStyle}><Button>Login</Button></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }