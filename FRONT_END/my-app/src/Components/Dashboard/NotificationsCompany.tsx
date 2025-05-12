import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faXmark, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import '../ComponentStyles/Notifications.css'
import { useNavigate } from 'react-router-dom';
const Notifications = ({notifications}) =>{
    
    const initial = notifications.map((msg) => ({ msg, read: false, isUrgent: false }));
    const navigate = useNavigate();
    const [allNotifs, setAllNotifs] = useState([
      ...initial,
      {msg: "Alice Johnson has applied for your Software Engineering Intern Position!", read: false, isUrgent:true}
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
  
    const markRead = (index) => {
      setAllNotifs((prev) =>
        prev.map((n, i) => (i === index ? { ...n, read: true } : n))
      );
    };
  
    const markAllRead = () => {
      setAllNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
    };

  
    return (
      <div className="notifs">
        <div className="notif-header">
          <h3 className="h">Notifications</h3>
          <button className="mark-btn" onClick={markAllRead}>Mark all as read</button>
        </div>
        <ul>
          {allNotifs.map((note, idx) => (
            <li key={idx} onClick={() => markRead(idx)}>
              {note.msg}
              {!note.read && <span className="red-dot"></span>}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Notifications;