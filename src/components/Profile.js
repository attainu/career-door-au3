import React from 'react';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './profilecss.css';
import Main from './profile/Main';
import Sidenavigationbar from './Sidenavigationbar'
 const Profile = () =>{
     
     return(
         <div>
      <Sidenavigationbar/>
<div className="display-profile-elements" >
<Router>
<Switch>
    <Route  exact path='/profile' component={Main} />
   
</Switch>
</Router>
</div>
</div>
         
     );

 }
 export default Profile