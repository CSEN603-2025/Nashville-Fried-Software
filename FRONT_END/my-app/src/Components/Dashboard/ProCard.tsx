import React, {useState} from 'react';
import '../ComponentStyles/ProCard.css'
import Workshops from './Workshops';
import AssessmentList from './AssessmentsList';


const ProCard = ( {pro}) =>{
    const [currView, setCurrView] = useState(0);
    const handleClick = () => {
        currView === 0 ? setCurrView(1) : setCurrView(0);
    }

    return (
        <div className="card-container">
  {pro ? (
    <>
      <button onClick={handleClick} className="switch">Switch View</button>
      {currView === 1 && <Workshops />}
      {currView === 0 && <AssessmentList />}
    </>
  ) : (
    <>
    <div className="not-pro-bg">
        <div className="not-pro">
        <h2>Complete 3 months of Internships to access this feature!</h2>
        </div>
    </div>
    </>

  )}
</div>

    )
}

export default ProCard;

