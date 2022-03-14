import React from 'react'

// import 'react-bootstrap'
import { Container, NavDropdown, Nav, Navbar, NavLink } from 'react-bootstrap';

// -ka added 3/14
import Auth from '../../utils/auth'
// -ka end

// const styles = {
//     inline: {
//         display: "flex",
//         justifyContent: "right",
//         border: "solid, ",
//         fontDecoration: "none"
//     },
//     space: {
//         marginRight: "50px",
        
//     },
//     bGackcolor:{
//         backGroundColor:"red"
//     },
//     title:{
//         justifyContent:"center"
//     },
//     header:{backgroundColor:"lightgreen"    
//     }
// }


  
  
function NavbarMain() {
    // -ka added 03/14
    const logout = event => {
      event.preventDefault();
      Auth.logout()
    }
    // -ka end

    const handleClick = () => {
        console.log("click handled")
    }
    return (
        <>
<header className='header bigNavbar' >
    <div className="container ">
        <div className="row">
        <div className="col-sm">
      <h2>
        <a className='logo' href="/home">
        <NavLink to="/home" onClick={() => handleClick()}>
        Logo here
        </NavLink>
        </a>
     </h2>
    </div>

    {/* <nav className="col-sm nav" style={styles.inline}>
    <ul style={styles.inline}>
        <li style={styles.space}>
        <NavLink to="/home" onClick={() => handleClick()}>
            Home
        </NavLink>
        </li>
        <li style={styles.space}>
        <NavLink to="/about" onClick={() => handleClick()}>
            About
        </NavLink></li>
        <li style={styles.space}>
        <NavLink to="/memes" onClick={() => handleClick()}>
             Memes
        </NavLink>
        </li>
        <li style={styles.space}>
        <NavLink to="/loginform" onClick={() => handleClick()}>
             Login
        </NavLink>
        </li>
        <li style={styles.space}>
        <NavLink to="/signupform" onClick={() => handleClick()}>
             Sign Up
        </NavLink>
        </li>
        <li style={styles.space}>
        <NavLink to="/logout" onClick={() => handleClick()}>
             Logout
        </NavLink>
        </li>
    </ul>
   </nav> */}
     </div>
 <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Meme-OH-gram</Navbar.Brand>
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


   <div className='col-12 text-center'><h1>Meme-OH-gram</h1>
   </div>
 </header>
        </>

    )
}

export default NavbarMain