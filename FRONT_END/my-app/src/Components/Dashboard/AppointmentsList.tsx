import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faXmark, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import '../ComponentStyles/appList.css'
import { Link } from 'react-router-dom';

const AppointmentsList = () =>{



    return (
        <>
        <h3>Assessments</h3>
        <div className="info-box">
            <ul>
            <li> <Link to= "/a1"> What kind of cheese are you?</Link> </li> 
            <li> <Link to= "/a1"> What kind of cheese are you?</Link> </li>
            <li> <Link to= "/a1"> What kind of cheese are you?</Link> </li>
            <li> <Link to= "/a2"> Career Matcher Survey</Link> </li>
            <li></li>
            </ul>
        </div>
            
        </>
    )
}

export default AppointmentsList;