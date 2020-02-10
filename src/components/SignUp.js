import React from 'react';
import useSignUpForm from './customhook';



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
<div className="form">
<form  onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control"  placeholder="First name" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control"  placeholder="Last name" name="lastName" onChange={handleInputChange} value={inputs.lastName} required/>
                </div>

                <label>User Type</label>
                <div>
                <select onChange={handleInputChange} name="user_type" value={inputs.user_type} required>
  <option value="Jobseeker">Employer</option>
  <option value="Employer">Employee</option>
</select> 
                </div>
                <br/>
               
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter email" name="email" onChange={handleInputChange} value={inputs.email} required/>
                </div>

                <label>Gender</label>
                <div>
                <select onChange={handleInputChange} name="gender" value={inputs.gender} required>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select> 
                </div>
               
<br/>
<div className="form-group">
                    <label>Company</label>
                    <input type="text" className="form-control" placeholder="Enter Company Name" name="company" onChange={handleInputChange} value={inputs.company}  required/>
                </div>
<div>
<label>Date of Birth</label>
<div>
<input type="date" name="dob" value={inputs.dob} onChange={handleInputChange} required/>
</div>
</div>
<br/>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="atleast 1UC,1LC,min 8 characters" name="password" onChange={handleInputChange} value={inputs.password} required/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="atleast 1UC,1LC,min 8 characters" name="confirmpassword" onChange={handleInputChange}  value={inputs.confirmpassword}  required/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
</div>

    )
}

export default SignUp