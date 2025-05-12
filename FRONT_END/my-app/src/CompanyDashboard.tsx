import React, { useState } from "react";
import SideBarCompany from './Components/Dashboard/SideBarCompany'
import Suggested from './Components/Dashboard/Suggested';
import Notifications from './Components/Dashboard/NotificationsCompany'
import ProCard from "./Components/Dashboard/ProCard";
import CompanyInternshipPosts from "./Components/Dashboard/CompanyInternshipPosts";
import './Styles/Dashboard.css'
const CompanyDashboard = () =>{
    const [notifications, setNotifications] = useState([]);
    
    return (
    <div className="cntnr">
        <SideBarCompany active="Dashboard"/>
        <div className="main-display">
            {/* <CallBanner onMissedCall={(msg) => setNotifications((prev) => [...prev, msg])}/> */}
            <div className="one-card">
                <CompanyInternshipPosts CompanyName={"EduSpark Learning"}/>
            </div>
            <div className="one-card">
               <Notifications notifications ={notifications}/>
            </div>
            
        </div>

    </div>

)
}

export default CompanyDashboard;