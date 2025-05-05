import React, { useState } from "react";
import react from "react";
import SideBar from './Components/Dashboard/SideBar.tsx'
import Workshops from './Components/Dashboard/Workshops.tsx'
import Suggested from './Components/Dashboard/Suggested.tsx';
import Notifications from './Components/Dashboard/Notifications.tsx'
import CallBanner from "./Components/Dashboard/CallBanner.tsx";
import ProCard from "./Components/Dashboard/ProCard.tsx";
import './Styles/Dashboard.css'
const DashboardStudent = () =>{
    const [notifications, setNotifications] = useState([]);
    return (
    <div className="cntnr">
        <SideBar/>
        <div className="main-display">
            <CallBanner onMissedCall={(msg) => setNotifications((prev) => [...prev, msg])}/>
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

export default DashboardStudent;