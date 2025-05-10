import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import applicants from "../../applicants.json";
import currentInterns from "../../currentInterns.json";
import "../../Styles/global.css";
import "../../Styles/internships.css";

const Applications = () => {
  const navigate = useNavigate();

  const [view, setView] = useState("applicants");
  const [industryFilter, setIndustryFilter] = useState("");

  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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
    navigate("/viewApplicant/" + index);
  };

  const toEvaluateIntern = () => {
    navigate("/evaluateIntern");
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setView("applicants")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: view === "applicants" ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Applicants
        </button>
        <button
          onClick={() => setView("currentInterns")}
          style={{
            padding: "10px 20px",
            backgroundColor: view === "currentInterns" ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Current Interns
        </button>
      </div>
      {view === "applicants" && (
        <>
          <h1 style={{ textAlign: "center" }}>Applicants</h1>
          <div className="search-container">
            {/* your companySearch, titleSearch, industryFilter, etc. inputs */}
            {/* Search and Filters */}
            <div
              className="search-container"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                style={{ marginRight: "10px", padding: "8px" }}
              >
                <option value="">All Internship Posts</option>
                <option value="Software Engineering Intern">
                  Software Engineering Intern
                </option>
                <option value="Data Analyst Intern">Data Analyst Intern</option>
                <option value="Cybersecurity Intern">
                  Cybersecurity Intern
                </option>
                <option value="UX Design Intern">UX Design Intern</option>
              </select>
            </div>
          </div>
          <div className="internshipListings">
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
              <p style={{ textAlign: "center" }}>
                No internships match your search.
              </p>
            )}
          </div>
        </>
      )}
      {view === "currentInterns" && (
        <>
          <h1 style={{ textAlign: "center" }}>Current Interns</h1>
          <div className="search-container">
            {/* your searchCompany, searchTitle, statusFilter, dateFilter inputs */}
            <div
              className="search-container"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              <input
                type="text"
                placeholder="Search by name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                style={{ marginRight: "10px", padding: "8px" }}
              />
              <input
                type="text"
                placeholder="Search by job title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                style={{ marginRight: "10px", padding: "8px" }}
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ marginRight: "10px", padding: "8px" }}
              >
                <option value="">All Interns</option>
                <option value="current intern">Current Intern</option>
                <option value="completed internship">
                  Internship Complete
                </option>
              </select>
            </div>
          </div>
          <div className="internshipListings">
            {filteredInterns.length > 0 ? (
              filteredInterns.map((item, index) => (
                <div key={index}>
                  <h3>{item.name}</h3>
                  <h4>Job Title: {item.jobTitle}</h4>
                  <h4>Status: {item.internshipStatus}</h4>
                  {item.internshipStatus === "completed internship" && (
                    <button onClick={() => toEvaluateIntern()}>
                      Evaluate Intern
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>
                No records match your filters.
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Applications;
