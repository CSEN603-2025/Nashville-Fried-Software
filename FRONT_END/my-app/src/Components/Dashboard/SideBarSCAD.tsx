import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';
function SideBar()
{
    return (
            <div className="link-container">
                <h2>Welcome, SCAD</h2>
                <Link to="/Studentscad">Students</Link>
                <Link to="/Appointmentscad">Make Appointment</Link>
                <Link to="/Workshopscad">Workshops</Link>
                <Link to="/Reportscad">Reports</Link>
                <Link to="/Internshipsscad">Available Internships</Link>
            </div>
    )
}

export default SideBar;