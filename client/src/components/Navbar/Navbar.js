import React from 'react'
import { NavLink } from "react-router-dom"
const styles = {
    inline: {
        display: "flex",
        justifyContent: "right",
        border: "solid, ",
        fontDecoration: "none"
    },
    space: {
        marginRight: "50px"
    },
    bGackcolor:{
        backGroundColor:"red"
    },
    title:{
        justifyContent:"center"

    }
}

function Navbar() {
    const handleClick = () => {
        console.log("click handled")
    }
    return (
        <>
<header >
    <div className="container ">
        <div class="row">
        <div class="col-sm">
      <h2>
        <a data-testid="link" href="/home">
        <NavLink to="/home" onClick={() => handleClick()}>
        Logo here
        </NavLink>
        </a>
     </h2>
    </div>

    <div class="col-sm" style={styles.inline}>
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
        <NavLink to="/login-signup" onClick={() => handleClick()}>
             Login/Signup
        </NavLink>
        </li>
    </ul>
       </div>
     </div>
   </div>
   <div className='col-12 text-center'><h1>Meme-OH-gram</h1></div>
 </header>
        </>

    )
}

export default Navbar