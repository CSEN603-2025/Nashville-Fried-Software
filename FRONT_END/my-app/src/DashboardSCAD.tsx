import React, { useState } from "react";
import react from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx'
import Stats from './Components/Dashboard/SCADStats.tsx'
import Notificationscad from './Components/Dashboard/Notificationscad.tsx'
import CallBanner from "./Components/Dashboard/CallBanner.tsx";
import styles from './Styles/DashboardSCAD.module.css'

const DashboardStudent = () =>{
    const [notifications, setNotifications] = useState([]);
    return (
    <div className={styles["cntnr"]}>
        <SideBar/>
        <div className={styles['main-display']}>
            <CallBanner onMissedCall={(msg) => setNotifications((prev) => [...prev, msg])}/>
            <Stats/>
            <div className={styles["one-card"]}>
                <Notificationscad notifications ={notifications}/>
            </div>
        </div>
    </div>

)
}

export default DashboardStudent;