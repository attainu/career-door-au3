import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import My404 from './components/My404';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
          <Link className="navbar-brand" to={"/sign-in"} >Career Door</Link>
         
          <Switch>

            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="*" component={My404} />
          </Switch>
        
        </Router>
  );
}

export default App;
