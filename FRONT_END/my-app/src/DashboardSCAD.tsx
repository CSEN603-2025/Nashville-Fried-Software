import React, { useState } from "react";
import react from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx'
import Stats from './Components/Dashboard/SCADStats.tsx'
import Notificationscad from './Components/Dashboard/Notificationscad.tsx'
import CallBanner from "./Components/Dashboard/CallBanner.tsx";
import styles from './Styles/DashboardSCAD.module.css'


interface SCADStatsProps {
    scad: boolean;
  }
const DashboardSCAD: React.FC<SCADStatsProps> = ({ scad }) =>{
    const [notifications, setNotifications] = useState([]);
    return (
    <div className={styles["cntnr"]}>
        <SideBar scad={scad}/>
        <div className={styles['main-display']}>
            {scad && (<CallBanner onMissedCall={(msg) => setNotifications((prev) => [...prev, msg])}/>)}
            <Stats scad={scad}/>
            {scad && (<div className={styles["one-card"]}>
                <Notificationscad notifications ={notifications}/>
            </div>)}
        </div>
    </div>

)
}

export default DashboardSCAD;