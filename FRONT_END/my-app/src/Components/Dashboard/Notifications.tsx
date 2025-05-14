import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCheck,
  faXmark,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import "../ComponentStyles/Notifications.css";
import { useNavigate } from "react-router-dom";
const Notifications = ({ notifications, pro }) => {
  const initial = notifications.map((msg) => ({
    msg,
    read: false,
    isUrgent: false,
  }));
  const navigate = useNavigate();
  const [allNotifs, setAllNotifs] = useState([
    ...initial,
    {
      msg: "✔️ Your last internship report status has been set!",
      read: false,
      isUrgent: false,
    },
    {
      msg: "❌ Etisalat has declined your application.",
      read: false,
      isUrgent: false,
    },
       (pro ? { msg: "SCAD Appointment Scheduled for May 10th", read: false, isUrgent: false } : { msg:"Deloitte has declined your application.", read:false, isUrgent:false})
,
    {
      msg: "🔔 The next internship cycle will start on May 25th!",
      read: false,
      isUrgent: false,
    },
    (pro ? { msg: "STARTING NOW: React Basics Workshop!", read: false, isUrgent: true } : { msg:"PWC ETIC has declined your application.", read:false, isUrgent:false})
    ,
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

  const handleJoin = () => {
    navigate("/Workshops");
  };

  return (
    <div className="notifs">
      <div className="notif-header">
        <h3 className="h">Notifications</h3>
        <button className="mark-btn" onClick={markAllRead}>
          Mark all as read
        </button>
      </div>
      <ul>
        {allNotifs.map((note, idx) => (
          <li key={idx} onClick={() => markRead(idx)}>
            {note.msg}
            {!note.read && <span className="red-dot"></span>}
            {note.isUrgent && (
              <button className="urgent-btn" onClick={handleJoin}>
                Join Now
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
