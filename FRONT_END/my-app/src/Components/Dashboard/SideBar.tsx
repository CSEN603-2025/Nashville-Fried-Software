
import React, { useState } from "react";
import "../ComponentStyles/Sidebar.css";
import { Link } from "react-router-dom";
function SideBar({active, pro} : {active:string, pro:boolean}) {
  return (
    <div className="link-container">
      <h2>Welcome, Student</h2>

      <Link className={active == 'Dashboard' ? 'active-link' : 'link'} to={pro ? "/dashboardPRO" : "/dashboard"}>Dashboard</Link>
      <Link className={active == 'Profile' ? 'active-link' : 'link'} to={pro ? "/ProfilePro" : "/Profile"}>My Profile</Link>
      <Link className={active == 'Internships' ? 'active-link' : 'link'} to={ pro ? "/InternshipsPro": "/Internships"}>Internships</Link>
      <Link className={active == 'Evaluations' ? 'active-link' : 'link'} to={ pro ? "/EvaluatePro": "/Evaluate"}>Internship Evaluation</Link>
      <Link className={active == 'Reports' ? 'active-link' : 'link'}  to={ pro ? "/ReportPro": "/Report"}>Reports</Link>
      <span className="scadtopia dashboard-span">SCADtopia</span>
    </div>
  );
}

export default SideBar;
