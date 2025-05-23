import React from "react";
import completedInternships from "../../internshipHistory.json";
import styles from "../../Styles/viewInternship.module.css";
import { useParams } from "react-router-dom";

const ViewCompletedInternship = () => {
  const { id } = useParams();
  const internship = completedInternships[id];

  return (
    <div className={styles["view-internship-container"]}>
      <h1>{internship.company_name}</h1>
      <h2>Job Title: {internship.job_title}</h2>
      <h3>Date {internship.date}</h3>
      <h4>Status: {internship.status}</h4>
    </div>
  );
};

export default ViewCompletedInternship;
