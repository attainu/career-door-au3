import React from 'react';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import My404 from './components/My404';
import Footer from './components/footer/FooterK';
import NavBar from './components/NavBar';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import Homepage from './components/Homepage/Homepage';
import AddReview from './components/AddReview/AddReview'
import Salary from './components/displaySalary/salary'
import Review from './components/displayReview/review'
import SearchResult from './components/Homepage/searchresults'
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
            <Route path='/Homepage' component={Homepage}/>
            <Route path='/AddReview' component={AddReview} />
            <Route path='/Review' component={Review}/>
            <Route path='/salary' component={Salary}/>
            <Route path="/searchresult" component={SearchResult} />

            <Route path="*" component={My404} />
          </Switch>
          
          <Footer/>
        </Router>
        
  );
}

export default App;
