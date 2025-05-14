import React, { useState } from "react";
import SideBar from './Components/Dashboard/SideBar'
import Suggested from './Components/Dashboard/Suggested';
import Notifications from './Components/Dashboard/Notifications'
import CallBanner from "./Components/Dashboard/CallBanner";
import ProCard from "./Components/Dashboard/ProCard";
import './Styles/Dashboard.css'
const DashboardStudent = ({pro}) =>{
    const [notifications, setNotifications] = useState([]);
    return (
    <div className="cntnr">
        <SideBar active="Dashboard" pro= {pro}/>
        <div className="main-display">
            {pro && <CallBanner onMissedCall={(msg) => setNotifications((prev) => [...prev, msg])}/>}
            <div className="two-cards">
                <ProCard pro= {pro ?  true: false}/>
                <Suggested/>
            </div>
            <div className="one-card">
               <Notifications notifications ={notifications} pro = {pro? true : false}/>
            </div>
            
        </div>

    </div>

)
}

export default DashboardStudent;