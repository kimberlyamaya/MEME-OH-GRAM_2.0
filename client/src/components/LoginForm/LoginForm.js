import React from 'react'

function Login() {
  return (
    <div>
       <>
    <div className='loginForm'>
      
      <h2>Login</h2>
      <h4>Login now to embark in a joy ride  </h4>
      <div className='container'>
        <div>
          <form >
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Username</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username"/>
              {/* <label htmlFor="exampleInputusername">Username</label>
              <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="usernamelHelp" placeholder="Username" /> */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg">submit</button>
              <h3 className='h3'>Don't have an account?</h3>
              <h3 className='h3'>Sign Up instead</h3>
              
              <a href="./SignupForm" className="btn btn-primary stretched-link">Sign Up</a>
              {/* <button href="#SignupForm" type="submit" className="btn btn-secondary btn-lg">Sing Up</button> */}

              {/* <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '} */}
            </div>
          </form>
        </div >
      </div>
    </div>
    
    </>
    </div>
  )
}

export default Login