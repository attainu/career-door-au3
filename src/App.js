import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import My404 from './components/My404';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
          
         
          <Switch>

            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="*" component={My404} />
          </Switch>
          <Footer/>
        </Router>
        
  );
}

export default App;
