import React from "react";
import { NavLink } from "react-router-dom";
import SignedIn from "./signedIn";
import SignedOut from "./signedOut";
const NavBar = props => {
  const data = props.data;
  console.log("Navbar Props  : ", props);
  console.log("Navbar File : ", data);
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
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
                  <NavLink to="/AddReview" className="nav-link" href="#">
                    AddReview
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/viewReview" className="nav-link" href="#">
                    viewReview
                  </NavLink>
                </li>
              </ul>
              {data ? <SignedIn /> : <SignedOut />}
              {/* <span className="navbar-text white-text">
                <NavLink to="/signIn" className="nav-link">
                  SignIn
                </NavLink>
              </span> */}
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
