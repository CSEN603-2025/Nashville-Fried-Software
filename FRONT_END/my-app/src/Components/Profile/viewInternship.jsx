import React from "react";
import internshipListings from "../../internshipListings.json";
import styles from "../../Styles/viewInternship.module.css";
import { useParams } from "react-router-dom";

const ViewInternship = () => {
  const { id } = useParams();
  const internship = internshipListings[id];

  return (
    <div className={styles["view-internship-container"]}>
      <h1>{internship.company_name}</h1>
      <h4>Job Title: {internship.job_title}</h4>
      <h4>Duration: {internship.duration}</h4>
      <h4>Paid or Unpaid: {internship.paid ? "Paid" : "Unpaid"}</h4>
      <h4>Expected Salary: {internship.expected_salary}</h4>
      <h4>Skills Required: {internship.skills_required.join(", ")}</h4>
      <h4>Job Description:</h4>
      <p>{internship.job_description}</p>
      <button>Apply to Internship</button>
      <form>
        <label>Upload Extra Documents (optional):</label>
        <input type="file" name="filename" />
      </form>
    </div>
  );
};

export default ViewInternship;
