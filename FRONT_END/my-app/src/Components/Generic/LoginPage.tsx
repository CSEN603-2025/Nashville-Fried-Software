import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import '../ComponentStyles/LoginPage.css'
const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        // Add login/auth logic here
        navigate('/dashboard'); // route to dashboard
      };

    const handleClick = (e) =>{
        navigate('/registerCompany')
    }



    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Welcome to SCADtopia!</h1>
            <div className="container">
                <label htmlFor="Email"> Email</label> <input type="text" name="Email" id="" required />
                <label htmlFor="Password"> Password</label> <input type="text" name="Password" id=""  required/>
                <button type="submit">Login</button>
            </div>
        </form>
        <button className="register-btn" onClick={handleClick}> New Company? Click here to register</button>
        </>

    )
}

export default LoginPage