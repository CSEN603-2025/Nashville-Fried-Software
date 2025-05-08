import React from "react";
import { useState } from "react";
import "../../styles/profile.css";
import "../../styles/global.css";
import completedInternships from "../../previousInternships.json";

const Profile = () => {
  let jobInterests = [
    "Backend Development",
    "Frontend Development",
    "Cybersecurity",
    "Data Science",
  ];
  let collegeActivities = ["coding competitions", "clubs", "group projects"];
  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isEditingJobInterests, setIsEditingJobInterests] = useState(false);
  const [isEditingActivities, setIsEditingActivities] = useState(false);
  const [jobInterestInput, setJobInterestInput] = useState("");
  const [activityInput, setActivityInput] = useState("");
  const [jobInterestsState, setJobInterestsState] = useState(jobInterests);
  const [collegeActivitiesState, setCollegeActivitiesState] =
    useState(collegeActivities);
  const [editingJobIndex, setEditingJobIndex] = useState(null);
  const [editingActivityIndex, setEditingActivityIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  // New states for the internship form
  const [isAddingInternship, setIsAddingInternship] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState([""]);
  const [duration, setDuration] = useState("");
  const [warning, setWarning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage(
      selectedMajor === "" || selectedSemester === ""
        ? "Some fields missing"
        : `You selected Major: ${selectedMajor}, Semester: ${selectedSemester}`
    );
  };

  const handleAddResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const handleResponsibilityChange = (index, value) => {
    const updatedResponsibilities = responsibilities.map((resp, idx) =>
      idx === index ? value : resp
    );
    setResponsibilities(updatedResponsibilities);
  };

  const handleAddInternship = (e) => {
    e.preventDefault();
    // Trim inputs and validate
    const isEmpty =
      !companyName.trim() ||
      !jobTitle.trim() ||
      !duration.trim() ||
      responsibilities.some((r) => !r.trim());

    if (isEmpty) {
      setWarning("Please fill out all fields before submitting.");
      return;
    }

    // Assuming you want to save this internship in a list (like completedInternships)
    const newInternship = {
      company_name: companyName,
      job_title: jobTitle,
      responsibilities,
      duration,
    };

    completedInternships.push(newInternship);
    // Reset the form and hide it
    setIsAddingInternship(false);
    setCompanyName("");
    setJobTitle("");
    setResponsibilities([""]);
    setDuration("");
    setWarning("");
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
  let name = "John Pork";
  let pro = true;
  return (
    <>
      <div className="Navbar">
        <h1>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="25.000000pt"
            height="25.000000pt"
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
              <h4>
                Job Interests:
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editButton"
                  onClick={() =>
                    setIsEditingJobInterests(!isEditingJobInterests)
                  }
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </h4>

              {isEditingJobInterests && (
                <div className="edit-input">
                  <input
                    type="text"
                    placeholder="Add job interest"
                    value={jobInterestInput}
                    onChange={(e) => setJobInterestInput(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      if (jobInterestInput.trim()) {
                        setJobInterestsState([
                          ...jobInterestsState,
                          jobInterestInput.trim(),
                        ]);
                        setJobInterestInput("");
                      }
                    }}
                  >
                    Add
                  </button>
                  <button onClick={() => setIsEditingJobInterests(false)}>
                    Done
                  </button>
                </div>
              )}

              <div className="interest-container">
                {jobInterestsState.map((jobInterest, idx) => (
                  <div className="interest-box editable" key={`ji-${idx}`}>
                    {editingJobIndex === idx ? (
                      <input
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const trimmed = editingText.trim();
                            const updated = [...jobInterestsState];
                            if (trimmed === "") {
                              updated.splice(idx, 1); // Remove item
                            } else {
                              updated[idx] = trimmed; // Update item
                            }
                            setJobInterestsState(updated);
                            setEditingJobIndex(null);
                          }
                        }}
                        onBlur={() => setEditingJobIndex(null)} // Optionally cancel on blur
                        autoFocus
                      />
                    ) : (
                      <>
                        {jobInterest}
                        {isEditingJobInterests && (
                          <>
                            <svg
                              width="16px"
                              height="16px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="editButton"
                              onClick={() => {
                                setEditingText(jobInterest);
                                setEditingJobIndex(idx);
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                                fill="#0F0F0F"
                              />
                            </svg>

                            <button
                              className="remove-btn"
                              onClick={() =>
                                setJobInterestsState(
                                  jobInterestsState.filter((_, i) => i !== idx)
                                )
                              }
                            >
                              ✕
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="section-box">
              <h4>
                College Activities:
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="editButton"
                  onClick={() => setIsEditingActivities(!isEditingActivities)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </h4>

              {isEditingActivities && (
                <div className="edit-input">
                  <input
                    type="text"
                    placeholder="Add activity"
                    value={activityInput}
                    onChange={(e) => setActivityInput(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      if (activityInput.trim()) {
                        setCollegeActivitiesState([
                          ...collegeActivitiesState,
                          activityInput.trim(),
                        ]);
                        setActivityInput("");
                      }
                    }}
                  >
                    Add
                  </button>
                  <button onClick={() => setIsEditingActivities(false)}>
                    Done
                  </button>
                </div>
              )}

              <div className="interest-container">
                {collegeActivitiesState.map((activity, idx) => (
                  <div className="interest-box editable" key={`ca-${idx}`}>
                    {editingActivityIndex === idx ? (
                      <input
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const trimmed = editingText.trim();
                            const updated = [...collegeActivitiesState];
                            if (trimmed === "") {
                              updated.splice(idx, 1);
                            } else {
                              updated[idx] = trimmed;
                            }
                            setCollegeActivitiesState(updated);
                            setEditingActivityIndex(null);
                          }
                        }}
                        onBlur={() => setEditingActivityIndex(null)}
                        autoFocus
                      />
                    ) : (
                      <>
                        {activity}
                        {isEditingActivities && (
                          <>
                            <svg
                              width="16px"
                              height="16px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="editButton"
                              onClick={() => {
                                setEditingText(activity);
                                setEditingActivityIndex(idx);
                              }}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                                fill="#0F0F0F"
                              />
                            </svg>

                            <button
                              className="remove-btn"
                              onClick={() =>
                                setCollegeActivitiesState(
                                  collegeActivitiesState.filter(
                                    (_, i) => i !== idx
                                  )
                                )
                              }
                            >
                              ✕
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h3>
            Previous Internships:{"  "}
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="addInternship"
              onClick={() => setIsAddingInternship(true)}
            >
              <path
                d="M4 12H20M12 4V20"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h3>
          {/* Show the form if isAddingInternship is true */}
          {isAddingInternship && (
            <div className="internship-form-overlay">
              <div className="internship-form">
                <form onSubmit={handleAddInternship}>
                  <label>
                    Company Name:
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </label>
                  <label>
                    Job Title:
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </label>
                  <label>
                    Responsibilities:
                    {responsibilities.map((responsibility, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          value={responsibility}
                          onChange={(e) =>
                            handleResponsibilityChange(index, e.target.value)
                          }
                        />
                        {index === responsibilities.length - 1 && (
                          <button
                            type="button"
                            onClick={handleAddResponsibility}
                          >
                            Add Responsibility
                          </button>
                        )}
                      </div>
                    ))}
                  </label>
                  <label>
                    Duration:
                    <input
                      type="text"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </label>
                  {warning && (
                    <p style={{ color: "red", marginTop: "10px" }}>{warning}</p>
                  )}
                  <button type="submit">Save Internship</button>
                  <button
                    type="button"
                    onClick={() => setIsAddingInternship(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
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
            <h2>Which companies viewed your profile: </h2>
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
