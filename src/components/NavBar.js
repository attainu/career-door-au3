import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div className="container">
            <NavLink to="/" className="navbar-brand" href="#">
              <img
                src="https://www.careerdoor.com/Portals/2/CareerDoorLogo.png?ver=2018-01-21-221148-533"
                className="img-responsive"
                alt=""
                height="45"
                width="40"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/profile" className="nav-link" href="#">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    to="/jobs"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Jobs
                  </NavLink>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <NavLink to="/profile/resume" className="dropdown-item" href="#">
                      Resume
                    </NavLink>
                    <NavLink
                      to="/jobs/private"
                      className="dropdown-item"
                      href="#"
                    >
                      Private Jobs
                    </NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink
                      to="/jobs/freelancing"
                      className="dropdown-item"
                      href="#"
                    >
                      Free Lancing
                    </NavLink>
                  </div>
                </li>
              </ul>
              <span className="navbar-text white-text">
                <NavLink to="/Sign-In" className="nav-link">
                  SignIn
                </NavLink>
              </span>
              <span className="navbar-text white-text">
                <NavLink to="/EditProfile" className="nav-link">
                  Edit Profile 
                </NavLink>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
