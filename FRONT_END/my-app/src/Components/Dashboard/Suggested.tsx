import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faXmark, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import '../ComponentStyles/Suggested.css'
const Suggested = () =>{



    return (
        <>
        
        <div className="card-container">
        <h3>Suggested</h3>
            <ul>
            <li>Since you're MET, check out <span className="bolded">Etisalat</span></li> 
            <li>Tim Cheese, a colleague, endorses <span className="bolded">Microsoft</span></li>
            <li>Tim Cheese, a colleague, endorses <span className="bolded">Microsoft</span></li>
            <li></li>
            <li></li>
            </ul>
        </div>
            
        </>
    )
}

export default Suggested