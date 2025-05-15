import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import applicants from "../../applicants.json";
import currentInterns from "../../currentInterns.json";
import styles from "../../Styles/internships.module.css";
import SideBar from "../Dashboard/SideBarCompany";

const Applications = () => {
  const navigate = useNavigate();

  const [view, setView] = useState("applicants");
  const [industryFilter, setIndustryFilter] = useState("");

  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [review, setReview] = useState("");
  const [reviewStatus, setReviewStatus] = useState(false);

  const filteredApplicants = applicants.filter((applicant) => {
    const matchesIndustry = industryFilter
      ? applicant.jobTitle.toLowerCase() === industryFilter.toLowerCase()
      : true;

    return matchesIndustry;
  });

  const filteredInterns = currentInterns.filter((item) => {
    const matchesName = item.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesTitle = item.jobTitle
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchesStatus = item.internshipStatus
      .toLowerCase()
      .includes(statusFilter.toLowerCase());

    return matchesName && matchesTitle && matchesStatus;
  });

  const toViewApplicant = (index) => {
    setSelectedApplicant(filteredApplicants[index]);
  };

  const handleCloseModal = () => {
    setSelectedApplicant(null);
    setReview("");
    setReviewStatus(false);
  };

  const toEvaluateIntern = (index) => {
    setSelectedApplicant(currentInterns[index]);
  };

  return (
    <div className="cntnr">
      <SideBar active="Internships" />
      <div className="main-display">
        <div className={styles["toggle-container"]}>
          <button
            onClick={() => setView("applicants")}
            className={
              view === "applicants"
                ? `{ ${styles["toggle-option"]} ${styles["active"]} }`
                : `{ ${styles["toggle-option"]} ${styles["inactive"]} }`
            }
          >
            Applicants
          </button>
          <button
            onClick={() => setView("currentInterns")}
            className={
              view === "currentInterns"
                ? `{ ${styles["toggle-option"]} ${styles["active"]} }`
                : `{ ${styles["toggle-option"]} ${styles["inactive"]} }`
            }
          >
            Current Interns
          </button>
        </div>
        {view === "applicants" && (
          <>
            <div className="search-container">
              {/* your companySearch, titleSearch, industryFilter, etc. inputs */}
              {/* Search and Filters */}
              <div className={styles["search-container"]}>
                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  <option value="">All Internship Posts</option>
                  <option value="Software Engineering Intern">
                    Software Engineering Intern
                  </option>
                  <option value="Data Analyst Intern">
                    Data Analyst Intern
                  </option>
                  <option value="Cybersecurity Intern">
                    Cybersecurity Intern
                  </option>
                  <option value="UX Design Intern">UX Design Intern</option>
                </select>
              </div>
            </div>
            <div className={styles["internshipListings"]}>
              {filteredApplicants.length > 0 ? (
                filteredApplicants.map((applicant, index) => (
                  <div key={index}>
                    <h3>{applicant.name}</h3>
                    <h4>Internship Post: {applicant.jobTitle}</h4>
                    <button onClick={() => toViewApplicant(index)}>
                      View Applicant
                    </button>
                  </div>
                ))
              ) : (
                <p>No Applicants match your search.</p>
              )}
            </div>
          </>
        )}
        {view === "currentInterns" && (
          <>
            <div className={styles["search-container"]}>
              {/* your searchCompany, searchTitle, statusFilter, dateFilter inputs */}
              <div className={styles["search-container"]}>
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Search by job title"
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Interns</option>
                  <option value="current intern">Current Intern</option>
                  <option value="completed internship">
                    Internship Complete
                  </option>
                </select>
              </div>
            </div>
            <div className={styles["internshipListings"]}>
              {filteredInterns.length > 0 ? (
                filteredInterns.map((item, index) => (
                  <div key={index}>
                    <h3>{item.name}</h3>
                    <h4>Job Title: {item.jobTitle}</h4>
                    <h4>Status: {item.internshipStatus}</h4>
                    {item.internshipStatus === "completed internship" && (
                      <button onClick={() => toEvaluateIntern(index)}>
                        View Intern
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No records match your filters.</p>
              )}
            </div>
          </>
        )}
        {selectedApplicant && (
          <div className={styles["jobmodal-overlay"]}>
            <div className={styles["jobmodal"]}>
              <div className={styles["view-internship-container"]}>
                <h1>{selectedApplicant.name}</h1>

                <h4>Job Title: {selectedApplicant.jobTitle}</h4>
                <div className={styles["interestss"]}>
                <h4>Job Interests:</h4>
                <ul>
                  {selectedApplicant.jobInterests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
                </div>
                
                <h4>Major: {selectedApplicant.major}</h4>
                <h4>Semester: {selectedApplicant.semester}</h4>

                {selectedApplicant.applicationStatus === "under review" && (
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
                        onChange={() => setReview("Accepted")}
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
                    <button onClick={() => setReviewStatus(true)}>
                      Set status
                    </button>
                  </>
                )}

                {selectedApplicant.applicationStatus === "finalised" && (
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
                    <button onClick={() => setReviewStatus(true)}>
                      Set status
                    </button>
                  </>
                )}

                {reviewStatus && (
                  <>
                    <p>Status Set: {review}</p>
                  </>
                )}

                <button onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;
