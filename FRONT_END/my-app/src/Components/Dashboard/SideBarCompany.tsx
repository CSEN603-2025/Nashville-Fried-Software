import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';
function SideBar()
{
    return (
            <div className="link-container">
                <h2>Welcome, Company</h2>
                <Link to="/company">My Profile</Link>
                <Link to="/Applications">Internships</Link>
                <Link to="/evaluateIntern">Internship Evaluation</Link>
                <Link to="/companyreports">Reports</Link>

                <span className="scadtopia dashboard-span">SCADtopia</span>
            </div>
    )
}

export default SideBar;