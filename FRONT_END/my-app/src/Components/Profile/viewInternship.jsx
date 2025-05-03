import React from "react";
import internshipListings from "../../internshipListings.json";
import "../../styles/global.css";
import "../../styles/viewInternship.css";

const viewInternship = () => {
  return (
    <div>
      <h1>{internshipListings[0].company_name}</h1>
      <h4>Job Title:{internshipListings[0].job_title}</h4>
      <h4>Duration:{internshipListings[0].duration}</h4>
      <h4>
        Paid or Unpaid:{internshipListings[0].paid === true ? "Paid" : "Unpaid"}
      </h4>
      <h4>Expected Salary:{internshipListings[0].expected_salary}</h4>
      <h4>
        Skills Required:{internshipListings[0].skills_required.toString()}
      </h4>
      <h4>Job description:</h4>
      <p>{internshipListings[0].job_description}</p>
      <button>Apply to Internship</button>
      <form action="/action_page.php">
        <label>Upload Extra Documents: [This is optional]</label>
        <input type="file" id="myFile" name="filename" />
      </form>
    </div>
  );
};

export default viewInternship;
