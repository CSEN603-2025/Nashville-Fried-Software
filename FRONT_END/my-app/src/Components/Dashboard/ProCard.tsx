import React, {useState} from 'react';
import '../ComponentStyles/ProCard.css'
import Workshops from './Workshops.tsx';
import AppointmentsList from './AppointmentsList.tsx';


const ProCard = () =>{
    const [currView, setCurrView] = useState(0);
    const handleClick = () => {
        currView === 0 ? setCurrView(1) : setCurrView(0);
    }

    return (
        <div className="card-container">
        <button onClick = {handleClick} className="switch">Switch View</button>
           {currView === 1 && <Workshops/>}
           {currView === 0 && <AppointmentsList/>}
        </div>
    )
}

export default ProCard;

