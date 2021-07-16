import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavbarComponent() {
  const history = useHistory()
  const onLogout = () => {
    sessionStorage.removeItem("token");
    history.push("/");
  };
  return (
    <div id="navbar">
      <div className="left-section-navbar">
        <div>
          <h3>Task Management App</h3>
        </div>
        <div className="home">
          <Link to="/home" className="link">
            Home
          </Link>
        </div>
      </div>

      <div className="right-section-navbar">
        <div className="profile">
          <Link to="/user/profile" className="link">
            Profile
          </Link>
        </div>
        <div className="logout">
          <button className="btn btn-danger" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
