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
              ×
            </button>
            <video className="video-modal-content" controls>
              <source src="your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        )}
    </>
  )
}

export default Suggested