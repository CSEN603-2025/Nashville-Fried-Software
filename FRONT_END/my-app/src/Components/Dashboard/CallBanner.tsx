import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CallBanner = ({ onMissedCall }) => {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onMissedCall?.("📞 Missed call from John Pork.");
    }, 5000);

    // Trigger vibration (if supported)
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200, 100, 200]);
    }

    return () => clearTimeout(timeout);
  }, []);

  const handleAccept = () => {
    setVisible(false);
    navigator.vibrate?.(0); // Stop vibration
    navigate('/call')
  };

  const handleReject = () => {
    setVisible(false);
    navigator.vibrate?.(0);
    // onMissedCall?.("📞 You rejected a call.");
  };

  if (!visible) return null;

  return (
    <div className="call-banner">
      <span>📞 Incoming call from John Pork!</span>
      <div className="btns">
        <button className="accept" onClick={handleAccept}>Accept</button>
        <button className="reject" onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

export default CallBanner;
