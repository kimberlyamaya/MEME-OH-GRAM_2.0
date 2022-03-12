import React from 'react'
import "bootstrap-react"
import Navbar from '../Navbar/Navbar'
const styles = {
  width: {
    with: "50%"
  }

}
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
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg">submit</button>
            </div>
          </form>
        </div >
      </div>
    </div>
    
    </>


  )
}

export default Signup;