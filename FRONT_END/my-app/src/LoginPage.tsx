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
            case "scad": navigate('/scadDashboard'); setErr(false); break;
            case "company": navigate('/companyDashboard'); setErr(false); break;
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
        <>
        <form onSubmit={handleSubmit}>
            <h1>Welcome to SCADtopia!</h1>
            <div className="container">
                {err && <div>ERROR ERROR ERROR</div>}
                <label htmlFor="Email"> Email</label> <input type="text" name="Email" id="" required onChange={handleChange} />
                <label htmlFor="Password"> Password</label> <input type="text" name="Password" id=""  required/>
                <button type="submit">Login</button>
            </div>
        </form>
        <button className="register-btn" onClick={handleClick}> New Company? Click here to register</button>
        </>

    )
}

export default LoginPage