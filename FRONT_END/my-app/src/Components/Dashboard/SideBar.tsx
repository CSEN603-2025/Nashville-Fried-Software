import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';
function SideBar()
{
    return (
            <div className="link-container">
                <h2>Welcome, Student</h2>
                <Link to="/profile">My Profile</Link>
                <Link to="/internships">Internships</Link>
                <Link to="/evals">Internship Evaluation</Link>
                <Link to="/reports">Reports</Link>
            </div>
    )
}

export default SideBar;