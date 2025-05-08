import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';
function SideBar()
{
    return (
            <div className="link-container">
                <h2>Welcome, Student</h2>
                <Link to="/Profile">My Profile</Link>
                <Link to="/Internships">Internships</Link>
                <Link to="/Evaluation">Internship Evaluation</Link>
                <Link to="/Report">Reports</Link>
            </div>
    )
}

export default SideBar;