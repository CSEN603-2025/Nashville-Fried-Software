import React, { useState } from "react";
import applicants from "../../applicants.json";
import styles from "../../Styles/viewInternship.module.css";
import { useParams } from "react-router-dom";

const ViewApplicant = () => {
  const { id } = useParams();
  const applicant = applicants[id];

  const [review, setReview] = useState("");
  const [reviewStatus, setReviewStatus] = useState(false);

  return (
    <div className={styles["view-internship-container"]}>
      <h1>{applicant.name}</h1>
      <h4>Job Title: {applicant.jobTitle}</h4>
      <h4>Interests</h4>
      <ul>
        {applicant.jobInterests.map((interest) => {
          <li>{interest}</li>;
        })}
      </ul>
      <h4>Major: {applicant.major}</h4>
      <h4>Semester: {applicant.semester}</h4>
      <hr />
      {applicant.applicationStatus === "under review" && (
        <>
          <p>Set the application status</p>
          <label>
            <input
              type="radio"
              name="recommendation"
              value="finalized"
              required
              onChange={() => setReview("Finalized")}
            />
            Finalized
          </label>{" "}
          <label>
            <input
              type="radio"
              name="recommendation"
              value="accepted"
              onChange={() => setReview("Accpeted")}
            />
            Accepted
          </label>
          <label>
            <input
              type="radio"
              name="recommendation"
              value="rejected"
              onChange={() => setReview("Rejected")}
            />
            Rejected
          </label>
          <br />
          <button onClick={() => setReviewStatus(true)}>Set status</button>
        </>
      )}
      {applicant.applicationStatus === "finalised" && (
        <>
          <p>Set the Intern status: </p>
          <label>
            <input
              type="radio"
              name="internStatus"
              value="current intern"
              required
              onChange={() => setReview("Current Intern")}
            />
            Current Intern
          </label>{" "}
          <label>
            <input
              type="radio"
              name="internStatus"
              value="Internship Complete"
              onChange={() => setReview("Internship Complete")}
            />
            Internship Complete
          </label>
          <br />
          <button onClick={() => setReviewStatus(true)}>Set status</button>
        </>
      )}
      {reviewStatus && (
        <>
          <p>Status Set: {review}</p>
        </>
      )}
    </div>
  );
};

export default ViewApplicant;
