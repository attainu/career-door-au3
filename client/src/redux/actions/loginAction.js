import axios from "axios";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./types";
import { useAlert } from "react-alert";
export const LoginAction = data => {
  return {
    type: "LOGIN_SUCCESS",
    data
  };
};

export const logoutAction = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};

// Register User

// Login - Get User Token

export const loginUser = userData => dispatch => {
  const url = "/api/user/loginUser";
  axios
    .post(url, userData)
    .then(res => {
      console.log(res);
      const { token } = res.data;
      console.log(token);
      // save token to localStorage
      localStorage.setItem("careerDoor", token);
      // Set token to Auth header
      setAuthToken(token);
      // decode jwt token
      const decoded = jwt_decode(token);
      console.log(decoded);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log("Errers"));
};

// set loggedin user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Logout user

export const logoutUser = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem("careerDoor");
  // remove auth header for future request
  setAuthToken(false);
  // set current user {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.replace("/signIn");
};

export const setAuthToken = token => {
  if (token) {
    // apply token to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
