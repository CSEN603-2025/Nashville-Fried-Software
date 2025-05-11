import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './Components/ComponentStyles/LoginPage.css'
import { fas } from '@fortawesome/free-solid-svg-icons';
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        // Add login/auth logic here
        switch(email){
            case "student":  navigate('/dashboard'); setErr(false); break;
            case "pro": navigate('/dashboardPRO');   setErr(false); break;
            case "scad": navigate('/scaddashboard'); setErr(false); break;
            case "company": navigate('/company'); setErr(false); break;
            case "faculty": navigate('/facultydashboard'); setErr(false); break;
            default: setErr(true);
        }
        
        // route to dashboard
      };

    const handleClick = (e) =>{
        navigate('/registerCompany')
    }

    const handleChange = (e) => {
        let input = e.target.value;
        setEmail(input);
    }



    return (
        <div className="bg">
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Welcome To <span className="scadtopia">SCADtopia!</span></h1>
            <div className="form-container">
                {err && <div className="login-err">ERROR INVALID USERNAME OR PASSWORD!</div>}
                <label className="login-field" htmlFor="Email"> Email</label> <input className="login-input" type="text" name="Email" id="" required onChange={handleChange} />
                <label htmlFor="Password" className="login-field"> Password</label> <input className="login-input" type="password" name="Password" id=""  required/>
                <button className="login-btn" type="submit">Login</button>
            </div>
        </form>
        <button className="register-btn" onClick={handleClick}> New Company? Click here to register</button>
        </div>

    )
}

export default LoginPage