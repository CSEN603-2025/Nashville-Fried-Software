import React, { useState } from "react";
import "../ComponentStyles/Sidebar.css";
import { Link } from "react-router-dom";
function SideBar({active} : {active:string}) {
  return (
    <div className="link-container">
      <h2>Welcome, Student</h2>

      <Link className={active == 'Dashboard' ? 'active-link' : 'link'} to="/dashboard">Dashboard</Link>
      <Link className={active == 'Profile' ? 'active-link' : 'link'} to="/Profile">My Profile</Link>
      <Link className={active == 'Internships' ? 'active-link' : 'link'} to="/Internships">Internships</Link>
      <Link className={active == 'Evaluations' ? 'active-link' : 'link'} to="/Evaluation">Internship Evaluation</Link>
      <Link className={active == 'Reports' ? 'active-link' : 'link'} to="/Report">Reports</Link>
      <span className="scadtopia dashboard-span">SCADtopia</span>
    </div>
  );
}

export default SideBar;
