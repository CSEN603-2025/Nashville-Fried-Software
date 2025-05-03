import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck, faXmark, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import '../ComponentStyles/Notifications.css'
const Notifications = ({notifications}) =>{
    
    const initial = notifications.map((msg) => ({ msg, read: false }));

    const [allNotifs, setAllNotifs] = useState([
      ...initial,
      { msg: "✔️ Your last internship report status has been set!", read: false },
      { msg: "❌ Etisalat has declined your application.", read: false },
      { msg: "📅 SCAD Office Appointment scheduled for May 10th.", read: false },
      { msg: "🔔 The next internship cycle will start on May 25th!", read: false },
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