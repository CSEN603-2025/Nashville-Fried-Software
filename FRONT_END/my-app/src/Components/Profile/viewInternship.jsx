import React from "react";
import internshipListings from "../../internshipListings.json";
import "../../styles/global.css";
import "../../styles/viewInternship.css";

const ViewInternship = () => {
  let id = 0;
  return (
    <div>
      <h1>{internshipListings[id].company_name}</h1>
      <h4>Job Title:{internshipListings[id].job_title}</h4>
      <h4>Duration:{internshipListings[id].duration}</h4>
      <h4>
        Paid or Unpaid:
        {internshipListings[id].paid === true ? "Paid" : "Unpaid"}
      </h4>
      <h4>Expected Salary:{internshipListings[id].expected_salary}</h4>
      <h4>
        Skills Required:{internshipListings[id].skills_required.toString()}
      </h4>
      <h4>Job description:</h4>
      <p>{internshipListings[id].job_description}</p>
      <button>Apply to Internship</button>
      <form action="/action_page.php">
        <label>Upload Extra Documents: [This is optional]</label>
        <input type="file" id="myFile" name="filename" />
      </form>
    </div>
  );
};

export default ViewInternship;
