import React from 'react'
const styles = {
  width: {
    with: "50%"
  }

}
function Signup() {
  return (
    <><div className='signupForm'>
      <h2>Signup</h2>
      <h4>Signup now to embark in joy ride  </h4>
      <div className='container'>
        <div>
          <form >
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
            </div>
          </form>
        </div >
      </div>
    </div>
    </>


  )
}

export default Signup