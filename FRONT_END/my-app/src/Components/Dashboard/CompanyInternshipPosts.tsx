import React, {useState, useEffect} from 'react';
import internshipListings from "../../internshipListingsCompany.json";
import internshipHistory from "../../internshipHistory.json";
import "../ComponentStyles/CompanyInternshipPosts.css";

// Import from the new location


const CompanyInternshipPosts = ({ CompanyName = "" }) => {
  const [view, setView] = useState("available");
  const [titleSearch, setTitleSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [paidFilter, setPaidFilter] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
      job_title: "",
      duration: "",
      paid: false,
      expected_salary: "",
      skills_required: "",
      job_description: ""
    });
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const filteredInternships = internshipListings.filter((internship) => {
      const matchesCompany = internship.company_name
        .toLowerCase()
        .includes(CompanyName.toLowerCase());
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
    setInternships(filteredInternships);
  }, [CompanyName, titleSearch, industryFilter, durationFilter, paidFilter]);

  const handleDeletePost = (id) =>{
    setInternships(internships.filter((item) => item.id !== id));
    console.log(internships);

  }


  const filteredData = internshipHistory.filter((item) => {
    const matchesCompany = item.company_name
      .toLowerCase()
      .includes(CompanyName.toLowerCase());
    const matchesTitle = item.job_title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());
    const matchesStatus = statusFilter
      ? item.status.toLowerCase() === statusFilter.toLowerCase()
      : true;
    const matchesDate = dateFilter ? item.date === dateFilter : true;

    return matchesCompany && matchesTitle && matchesStatus && matchesDate;
  });
  
  const handlePostingClick = () => {
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const newInternship = {
        id: Math.random()*100 +1,
        company_name: CompanyName,
        job_title: formData.job_title,
        duration: formData.duration,
        paid: formData.paid,
        expected_salary: formData.paid ? formData.expected_salary : null,
        skills_required: formData.skills_required.split(",").map(skill => skill.trim()),
        job_description: formData.job_description,
        industry: industryFilter || "General",
        totalApps: 0,
      };
      setInternships((prev) => [...prev, newInternship]);
      setShowModal(false);
    };
    return (
        <div className="internship-container">
      {view === "available" && (
        <div className="view-section">
            <div className="top-stuff">
                <button className="new-job-btn"onClick={handlePostingClick}>Add New Posting</button>
                <h1 className="section-title">Your Internship Postings</h1>
            </div>
        
          <div className="search-container-company">
            <div className="search-row">
              <input
                type="text"
                placeholder="Search by job title"
                value={titleSearch}
                onChange={(e) => setTitleSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="search-row">
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="search-select"
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
                className="search-select"
              >
                <option value="">All Payment Options</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
          </div>
          <div className="internship-listings">
            {internships.length > 0 ? (
              internships.map((internship, index) => (
                <div key={index} className="internship-card">
                  <button onClick= {() => handleDeletePost(internship.id)} >Delete Posting</button>
                  <h3 className="company-name">{internship.job_title}</h3>
                  <h4 className="job-detail">{internship.job_description}</h4>
                  <h4 className="job-detail">Duration: {internship.duration}</h4>
                  <h4 className="job-detail">Total Applicants: {internship.totalApps}</h4>
                  <button className="view-btn">View Internship</button>
                </div>
              ))
            ) : (
              <p className="no-results">
                No internships match your search.
              </p>
            )}
          </div>
        </div>
      )}
      {showModal && (
        <div className="jobmodal-overlay">
          <div className="jobmodal">
            <h2>Add New Internship</h2>
            <form onSubmit={handleFormSubmit} className="internship-form">
              <input name="job_title" placeholder="Internship Title" value={formData.job_title} onChange={handleFormChange} required />
              <input name="duration" placeholder="Duration (e.g., 2 months)" value={formData.duration} onChange={handleFormChange} required />
              <label>
                Paid:
                <input name="paid" type="checkbox" checked={formData.paid} onChange={handleFormChange} />
              </label>
              {formData.paid && (
                <input name="expected_salary" placeholder="Expected Salary" value={formData.expected_salary} onChange={handleFormChange} required />
              )}
              <input name="skills_required" placeholder="Skills (comma separated)" value={formData.skills_required} onChange={handleFormChange} required />
              <textarea name="job_description" placeholder="Job Description" value={formData.job_description} onChange={handleFormChange} required />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default CompanyInternshipPosts;