import React, {useState} from 'react';
import '../ComponentStyles/ProCard.css'
import Workshops from './Workshops';
import AssessmentList from './AssessmentsList';
import lockIcon from '../../assets/lock.svg'


const ProCard = ( {pro}) =>{
    const [view, setView] = useState("assessments");

    return (
        <div className={pro ? "card-container" : "card-container"}>
  {pro ? (
          <>
              <div className="toggle-container">
              <button
                onClick={() => setView("assessments")}
                className={`toggle-option ${view === "assessments" ? "active" : "inactive"}`}
              >
                Assessments
              </button>
              <button
                onClick={() => setView("workshops")}
                className={`toggle-option ${view === "workshops" ? "active" : "inactive"}`}
              >
                Upcoming Workshops
              </button>
            </div>
            
            {view === "assessments" && <AssessmentList />}
            {view === "workshops" && <Workshops />}
        </>
  ) : (
    <>
      <div className='not-pro'>
        <div className='text-no'>
          <img src={lockIcon} className="lock-icon"/>
        <h2>Complete 3 months of Internships to access this feature!</h2>

        </div>

    </div>
    </>

  )}
</div>

    )
}

export default ProCard;

