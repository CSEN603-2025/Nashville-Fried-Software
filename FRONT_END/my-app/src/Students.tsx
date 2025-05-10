import React, { useState } from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx';
import styles from './Styles/Students.module.css';
import { replace } from "react-router-dom";
import proBadge from './assets/pro-badge.svg'
import {useNavigate} from 'react-router-dom'



const Students = () => {
    const navigator = useNavigate()
    const [studentsList, setStudentsList] = useState([
        { name: "Alice Johnson", age: 21, major: "Computer Science", monthsCompleted: 2, interests: ["AI", "Web Dev", "Cybersecurity"], requested: false, pro: true, replied: false},
        { name: "Bob Smith", age: 22, major: "Information Systems", monthsCompleted: 1, interests: ["Data Analysis", "Cloud"], requested: true, pro: false , replied: false},
        { name: "Carol Lee", age: 20, major: "Software Engineering", monthsCompleted: 3, interests: ["Mobile Dev", "Game Dev"], requested: false, pro: true , replied: false},
        { name: "David Kim", age: 23, major: "Data Science", monthsCompleted: 2, interests: ["Machine Learning", "AI", "Big Data"], requested: true, pro: true , replied: false},
        { name: "Emily Davis", age: 24, major: "Cybersecurity", monthsCompleted: 0, interests: ["Network Security", "Ethical Hacking"], requested: false, pro: false , replied: false},
        { name: "Frank Zhang", age: 22, major: "Software Engineering", monthsCompleted: 1, interests: ["Frontend Dev", "UI/UX"], requested: true, pro: false , replied: false},
    ]);

    const replyTo = (index: number) => {
        setStudentsList(prevList => {
            const updatedList = [...prevList]; // Create a copy of the current list
            updatedList[index] = { ...updatedList[index], replied: true }; // Update the 'replied' field to true
            return updatedList; // Return the updated list
          });
    }


  return (
    <div className={styles["cntnr"]}>
      <SideBar />
      <div className={styles['main-display']}>
        <h1 className={styles['page-title']}>Students</h1>
        <div className={styles['student-list']}>
          {studentsList.map((student, idx) => (
            <div className={styles['student-card']} key={idx}>
              <div className={styles['student-info']}>
                <div className={styles['student-name-container']}>
                    <p className={styles['student-name']}><strong>{student.name}</strong></p>
                    {student.pro && (
                    <div className={styles['pro-badge-container']}>
                        <img src={proBadge} alt="PRO Badge" className={styles['pro-badge']} />
                        <span className={styles['pro-text']}>PRO</span>
                    </div>
                    )}
                    <button className="profile-btn" onClick={() => {navigator('/profile')}}>Go to profile</button>
                </div>
                <p className={styles['student-detail']}>Age: {student.age}</p>
                <p className={styles['student-detail']}>Major: {student.major}</p>
                <div className={styles['interests-row']}>
                  <p className={styles['interests-title']}>Job Interests:</p>
                  <div className={styles['interests-list']}>
                    {student.interests.map((interest, i) => (
                      <span className={styles['interest-pill']} key={i}>{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles['internship-status']}>
                <p className={styles['status-title']}>Internship Status</p>
                <div
                  className={styles['progress-circle']}
                  style={{
                    background: `conic-gradient(#cba0db ${student.monthsCompleted / 3 * 100}%, #e0e0e0 0)`
                  }}
                >
                  <span>{student.monthsCompleted}/3</span>
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
