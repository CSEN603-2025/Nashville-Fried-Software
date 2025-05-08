import React, { useState } from "react";
import react from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx'
import Stats from './Components/Dashboard/SCADStats.tsx'

import './Styles/Dashboard.css'
const DashboardStudent = () =>{
    const [notifications, setNotifications] = useState([]);
    return (
    <div className="cntnr">
        <SideBar/>
        <div className='main-display'>
            <Stats/>
        </div>

    </div>

)
}

export default DashboardStudent;