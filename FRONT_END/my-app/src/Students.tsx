import React, { useState } from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx';
import styles from './Styles/Students.module.css';
import { replace } from "react-router-dom";
import linkIcon from './assets/linkIcon.svg'
import {useNavigate} from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import currentInterns from './currentInterns.json'



const Students = () => {
    const navigator = useNavigate()
    const [statusFilter, setStatusFilter] = useState('-1')
    const [studentsList, setStudentsList] = useState(currentInterns);

    const replyTo = (index: number) => {
        setStudentsList(prevList => {
            const updatedList = [...prevList]; // Create a copy of the current list
            updatedList[index] = { ...updatedList[index], replied: true }; // Update the 'replied' field to true
            return updatedList; // Return the updated list
          });
    }


  return (
    <div className={styles["cntnr"]}>
      <SideBar scad={true}/>
      <div className={styles['main-display']}>
      <div className={styles['header-row']}>
        <h1 className={styles['page-title']}>Students</h1>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={styles['duration-filter']}
        >
          <option value="-1">All Statuses</option>
          <option value="0">0 months</option>
          <option value="1">1 month</option>
          <option value="2">2 months</option>
          <option value="3">3 months</option>
        </select>
      </div>
        <div className={styles['student-list']}>
          {studentsList.filter(student => (parseInt(statusFilter) == -1 || student.monthsCompleted == parseInt(statusFilter))).map((student, idx) => (
            <div className={styles['student-card']} key={idx}>
              <div className={styles['student-info']}>
                <div className={styles['student-name-container']}>
                    <h3 className={styles['student-name']}>{student.name}</h3>
                    {student.pro && (
                    <div className={styles['pro-badge-container']}>
                        <span className={styles['pro-text']}>PRO</span>
                    </div>
                    )}
                    <button className={styles["profile-btn"]} onClick={() => {navigator(`/ViewStudent/${idx}`)}}>
                      <img src={linkIcon} className={styles['link-icon']} />
                    </button>
                </div>
                <p className={styles['student-detail']}>Age: {student.age}</p>
                <p className={styles['student-detail']}>Major: {student.major}</p>
                <div className={styles['interests-row']}>
                  <p className={styles['interests-title']}>Job Interests:</p>
                  <div className={styles['interests-list']}>
                    {student.jobInterests.map((interest, i) => (
                      <span className={styles['interest-pill']} key={i}>{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles['internship-status']}>
                <p id={styles['status-title']}>Internship Status</p>
                <div className={styles['progress-circle']}>
                  <CircularProgressbar
                    value={student.monthsCompleted/3 * 100}
                    text={`${student.monthsCompleted}/3`}
                    styles={buildStyles({
                      pathColor: '#00bcd4',
                      textColor: '#00bcd4',
                      trailColor: '#eee',
                    })}
                  />
                </div>
              </div>
              <div className={styles['actions-placeholder']}>
                {student.pro && (<div className={styles['actions']}>
                    {student.requested && !student.replied && (<button onClick= {() => {replyTo(idx)}} className={styles['accept-btn']}>Accept appointment</button>)}
                    {student.requested && !student.replied && (<button onClick= {() => {replyTo(idx)}} className={styles['reject-btn']}>Reject appointment</button>)}
                    {student.requested && student.replied && (<button onClick= {() => {replyTo(idx)}} className={styles['replied-btn']}>Response sent</button>)}
                    {!student.requested && !student.replied && (<button onClick= {() => {replyTo(idx)}} className={styles['request-btn']}>Request appointment</button>)}
                    {!student.requested && student.replied && (<button onClick= {() => {replyTo(idx)}} className={styles['requested-btn']}>Request sent</button>)}
                </div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
