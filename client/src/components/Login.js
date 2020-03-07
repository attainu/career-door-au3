import React from "react";
import "../App.css";
import "./login.css";
import { loginAuth } from "../url";
import useSignUpForm from "./customhook";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/loginAction";
const Login = props => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const login = () => {
    // loginAuth(inputs).then(data => {
    //   if (!data.success) {
    //     alert.error(data.message);
    //     return;
    //   } else {
    //     let user = {
    //       token: data.success
    //     };
    //   }
    // });
    dispatch(loginUser(inputs));
    props.history.push("/profile");
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    { email: "", password: "" },
    login
  );
  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img src="img/logo.jpg" alt="logo" />
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">SignIn</h4>
                  <form
                    className="my-login-validation"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="email">E-Mail ID</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleInputChange}
                        value={inputs.email}
                        required
                        autoFocus
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={handleInputChange}
                        value={inputs.password}
                        required
                      />
                    </div>
                    <div className="form-group mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm btn-block"
                      >
                        SignIn
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Don't have an account? <a href="/signUp">Create One</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
