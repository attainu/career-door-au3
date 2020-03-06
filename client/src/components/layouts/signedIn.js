import React from "react";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../redux/actions/loginAction";
import { connect } from "react-redux";

const SignedIn = props => {
  return (
    <span className="navbar-text white-text">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <NavLink
            to="/account"
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            My Account
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink to="/profile" className="dropdown-item">
              Profile
            </NavLink>
            <a onClick={props.logout} className="dropdown-item">
              Logout
            </a>
          </div>
        </li>
      </ul>
    </span>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(SignedIn);
