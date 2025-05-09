import React, { useState } from "react";
import "../ComponentStyles/Rating.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (newRating: number) => {
    setRating(newRating);
  };

  const handleFeedbackChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFeedback(event.target.value);
  };

  return (
    <div className="rating-box">
      Please rate your experience!
      <div className="stars-container">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className="star-container"
            onClick={() => handleRating(index + 1)}
          >
            <span className="star">{index < rating ? "★" : "☆"}</span>
          </div>
        ))}
      </div>
      <textarea
        className="feedback-textarea"
        placeholder="Enter your feedback here..."
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <button className="submit-button">Submit and Exit</button>
    </div>
  );
};

export default Rating;
