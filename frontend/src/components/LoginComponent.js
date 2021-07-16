import React from "react";
import {Link} from 'react-router-dom'
function LoginComponent(props) {
  const{setEmail,setPassword,onLogin}=props
  return (
    <div id="login">
      <div className="my-container">
        <div className="content">
          <div className="inside">
              <h1>Login</h1>
            <p>
              Welcome to the task management app. Please login to manage your
              tasks.
            </p>
            <p >If you are a new user, please <span ><Link id='link' to="/signup">Signup</Link></span></p>
          </div>
        </div>
        <div className="content">
          <div className="inside">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                  className="form-control"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                  className="form-control"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div className="button">
                <button type="button" className="btn" onClick={onLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
