import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import My404 from './components/My404';
import Footer from './components/FooterK';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path='/profile' component={Profile} />
            <Route path='/EditProfile' component={EditProfile}/>
            <Route path="*" component={My404} />
          </Switch>
          <Footer/>
        </Router>
        
  );
}

export default App;
