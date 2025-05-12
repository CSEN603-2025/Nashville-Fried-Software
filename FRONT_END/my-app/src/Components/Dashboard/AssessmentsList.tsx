import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faXmark, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import '../ComponentStyles/appList.css'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const AssessmentList = () =>{
    return (
        <>
        <h3>Assessments</h3>
        <div className="info-box">
            <ul>
            <li> <Link to= "/Assessments"> Software Engineering Trivia</Link> </li>
            <li></li>
            </ul>
        </div>
            
        </>
    )
}

export default AssessmentList;