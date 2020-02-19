import React from 'react';
import 'C:/Users/PARESH/Desktop/career-door-au3/src/components/signupcss.css';
import useSignUpForm from './customhook';
import { Link } from "react-router-dom";


const SignUp = () => {
    const signup = () => {                                      //callback function onsubmit of form
        alert(`User Created! 
    Name: ${inputs.firstName} ${inputs.lastName}
    Email: ${inputs.email}
    Gender:${inputs.gender}
    Company:${inputs.company}
    user_type:${inputs.user_type}
    Date of Birth:${inputs.dob}
    `);
      }
  
      //calling the hooks from customhook file
      const {inputs, handleInputChange, handleSubmit} = useSignUpForm({firstName: '', lastName: '', email: '', gender:'',user_type:'', company:'',confirmpassword:'',dob:'', password: ''}, signup);
    return(
        <div>
            <Link className="navbar-brand" to={"/sign-in"} >Career Door</Link>

       <div className="container">
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlfor="firstName" className="col-sm-3 control-label">First Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="firstName" placeholder="First Name" className="form-control"name="firstName" onChange={handleInputChange} value={inputs.firstName} required autoFocus />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlfor="lastName" className="col-sm-3 control-label">Last Name</label>
                    <div className="col-sm-9">
                        <input type="text" id="lastName" placeholder="Last Name" className="form-control" name="lastName" onChange={handleInputChange} value={inputs.lastName} required autoFocus />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlfor="email" className="col-sm-3 control-label">Email* </label>
                    <div className="col-sm-9">
                        <input type="email" id="email" placeholder="Email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  name="email" onChange={handleInputChange} value={inputs.email} required />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlfor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
                    <div className="col-sm-9">
                        <input type="date" id="birthDate" className="form-control" name="dob" value={inputs.dob} onChange={handleInputChange} required/>
                    </div>
                </div>
               
               <div className="form-group" onChange={handleInputChange} value={inputs.user_type}>
                    <label className="control-label col-sm-3">User type</label>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio"  value="Employee" name="user_type"/>Employee
                                </label>
                            </div>
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio"  value="Employer" name="user_type"/>Employer
                                </label>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="form-group">
                        <label htmlfor="Company" className="col-sm-3 control-label">Company</label>
                    <div className="col-sm-9">
                        <input type="text"  placeholder="enter your company name" className="form-control" name="company" onChange={handleInputChange} value={inputs.company}  required />
                    </div>
                </div>
                 
                <div className="form-group" onChange={handleInputChange}  value={inputs.gender} required>
                    <label className="control-label col-sm-3">Gender</label>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio"  onChange={handleInputChange} name="gender" value="Female"/>Female
                                </label>
                            </div>
                            <div className="col-sm-4">
                                <label className="radio-inline">
                                    <input type="radio"  onChange={handleInputChange} name="gender" value="Male" />Male
                                </label>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className="form-group">
                    <label htmlfor="password" className="col-sm-3 control-label">Password*</label>
                    <div className="col-sm-9">
                        <input type="password" id="password" placeholder="Password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  name="password" onChange={handleInputChange} value={inputs.password} required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlfor="password" className="col-sm-3 control-label">Confirm Password*</label>
                    <div className="col-sm-9">
                        <input type="password"  placeholder="Password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="confirmpassword" onChange={handleInputChange}  value={inputs.confirmpassword}  required />
                    </div>
                </div>
               
                <br/>
                <button type="submit" className="btn btn-primary  ">Register</button>
            </form> 
        </div> 
        






        </div>
            )
}
export default SignUp