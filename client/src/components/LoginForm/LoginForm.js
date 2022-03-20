// -ka added useState 3/14
import React, { useState } from 'react'
// -ka end

// -ka added 3/14
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'; 

const Login = (props) => {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  })
  const [login, { error }] = useMutation(LOGIN_USER)

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {
      // console.log(err);
      console.log(JSON.stringify(err, null, 2))
    }

    setFormState({
      username: '',
      password: '',
    });
  }
// -ka end

// -ka removed this function line, replaced by login function above
// function Login() {
// -ka end
  return (
    <div>
       <>
    <div className='loginForm'>
      
      <h2>Login</h2>
      <h4>Login now to embark in a joy ride  </h4>
      <div className='container'>
        <div>
          {/* -ka added onSubmit below 3/14 */}
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Username</label>
              {/* -ka added value and onChange below 3/14 */}
              {/* -ka changed type from text to username and added name=username 3/14 */}
              <input type="username" name="username" className="form-control col-4" id="formGroupExampleInput" placeholder="Username" value={formState.username} onChange={handleChange} />
              {/* <label htmlFor="exampleInputusername">Username</label>
              <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="usernamelHelp" placeholder="Username" /> */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                {/* -ka added value and onChange and name=password below 3/14 */}
                <input type="password" name="password" className="form-control  col-4" id="exampleInputPassword1" placeholder="Password" value={formState.password} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg">submit</button>
              <h3 className='h3'>Don't have an account?</h3>
              <h3 className='h3'>Sign Up instead</h3>
              
              <h2  className="btn btn-primary stretched-link"><a href="./SignupForm">Sign Up</a></h2>
              
              {/* <button href="#SignupForm" type="submit" className="btn btn-secondary btn-lg">Sing Up</button> */}

              {/* <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '} */}
            </div>
          </form>
          {/* -ka added div containing failure msg */}
          {error && <div>Login failed</div>}
          {/* -ka end */}
        </div >
      </div>
    </div>
    
    </>
    </div>
  )
}

export default Login