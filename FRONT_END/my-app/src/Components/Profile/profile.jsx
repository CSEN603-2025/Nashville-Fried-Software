import React from "react";
import { useState } from "react";
import "../../styles/profile.css";
import "../../styles/global.css";
import completedInternships from "../../previousInternships.json";

const Profile = () => {
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage(
      `You selected Major: ${selectedMajor}, Semester: ${selectedSemester}`
    );
  };

  let companies = [
    "Microsoft",
    "Apple",
    "Google",
    "Meta",
    "Freak Bob incorporated",
    "Talking Ben Developments",
  ];
  let majors = [
    "Computer Science",
    "Architecture",
    "Biotechnology",
    "Applied Arts",
  ];
  let semesters = ["3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th"];
  let jobInterests = [
    "Backend Development",
    "Frontend Development",
    "Cybersecurity",
    "Data Science",
  ];
  let collegeActivities = ["coding competitions", "clubs", "group projects"];
  let name = "John Pork";
  let pro = true;
  return (
    <>
      <div className="Navbar">
        <h1>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="20.000000pt"
            height="20.000000pt"
            viewBox="0 0 1215.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              fill="#FFFFFF"
              stroke="none"
            >
              <path
                d="M5850 12794 c-131 -12 -327 -38 -420 -55 -1386 -263 -2483 -1351
-2755 -2732 -50 -254 -59 -361 -59 -677 0 -307 9 -411 55 -650 224 -1162 1026
-2134 2119 -2568 467 -185 936 -263 1450 -241 1575 69 2915 1214 3230 2759 56
277 64 367 64 705 0 323 -7 406 -55 655 -157 810 -595 1536 -1241 2051 -507
405 -1102 653 -1758 735 -119 15 -535 26 -630 18z"
              />
              <path
                d="M3335 4893 c-1042 -41 -2003 -543 -2634 -1376 -327 -432 -556 -955
-646 -1477 -48 -278 -48 -273 -52 -1177 l-4 -863 6076 0 6076 0 -4 863 c-4
916 -4 910 -56 1199 -147 805 -590 1547 -1236 2067 -352 283 -748 492 -1175
620 -384 115 -681 151 -1261 151 l-296 0 -21 -58 c-30 -81 -113 -216 -182
-296 -288 -333 -782 -533 -1475 -596 -155 -14 -585 -14 -740 0 -793 72 -1333
327 -1584 748 -28 48 -61 113 -73 144 l-21 58 -311 -2 c-171 -1 -342 -3 -381
-5z"
              />
            </g>
          </svg>

          {" " + name}
          {pro === true ? "[Pro]" : ""}
        </h1>
      </div>
      <div className="hero">
        <div className="profileInfo">
          <h2 style={{ textAlign: "center" }}>Profile Information</h2>
          <div className="interests-activities-wrapper">
            <div className="section-box">
              <h4>Job Interests</h4>
              <div className="interest-container">
                {jobInterests.map((jobInterest, idx) => (
                  <div className="interest-box" key={`ji-${idx}`}>
                    {jobInterest}
                  </div>
                ))}
              </div>
            </div>

            <div className="section-box">
              <h4>College Activities</h4>
              <div className="interest-container">
                {collegeActivities.map((activity, idx) => (
                  <div className="interest-box" key={`ca-${idx}`}>
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h3 style={{ textAlign: "center" }}>Previous Internships:</h3>
          <div className="previousInternships">
            {completedInternships.map((internship, index) => (
              <div key={index} className="internship-card">
                <h3>{internship.company_name}</h3>
                <h4>{internship.job_title}</h4>
                <h4>Responsibilities: </h4>
                <ul>
                  {internship.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                <h4>Duration: {internship.duration}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="companyViews">
            <h2>Which companies viewed your profile:</h2>
            <ul>
              {companies.map((company, idx) => (
                <li key={idx}>{company}</li>
              ))}
            </ul>
          </div>

          <div className="majorSems">
            <div>
              <h2>Select a Major & Semester:</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Major:
                  <select
                    value={selectedMajor}
                    onChange={(e) => setSelectedMajor(e.target.value)}
                  >
                    <option value="">--Select Major--</option>
                    {majors.map((major, idx) => (
                      <option key={idx} value={major}>
                        {major}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Semester:
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                  >
                    <option value="">--Select Semester--</option>
                    {semesters.map((sem, idx) => (
                      <option key={idx} value={sem}>
                        {sem}
                      </option>
                    ))}
                  </select>
                </label>
                <button type="submit">Submit</button>
              </form>
              {confirmationMessage && <p>{confirmationMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
