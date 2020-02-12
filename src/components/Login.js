import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

import useSignUpForm from './customhook';
const Login=()=>{
    const login = () =>{
        alert(`${inputs.email}`)
    }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({email:'',password:''}, login);
    return(


<div id="login">
<Link className="navbar-brand" id="navlogin" to={"/sign-in"} >Career Door</Link>
        <h2 className="text-center text-white pt-5">Login form</h2>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post" onSubmit={handleSubmit}>
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">Email</label><br/>
                                <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={handleInputChange} value={inputs.email} />
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="password" className="form-control"placeholder="Enter password" name="password" onChange={handleInputChange} value={inputs.password} />
                            </div>
                            <div className="form-group">
                                
                                <input type="submit" name="submit" className="btn btn-info btn-md" value="submit"/>
                            </div>
                          
                        </form>
                        <br/>
                        <div id="register-link" className="text-right">
                                <a href="/sign-up" className="text-info">Register here</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    )
}
export default Login