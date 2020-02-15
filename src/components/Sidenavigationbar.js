import React from 'react';
import { NavLink } from 'react-router-dom';
import './profilecss.css'


const SidenavigationBar=()=>{
    const style={
        textDecoration:"none"
    }
    return(
         
        <div className="profilenav">
<ul className="sidenavprofile">
   <NavLink  to='/profile/resume' style={style} ><li>Resume</li></NavLink> 
   <hr style={{width:"200px",display: "block"}}/>
   <NavLink style={style} to='/profile/keySkills'><li>KeySkills</li></NavLink>
   <hr style={{width:"200px",display: "block"}}/>
   <NavLink style={style} to='/profile/Employment'><li>Employment</li></NavLink>
   <hr style={{width:"200px",display: "block"}}/>
   <NavLink style={style} to='/profile/Education'><li>Education</li></NavLink>
   <hr style={{width:"200px",display: "block"}}/>
   <NavLink style={style} to='/profile/Projects'><li>Projects</li></NavLink>
   <hr style={{width:"200px",display: "block"}}/>
   <NavLink style={style} to='/profile/PersonalDetails'><li>PersonalDetails</li></NavLink>
   <hr style={{width:"200px",display: "block"}}/>
   
</ul>
</div>
    )
}
export default SidenavigationBar