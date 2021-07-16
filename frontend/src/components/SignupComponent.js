import React from "react";
import { Link } from "react-router-dom";

function SignupComponent(props) {
  const {
    setName,
    setEmail,
    setContactNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSignup,
  } = props;
  return (
    <div id="signup">
      <div className="my-container">
        <div className="content">
          <div className="inside">
            <h1>Signup</h1>
            <p>
              Welcome to the task management app. Register for creating the
              account and start managing your tasks.
            </p>
            <p>
              Already a user?{" "}
              <span>
                <Link id="link" to="/">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="content">
          <div className="inside">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  id="exampleName"
                  placeholder="with a placeholder"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contact"
                  pattern="[0-9]{10}"
                  id="exampleContact"
                  placeholder="with a placeholder"
                  className="form-control"
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
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
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="password placeholder"
                  className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={true}
                />
              </div>
              <div className="button">
                <button type="button" className="btn " onClick={onSignup}>
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
