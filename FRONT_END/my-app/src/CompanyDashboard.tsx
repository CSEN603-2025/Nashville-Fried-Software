import React, { useState } from "react";
import SideBarCompany from './Components/Dashboard/SideBarCompany'
import Suggested from './Components/Dashboard/Suggested';
import Notifications from './Components/Dashboard/NotificationsCompany'
import ProCard from "./Components/Dashboard/ProCard";
import './Styles/Dashboard.css'
const CompanyDashboard = () =>{
    const [notifications, setNotifications] = useState([]);
    
    return (
    <div className="cntnr">
        <SideBarCompany/>
        <div className="main-display">
            {/* <CallBanner onMissedCall={(msg) => setNotifications((prev) => [...prev, msg])}/> */}
            <div className="two-cards">
                <ProCard/>
                <Suggested/>
            </div>
            <div className="one-card">
               <Notifications notifications ={notifications}/>
            </div>
            
        </div>

    </div>

)
}

export default CompanyDashboard;