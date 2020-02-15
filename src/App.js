import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import My404 from './components/My404';
import Footer from './components/FooterK';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from './components/profile/Resume';
import KeySkills from './components/profile/KeySkills';
import Employment from './components/profile/Employment';
import Education from './components/profile/Education';
import PersonalDetails from './components/profile/PersonalDetails';
import Projects from './components/profile/Projects';


function App() {
  return (
    <Router>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path='/profile' component={Profile} />
            <Route path='/profile/resume' component={Resume} />
    <Route  path='/profile/keySkills' component={KeySkills} />
    <Route  path='/profile/Employment' component={Employment}/>
    <Route  path='/profile/Education' component={Education} />
    <Route  path='/profile/Projects' component={Projects} />
    <Route  path='/profile/PersonalDetails' component={PersonalDetails} />
            <Route path="*" component={My404} />
          </Switch>
          <Footer/>
        </Router>
        
  );
}

export default App;
