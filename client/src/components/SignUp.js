import React from "react";
import "./signupcss.css";
import useSignUpForm from "./customhook";
import { addUser } from "../url";
import { useAlert } from "react-alert";
const SignUp = props => {
  const alert = useAlert();
  const signup = () => {
    //callback function onsubmit of form
    if (inputs.password !== inputs.confirm_password) {
      alert.error("Passwords Doesn't match");
    } else {
      addUser(inputs).then(data => {
        if (!data.success) {
          alert.error(data.message);
        } else {
          props.history.push("/signIn");
        }
      });
    }
  };

  const formStyle = {
    marginTop: "-36px"
  };

  //calling the hooks from customhook file
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      user_type: "",
      company_name: "",
      password: "",
      confirm_password: ""
    },
    signup
  );

  return (
    <div>
      <div className="container">
        <form
          className="form-horizontal"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h3 className="text-center">Sign Up</h3>
          <hr />
          <div className="form-group">
            <label htmlFor="firstName" className="col-sm-3 control-label">
              <b>First Name</b>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                name="first_name"
                minLength="2"
                maxLength="10"
                onChange={handleInputChange}
                value={inputs.firstName}
                required
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="lastName" className="col-sm-3 control-label">
              <b>Last Name</b>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="last_name"
                placeholder="Last Name"
                className="form-control"
                name="last_name"
                onChange={handleInputChange}
                value={inputs.lastName}
                required
                autoFocus
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label">
              <b>Email</b>
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                required
              />
            </div>
          </div>
          <br />
          <br />
          <div
            className="form-group"
            onChange={handleInputChange}
            value={inputs.user_type}
          >
            <label htmlFor="usertype" className="col-sm-3 control-label">
              <b>Are You?</b>
            </label>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline1"
                name="user_type"
                className="custom-control-input"
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline1"
              >
                JobSeeker
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="customRadioInline2"
                className="custom-control-input"
                name="user_type"
              />
              <label
                className="custom-control-label"
                htmlFor="customRadioInline2"
              >
                Employer
              </label>
            </div>
          </div>
          <br />
          <div className="form-group" style={formStyle}>
            <label htmlFor="Company" className="col-sm-3 control-label">
              <b>Company</b>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                placeholder="enter your company name"
                className="form-control"
                name="company_name"
                onChange={handleInputChange}
                value={inputs.company_name}
                required
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="password" className="col-sm-3 control-label">
              <b> Password</b>
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                name="password"
                onChange={handleInputChange}
                value={inputs.password}
                required
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="password" className="col-sm-3 control-label">
              <b>ConfirmPassword</b>
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                name="confirm_password"
                onChange={handleInputChange}
                value={inputs.confirm_password}
                required
              />
            </div>
          </div>
          <br />
          <div className="form-group mx-auto my-2">
            <button type="submit" className="btn btn-primary btn-sm btn-block">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
