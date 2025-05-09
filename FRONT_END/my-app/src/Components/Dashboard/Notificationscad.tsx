import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faXmark, faCheckDouble, faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../ComponentStyles/Notificationscad.module.css'
import { useNavigate } from 'react-router-dom';
const Notificationscad = ({notifications}) =>{
    
    const initial = notifications.map((msg) => ({ msg, read: false, isUrgent: false }));
    const navigate = useNavigate();
    const [ringing, setRinging] = useState(-1)
    const [allNotifs, setAllNotifs] = useState([
      ...initial,
      { msg: "✅ Johnny accepted your video call appointement", online: false, ringing:false },
      { msg: "✅ Pride and Prejudice accepted your video call appointement", online: true, ringing:false },
    ]);
    useEffect(() => {
        const newNotifs = notifications.map((msg) => ({ msg, read: false }));
        setAllNotifs((prev) => {
          // Filter out duplicates
          const existingMsgs = new Set(prev.map((n) => n.msg));
          const unique = newNotifs.filter((n) => !existingMsgs.has(n.msg));
          return [...unique, ...prev];
        });
      }, [notifications]);

    const handleCall = (index: number) =>{
      setAllNotifs((prev) =>
        prev.map((n, i) => (i === index ? { ...n, ringing: true } : n))
      );
      setTimeout(() => {
        navigate('/VideoCall')
      }, 3000)
    }
  
    return (
      <div className={styles["notifs"]}>
        <div className={styles["notif-header"]}>
          <h3 className={styles["h"]}>Notifications</h3>
        </div>
        <ul className={styles['scrollable-list']}>
          {allNotifs.map((note, idx) => (
            <li key={idx}>
              {note.msg}
              {!note.ringing && (<button className={styles["urgent-btn"]} onClick={() => {handleCall(idx)}}>
                Call Now
                <FontAwesomeIcon icon={faPhone} className={styles['call-icon']}/>
              </button>)}
              {note.ringing && (<button className={styles["ringing-btn"]}>
                Ringing...
              </button>)}
             {note.online && (<div className={styles['online-div']}>
                <span className={styles["green-dot"]}></span>
                Online
              </div>)}
              {!note.online && (<div className={styles['online-div']}>
                <span className={styles["red-dot"]}></span>
                Offline
              </div>)}
              
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Notificationscad;