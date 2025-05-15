import React from "react";
import { useState } from "react";
import internshipListings from "../../internshipListings.json";
import internshipHistory from "../../internshipHistory.json";
import { useNavigate } from "react-router-dom";
import styles from "../../Styles/internships.module.css";
import SideBar from "../Dashboard/SideBar";
import SideBarSCAD from "../Dashboard/SideBarSCAD";
import internshipStatusData from "../../internshipStatusData.json";
import SideBarCompany from "../Dashboard/SideBarCompany";
const Internships = ({ isStudent = false, pro = false, isCompany = false }) => {
  const navigate = useNavigate();
  const [view, setView] = useState("available");
  const [companySearch, setCompanySearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [paidFilter, setPaidFilter] = useState("");
  const [applyText, setApplyText] = useState("Apply to Internship");

  const [searchCompany, setSearchCompany] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const [selectedInternship, setSelectedInternship] = useState(null);
  const [completedInternship, setCompletedInternship] = useState(null);

  const filteredData = internshipHistory.filter((item) => {
    const matchesCompany = item.company_name
      .toLowerCase()
      .includes(searchCompany.toLowerCase());
    const matchesTitle = item.job_title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchesStatus = statusFilter
      ? item.status.toLowerCase() === statusFilter.toLowerCase()
      : true;
    const matchesDate = dateFilter ? item.date === dateFilter : true;

    return matchesCompany && matchesTitle && matchesStatus && matchesDate;
  });

  const filteredInternships = internshipListings.filter((internship) => {
    const matchesCompany = internship.company_name
      .toLowerCase()
      .includes(companySearch.toLowerCase());
    const matchesTitle = internship.job_title
      .toLowerCase()
      .includes(titleSearch.toLowerCase());
    const matchesIndustry = industryFilter
      ? internship.industry.toLowerCase() === industryFilter.toLowerCase()
      : true;
    const matchesDuration = durationFilter
      ? internship.duration.toLowerCase() === durationFilter.toLowerCase()
      : true;
    const matchesPaid = paidFilter
      ? paidFilter === "paid"
        ? internship.paid
        : !internship.paid
      : true;

    return (
      matchesCompany &&
      matchesTitle &&
      matchesIndustry &&
      matchesDuration &&
      matchesPaid
    );
  });

  const toViewInternship = (index) => {
    setSelectedInternship(filteredInternships[index]);
  };

  const handleFormApply = (s) => {
    setSelectedInternship({ ...s, applied: true });
    // setApplyText("Applying...")
    // setTimeout(()=> setApplyText("Applied!"), 1000);
  };

  const handleCloseModal = () => {
    setSelectedInternship(null);
  };

  const toViewCompletedInternship = (index) => {
    setCompletedInternship(filteredData[index]);
  };

  const handleCloseCompleted = () => {
    setCompletedInternship(null);
  };
  return (
    <div className="cntnr">
      {isStudent ? (
        <SideBar active="Internships" pro={pro} />
      ) : isCompany ? (
        <SideBarCompany active="Internshipcompany" />
      ) : (
        <SideBarSCAD scad={true} active="Internships" />
      )}
      <div className="main-display">
        {isStudent ? (
          <div className={styles["toggle-container"]}>
            <>
              <button
                onClick={() => setView("available")}
                className={
                  view === "available"
                    ? `{ ${styles["toggle-option"]} ${styles["active"]} }`
                    : `{ ${styles["toggle-option"]} ${styles["inactive"]} }`
                }
              >
                Available Internships
              </button>
              <button
                onClick={() => setView("history")}
                className={
                  view === "history"
                    ? `{ ${styles["toggle-option"]} ${styles["active"]} }`
                    : `{ ${styles["toggle-option"]} ${styles["inactive"]} }`
                }
              >
                Past/Present Internships
              </button>

              <button
                onClick={() => setView("applied")}
                className={
                  view === "applied"
                    ? `{ ${styles["toggle-option"]} ${styles["active"]} }`
                    : `{ ${styles["toggle-option"]} ${styles["inactive"]} }`
                }
              >
                Applied Internships
              </button>
            </>
          </div>
        ) : (
          <>
            <h1 className="scad-title">Available Internships</h1>
          </>
        )}

        {view === "available" && (
          <>
            <div className={styles["search-container"]}>
              {/* your companySearch, titleSearch, industryFilter, etc. inputs */}
              {/* Search and Filters */}
              <div className={styles["search-container"]}>
                <input
                  type="text"
                  placeholder="Search by company name"
                  value={companySearch}
                  onChange={(e) => setCompanySearch(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Search by job title"
                  value={titleSearch}
                  onChange={(e) => setTitleSearch(e.target.value)}
                />
                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                >
                  <option value="">All Industries</option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Education">Education</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Design & Media">Design & Media</option>
                </select>
                <select
                  value={durationFilter}
                  onChange={(e) => setDurationFilter(e.target.value)}
                >
                  <option value="">All Durations</option>
                  <option value="2 months">2 months</option>
                  <option value="3 months">3 months</option>
                  <option value="4 months">4 months</option>
                  <option value="6 months">6 months</option>
                </select>
                <select
                  value={paidFilter}
                  onChange={(e) => setPaidFilter(e.target.value)}
                  className={styles["paidFilter"]}
                >
                  <option value="">All Payment Options</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                </select>
              </div>
            </div>
            <div className={styles["internshipListings"]}>
              {filteredInternships.length > 0 ? (
                filteredInternships.map((internship, index) => (
                  <div key={index}>
                    <h3>{internship.company_name}</h3>
                    <h4>Job Title: {internship.job_title}</h4>
                    <h4>Duration: {internship.duration}</h4>
                    {true && (
                      <button onClick={() => toViewInternship(index)}>
                        View Internship
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No internships match your search.</p>
              )}
            </div>
          </>
        )}

        {view === "history" && (
          <>
            <div className={styles["search-container"]}>
              {/* your searchCompany, searchTitle, statusFilter, dateFilter inputs */}
              <div className={styles["search-container"]}>
                <input
                  type="text"
                  placeholder="Search by company name"
                  value={searchCompany}
                  onChange={(e) => setSearchCompany(e.target.value)}
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
                  <option value="">All Statuses</option>
                  <option value="current intern">Current Intern</option>
                  <option value="internship complete">
                    Internship Complete
                  </option>
                </select>
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className={styles["paidFilter"]}
                />
              </div>
            </div>
            <div className={styles["internshipListings"]}>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <div key={index}>
                    <h3>{item.company_name}</h3>
                    <h4>Job Title: {item.job_title}</h4>
                    <h4>Date: {item.date}</h4>
                    <h4>Status: {item.status}</h4>
                    {item.status === "internship complete" && (
                      <button onClick={() => toViewCompletedInternship(index)}>
                        View Internship
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

        {view === "applied" && (
          <>
            <div className={styles["internshipListings"]}>
              {internshipStatusData.map((item, index) => (
                <div key={index}>
                  <h3>{item.company_name}</h3>
                  <h4>Job Title: {item.job_title}</h4>
                  <h4>Status: {item.status}</h4>
                </div>
              ))}
            </div>
          </>
        )}
        {selectedInternship && (
          <div className={styles["jobmodal-overlay"]}>
            <div className={styles["jobmodal"]}>
              <div className={styles["view-internship-container"]}>
                  <div className={styles['modal-header']}>
                        <h2 className={styles["modal-title"]}>{selectedInternship.company_name}</h2>
                        <button className={styles["close-btn"]} onClick={handleCloseModal}>×</button>
                    </div>
                <p><strong>Job Title: </strong>{selectedInternship.job_title}</p>
                <hr className={styles["break"]}/>
                <p><strong>Duration: </strong>{selectedInternship.duration}</p>
                <hr className={styles["break"]}/>
                <p>
                <strong>Paid or Unpaid: </strong>{selectedInternship.paid ? "Paid" : "Unpaid"}
                </p>
                <hr className={styles["break"]}/>
                <p><strong>Expected Salary: </strong>{selectedInternship.expected_salary}</p>
                <hr className={styles["break"]}/>
                <p>
                  <strong>Skills Required: </strong>
                  {selectedInternship.skills_required.join(", ")}
                </p>
                <hr className={styles["break"]}/>
                <strong>Job Description:</strong>
                <p>{selectedInternship.job_description}</p>
                <hr className={styles["break"]}/>
                {isStudent && (
                  <div className={styles["upload-apply"]}>
                      <form>
                        <label>Upload Extra Documents (optional):</label>
                        <input className={styles["upload-input"]} type="file" name="filename" />
                      </form>
                      <button className={styles["apply-btn"]} onClick={() => handleFormApply(selectedInternship)}>
                        {selectedInternship.applied
                          ? "Applied!"
                          : "Apply to Internship"}
                      </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {completedInternship && (
          <div className={styles["jobmodal-overlay"]}>
            <div className={styles["jobmodal"]}>
              <div className={styles["view-internship-container"]}>
                    <div className={styles['modal-header']}>
                        <h2 className={styles["modal-title"]}>{completedInternship.company_name}</h2>
                        <button className={styles["close-btn"]} onClick={handleCloseCompleted}>×</button>
                    </div>
                <p><strong>Job Title: </strong>{completedInternship.job_title}</p>
                <hr className={styles["break"]}/>
                <p><strong>Date: </strong> {completedInternship.date}</p>
                <hr className={styles["break"]}/>
                <p><strong>Status: </strong>{completedInternship.status}</p>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Internships;
