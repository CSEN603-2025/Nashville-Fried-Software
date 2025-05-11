import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';

interface SCADStatsProps {
    scad: boolean;
  }
const SideBar: React.FC<SCADStatsProps> = ({ scad }) =>
{
    return (
            <div className="link-container">
                <h2>Welcome, SCAD</h2>
                {scad ? <Link to="/scaddashboard">Dashboard</Link> : <Link to="/facultydashboard">Dashboard</Link>}
                {scad && (<Link to="/Students">Students</Link>)}
                {scad && (<Link to="/CompanySCAD">Companies</Link>)}
                {scad && (<Link to="/WorkshopSCAD">Workshops</Link>)}
                {scad ? <Link to="/ReportSCAD">Reports</Link> : <Link to="/ReportFaculty">Reports</Link>}
                {scad && (<Link to="/Internshipscad">Available Internships</Link>)}

                <span className="scadtopia dashboard-span">SCADtopia</span>
            </div>
    )
}

export default SideBar;