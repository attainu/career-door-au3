import React from 'react';
import useSignUpForm from './customhook';
const Login=()=>{
    const login = () =>{
        alert(`${inputs.email}`)
    }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({email:'',password:''}, login);
    return(
<div>
<form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={handleInputChange} value={inputs.email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleInputChange} value={inputs.password}/>
                </div>

                
                

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                
                
            </form>
</div>
    )
}
export default Login