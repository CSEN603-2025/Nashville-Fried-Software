import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        // Add login/auth logic here
        const form = e.currentTarget;
        const email = (form.elements.namedItem('Email') as HTMLInputElement).value.trim();
        const password = (form.elements.namedItem('Password') as HTMLInputElement).value;
        if(email == '1') navigate('/dashboard'); // route to dashboard
        if(email == '2') navigate('/scaddashboard'); // route to dashboard
        if(email == '3') navigate('/facultydashboard'); // route to dashboard
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