import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <Fragment>
      <footer className="page-footer font-small bg-dark pt-4 mt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase text-light">About Our Company</h5>
              <p className="text-light">
                CareerDoor Inc. has partnered time after time with nearly two
                hundred companies across globe by providing innovative and
                successful results-oriented recruitment services. Our penchant
                for forging relationships with technology professionals across
                the country and our talent for developing new and effective
                recruitment models to introduce this talent to Employers has
                given rise to a deserved reputation for success in global
                recruitment marketing.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-light">Get In touch</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 text-light">
          © 2020 Copyright:Only for Education Purposes
          <NavLink to="/"> CareerDoor</NavLink>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
