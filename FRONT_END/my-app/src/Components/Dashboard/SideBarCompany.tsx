import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';
function SideBar()
{
    return (
            <div className="link-container">
                <h2>Welcome, Company</h2>
                <Link to="/Profile">My Profile</Link>
                <Link to="/compints">Internships</Link>
                <Link to="/evalcompany">Internship Evaluation</Link>
                <Link to="/companyreports">Reports</Link>
            </div>
    )
}

export default SideBar;