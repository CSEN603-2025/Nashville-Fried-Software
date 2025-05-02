import React from "react";
import react from "react";
import SideBar from './Components/Dashboard/SideBar.tsx'
import AppliedInternships from './Components/Dashboard/AppliedInternships.tsx'
import './Styles/Dashboard.css'
const DashboardStudent = () =>{

    return (
    <div className="cntnr">
        <SideBar/>
        <div className="main-display">
            <div className="two-cards">
                <AppliedInternships/>
                <AppliedInternships/>
            </div>
            <div className="one-card">
                <AppliedInternships/>
            </div>
            
        </div>

    </div>

)
}

export default DashboardStudent;