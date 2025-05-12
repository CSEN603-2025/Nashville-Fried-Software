import React, {useState} from 'react';
import "../ComponentStyles/Sidebar.css"
import { Link } from 'react-router-dom';

interface SCADStatsProps {
    scad: boolean;
    active: string
  }
const SideBar: React.FC<SCADStatsProps> = ({ scad, active }) =>
{
    return (
            <div className="link-container">
                <h2>Welcome, SCAD</h2>
                {scad ? <Link className={active == 'Dashboard' ? 'active-link' : 'link'} to="/scaddashboard">Dashboard</Link> : <Link to="/facultydashboard">Dashboard</Link>}
                {scad && (<Link className={active == 'Students' ? 'active-link' : 'link'} to="/Students">Students</Link>)}
                {scad && (<Link className={active == 'Companies' ? 'active-link' : 'link'} to="/CompanySCAD">Companies</Link>)}
                {scad && (<Link className={active == 'Workshops' ? 'active-link' : 'link'} to="/WorkshopSCAD">Workshops</Link>)}
                {scad ? <Link className={active == 'Reports' ? 'active-link' : 'link'} to="/ReportSCAD">Reports</Link> : <Link to="/ReportFaculty">Reports</Link>}
                {scad && (<Link className={active == 'Internships' ? 'active-link' : 'link'} to="/Internshipscad">Available Internships</Link>)}

                <span className="scadtopia dashboard-span">SCADtopia</span>
            </div>
    )
}

export default SideBar;