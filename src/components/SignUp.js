import React from 'react';
import useSignUpForm from './customhook';

const SignUp = () => {
    const signup = () => {
      alert(`User Created! 
  Name: ${inputs.firstName} ${inputs.lastName}
  Email: ${inputs.email}
  Job Title:${inputs.jobtitle}
  Company:${inputs.company}
  type:${inputs.type}
  `);
    }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({firstName: '', lastName: '', email: '',jobtitle:'',type:'',company:'', password: ''}, signup);
    return(
<div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
<form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control"  placeholder="First name" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control"  placeholder="Last name" name="lastName" onChange={handleInputChange} value={inputs.lastName} required/>
                </div>
<br/>
                <label>Recruiter/Candidate</label><select onSelect={handleInputChange} name="type" required>
  <option value="Recruiter">Recruiter</option>
  <option value="Candidate" >Candidate</option>
  
</select> 

<br/>
<br/>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter email" name="email" onChange={handleInputChange} value={inputs.email} required/>
                </div>

                <div className="form-group">
                    <label>Job Title</label>
                    <input type="text" className="form-control" placeholder="Enter Job Title" name="jobtitle" onChange={handleInputChange} value={inputs.jobtitle} required/>
                </div>

                <div className="form-group">
                    <label>Company</label>
                    <input type="text" className="form-control" placeholder="Enter Company Name" name="company" onChange={handleInputChange} value={inputs.company} required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="atleast 1UC,1LC,min 8 characters" name="password" onChange={handleInputChange} value={inputs.password} required/>
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