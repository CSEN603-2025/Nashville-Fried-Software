import React from "react";
import { useState } from "react";
import internshipListings from "../../internshipListings.json";
// import statusData from "../../internshipStatusData.json";
import internshipHistory from "../../internshipHistory.json";
import "../../styles/global.css";
import "../../styles/internships.css";

const Internships = () => {
  const [companySearch, setCompanySearch] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [paidFilter, setPaidFilter] = useState("");

  const [searchCompany, setSearchCompany] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

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
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Available Internships</h1>

      {/* Search and Filters */}
      <div
        className="search-container"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Search by company name"
          value={companySearch}
          onChange={(e) => setCompanySearch(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Search by job title"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        >
          <option value="">All Industries</option>
          <option value="Software Development">Software Development</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Education">Education</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Design & Media">Design & Media</option>
        </select>
        <select
          value={durationFilter}
          onChange={(e) => setDurationFilter(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
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
          style={{ padding: "8px" }}
        >
          <option value="">All Payment Options</option>
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
      </div>

      {/* Internships Listings */}
      <div className="internshipListings">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship, index) => (
            <div
              key={index}
              style={{
                border: "2px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <h3>{internship.company_name}</h3>
              <h4>Job Title: {internship.job_title}</h4>
              <h4>Duration: {internship.duration}</h4>
              <button>View Internship</button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            No internships match your search.
          </p>
        )}
      </div>

      {/* <h1 style={{ textAlign: "center" }}>Internships you applied to</h1>
      <div className="internshipListings">
        {statusData.map((item, index) => (
          <div
            key={index}
            style={{
              border: "2px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{item.company_name}</h3>
            <h4>Job Title: {item.job_title}</h4>
            <h4>
              Status:{" "}
              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </h4>
          </div>
        ))}
      </div> */}

      <h1 style={{ textAlign: "center" }}>Past/Present Internships</h1>
      <div
        className="search-container"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Search by company name"
          value={searchCompany}
          onChange={(e) => setSearchCompany(e.target.value)}
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
          <option value="">All Statuses</option>
          <option value="current intern">Current Intern</option>
          <option value="internship complete">Internship Complete</option>
        </select>
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          style={{ padding: "8px" }}
        />
      </div>

      <div className="internshipListings">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              style={{
                border: "2px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <h3>{item.company_name}</h3>
              <h4>Job Title: {item.job_title}</h4>
              <h4>Date: {item.date}</h4>
              <h4>Status: {item.status}</h4>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No records match your filters.</p>
        )}
      </div>
    </>
  );
};

export default Internships;
