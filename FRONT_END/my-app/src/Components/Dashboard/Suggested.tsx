import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from 'react';
import {
  faClock,
  faCheck,
  faXmark,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import "../ComponentStyles/Suggested.css";
const Suggested = () => {

    const [showModal, setShowModal] = useState(false);
     const handleVideoModal = () => {
    setShowModal(true);
  };

    const closeVideoModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="card-container">
        <h3 className="card-title">Suggested</h3>
        <ul className="suggestion-list">
          <li className="suggestion-item">
            Since you're MET, check out <span className="bolded">Etisalat</span>.
          </li>
          <li className="suggestion-item">
            Tim Cheese, a colleague, endorses{" "}
            <span className="bolded">Microsoft</span>.
          </li>
          <li className="suggestion-item">
            Alice Brown, a colleague, endorses{" "}
            <span className="bolded">PWC ETIC</span>.
          </li>
          <li className="suggestion-item videoLink" onClick={handleVideoModal}> View a short video on which internships count</li>
        </ul>
      </div>
      {showModal && (
        <div className="video-modal-backdrop" onClick={closeVideoModal}>
          <div
            className="video-modal"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            <button className="video-modal-close" onClick={closeVideoModal}>
              <span> ×</span>
            </button>
           <iframe
  className="video-player"
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/jGYzEPyTWMQ"
  title="YouTube video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
          </div>
        </div>
        )}
    </>
  )
}

export default Suggested