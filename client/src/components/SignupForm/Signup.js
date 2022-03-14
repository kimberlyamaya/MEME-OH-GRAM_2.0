import React from 'react'
import {Button} from "react-bootstrap"
// import Navbar from '../Navbar/Navbar'
// const styles = {
//   width: {
//     with: "50%"
//   }

// }
function Signup() {
  return (
    <>
    <div className='signupForm'>
      
      <h2>Signup</h2>
      <h4>Signup now to embark in joy ride  </h4>
      <div className='container'>
        <div>
          <form >
            <div className="form-group">
            <label htmlForm="formGroupExampleInput">Username</label>
            <input type="text" class="form-control" placeholder="Username"/>
              <div className="form-group ">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg">submit</button>
              <h3 className='h3'>Have an account?</h3>
              <h3 className='h3'>Login instead</h3>
              <a href="./LoginForm" className="btn btn-primary stretched-link">Login</a>
              {/* <button href="./LoginForm" type="submit" className="btn btn-secondary btn-lg">Login</button> */}
              {/* <Button href="#">Link</Button>  */}
            </div>
          </form>
        </div >
      </div>
    </div>
    
    </>


  )
}

export default Signup;