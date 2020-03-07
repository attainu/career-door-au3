import React from "react";
import jwt_decode from "jwt-decode";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import My404 from "./components/My404";
import { setAuthToken, setCurrentUser } from "./redux/actions/loginAction";

import store from "./redux/store";

import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";
import profile from "./components/profile/Profie";
import Home from "./components/Home/Home";
import Fileuploadtest from "./components/profile/Fileuploadtest";
import AddReview from "./components/Addreview/Addreview";
import ViewReview from "./components/viewReview/ViewReview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect, useSelector } from "react-redux";

function App(props) {
  //  useEffect(() => {
  //    console.lo
  //  });

  // check for token
  if (localStorage.careerDoor) {
    // set Auth token to header
    setAuthToken(localStorage.careerDoor);
    // decode token and get user info
    const decode = jwt_decode(localStorage.careerDoor);
    // set user and isAuthenticated
    store.dispatch(setCurrentUser(decode));
  }

  const isAuthonticated = useSelector(
    item => item.loggedInReducer.isAuthenticated
  );

  console.log("isAuthonticated : ", isAuthonticated);

  // const auth = props.isAuthentication;
  // console.log(props.loggedIn);
  // console.log(auth);
  return (
    <Router>
      {isAuthonticated ? (
        <div className="app">
          <NavBar data={isAuthonticated} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Fileuploadtest} />
            <Route path="/Home" component={Home} />
            <Route path="/AddReview" component={AddReview} />
            <Route path="/viewReview" component={ViewReview} />
            <Route path="*" component={My404} />
          </Switch>
          <Footer />
        </div>
      ) : (
        <div className="app">
          <NavBar data={isAuthonticated} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signIn" component={Login} />
          <Route path="/signUp" component={SignUp} />
          </Switch>
           <Footer />
        </div>
      )}
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedInReducer.isAuthonticated,
    isAuthentication: state.loggedInReducer.isAuthonticated
  };
};

export default connect(mapStateToProps)(App);
