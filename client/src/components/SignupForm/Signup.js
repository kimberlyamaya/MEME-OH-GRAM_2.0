// -ka added useState 3/14
import React, { useState } from 'react';
// -ka end
import { Button } from "react-bootstrap";

// -ka added 3/14
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth'
import { ADD_USER } from '../../utils/mutations'
// -ka end

// import Navbar from '../Navbar/Navbar'
// const styles = {
//   width: {
//     with: "50%"
//   }

// }
function Signup() {
  // -ka added 3/14
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [addUser, {error}] = useMutation(ADD_USER)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {
      const {data} = await addUser({
        variables: {...formState}
      })

      Auth.login(data.addUser.token)

      // window.location.assign(`/profile/${formState.username}`);

    } catch (err) {
      console.log(err)
    }

    // - ka added 3/20

    formState({
      username: "",
      email: "",
      password: ""
    })
  }
  // -ka end

  return (
    <>
    <div className='signupForm'>
      
      <h2>Signup</h2>
      <h4>Signup now to embark in joy ride  </h4>
      <div className='container'>
        <div>
          {/* -ka added onSumbit 3/14 */}
          <form onSubmit={handleFormSubmit}>
            {/* -ka end */}
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Username</label>
            {/* -ka added value=, onChange=, name=, changed type=text to type=username on 3/14 */}
            <input type="username" name="username" className="form-control col-4" placeholder="Username" value={formState.username} onChange={handleChange}/>
            {/* -ka end */}
              <div className="form-group ">
              <label htmlFor="exampleInputEmail1">Email address</label>
                {/* -ka added value=, onChange=, name=, on 3/14 */}
                <input type="email" name="email" className="form-control col-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formState.email} onChange={handleChange}/>
                {/* -ka end */}
              <label htmlFor="exampleInputPassword1">Password</label>
                {/* -ka added value=, onChange=, name=, on 3/14 */}
                <input type="password" name="password" className="form-control col-4" id="exampleInputPassword1" placeholder="Password" value={formState.password} onChange={handleChange}/>
                {/* -ka end */}
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