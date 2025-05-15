import React, { useState } from 'react';
import '../ComponentStyles/Workshops.css'; // Link to your CSS

const workshopData = [
  { name: "Siemens", details: "Learn about automation in modern factories." , date:"30/5/2025"},
  { name: "PWC ETIC", details: "Cybersecurity and analytics insights.", date:"30/6/2025" },
  { name: "Etisalat", details: "Explore telecom innovations in the UAE.",  date:"30/7/2025" },
];

const WorkshopList = () => {
  const [registered, setRegistered] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  
  const handleRegister = (name) => {
    if (!registered.includes(name)) {
      setRegistered((prev) => [...prev, name]);
    }
  };

  return (
    <>
    <div className="workshop-container">
      <ul className="ws-list">
        {workshopData.map((w, i) => (
          <li key={i} className="workshop-item">
            <span>{w.name}</span>
          
            <span className="btn-box">
            <button onClick={() => handleRegister(w.name)} disabled={registered.includes(w.name)}>
              {registered.includes(w.name) ? "Registered" : "Register"}
            </button>
            <button onClick={() => setModalContent(w)}>Show more</button>
            </span>
            
          </li>
        ))}
      </ul>

      {modalContent && (
        <div className="modal-overlay" onClick={() => setModalContent(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h4>{modalContent.name}</h4>
            <p>{modalContent.details}</p>
            <p> Workshop Date: {modalContent.date}</p>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default WorkshopList;
