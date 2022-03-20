import React from 'react'
import logo from '../../Assets/logo.svg';
// import 'react-bootstrap'
import { Container, NavDropdown, Nav, Navbar, NavLink } from "react-bootstrap";

// -ka added 3/14
import Auth from '../../utils/auth'
 
function NavbarMain() {
  // -ka added 03/14
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  // -ka end

    const handleClick = () => {
        console.log("click handled")
    }
    
    return (
        
<header className='header bigNavbar' >
    <div className="container ">

      
        <div className="row   ">
       
        {/* <div className="col-sm"> */}

        <div  >
        <Nav.Link href="/home" onClick={() => handleClick()}>
      <img className='logo' src={logo} alt="meme-oh-gram-logo" />
        </Nav.Link>
        
        </div> <div className='col-4 title '><h1 className=''>Meme-OH-gram</h1></div>
       
     </div>
 <Navbar bg="light"className='rounded' expand="lg">
  <Container  >
    <Navbar.Brand href="./Home">Meme-OH-gram</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="./Home">Home</Nav.Link>
        {/* <Nav.Link href="#link">Link</Nav.Link> */}
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="./LoginForm">Login</NavDropdown.Item>
          <NavDropdown.Item href="./SignupForm">Sign Up</NavDropdown.Item>
          {/* -ka updated href to implement logout */}
          <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>
          {/* -ka end */}
          <NavDropdown.Item href="./Profile">Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
</header>
  );
}

export default NavbarMain;
