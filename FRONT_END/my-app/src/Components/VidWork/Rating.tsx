import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../ComponentStyles/Rating.css'



const Rating = ({workshop} : {workshop:string}) => {
  const navigate = useNavigate()
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false)

  const [downloaded, setDownloaded] = useState(false);

  const onClose = () => {
    navigate('/dashboardpro')
  }

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(onClose, 1000)
  };
  
  const handleRating = (newRating: number) => {
    setRating(newRating);
  };
  
  const handleFeedbackChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFeedback(event.target.value);
  };

  return (
    <>
    {!submitted && (<div>
    <div className="rating-box">
      Please rate your experience!
      <div className="stars-container">

        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="star-container" onClick={() => handleRating(index + 1)}>
            <span className="star">{index < rating ? '★' : '☆'}</span>
          </div>
        ))}
      </div>
      <textarea
        className="feedback-textarea"
        placeholder="Enter your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange} />
      <button onClick={() => {setSubmitted(true)}} className="submit-button">
        Submit and Exit
      </button>
    </div><textarea
        className="feedback-textarea"
        placeholder="Enter your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange} /><button className="submit-button">Submit and Exit</button>
    </div>)}
    {submitted && (
        <div className="certificate-box">
        <div className="certificate-header">
          <h2>Certificate of Attendance</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <p className="certificate-body">
          This certificate is rewarded to <strong>John Pork</strong> for attending <strong>{workshop}</strong>
        </p>
        <button className="download-btn" onClick={handleDownload}>
          {downloaded ? "PDF Downloaded" : "Download PDF"}
        </button>
      </div>
    )}
    </>

  );
};

export default Rating;
