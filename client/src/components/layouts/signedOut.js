import React from "react";
import { NavLink } from "react-router-dom";
const SignedOut = props => {
  return (
    <React.Fragment>
      <span className="navbar-text white-text">
        <NavLink to="/signIn" className="nav-link">
          SignIn
        </NavLink>
      </span>
    </React.Fragment>
  );
};

export default SignedOut;
