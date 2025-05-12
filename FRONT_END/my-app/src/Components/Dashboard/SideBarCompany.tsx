import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';
function SideBar({active} : {active:string})
{
    return (
            <div className="link-container">
                <h2>Welcome, Company</h2>
                <Link className={active == 'Dashboard' ? 'active-link' : 'link'} to="/company">My Profile</Link>
                <Link className={active == 'Internships' ? 'active-link' : 'link'} to="/Applications">Internships</Link>
                <Link className={active == 'Evaluations' ? 'active-link' : 'link'} to="/evaluateIntern">Internship Evaluation</Link>
                <span className="scadtopia dashboard-span">SCADtopia</span>
            </div>
    )
}

export default SideBar;