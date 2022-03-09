import React  from 'react'
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
}from 'react-bootstrap'

function NavBar (props){







    return(
        <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">ProvisionMD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
            {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} onClick={Auth.logout}>Logout</Nav.Link>
                  <Nav.Link as={Link} to='/'>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to='/refill'>
                    Refill
                  </Nav.Link>
                </>

              ) : (
                <>
                  <Nav.Link  onClick={props.handleShowLogin}>Login</Nav.Link>
                  <Nav.Link href="#features"onClick={props.handleShow}>Sign Up</Nav.Link>
                </>
    )}
              {/* login here */}
              <Nav.Link href="#home">Refill Subsription</Nav.Link>
              <Nav.Link href="#link">Contact A Doctor</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Login showLogin={props.showLogin} handleCloseLogin={props.handleCloseLogin}/> 
          <SignUp show={props.show} handleClose={props.handleClose} />
        </Container>
      </Navbar>
    )
}

export default NavBar;