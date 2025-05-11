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
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isEditingModal, setIsEditingModal] = useState(false);
  const [editModalData, setEditModalData] = useState(null);

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

  const handleViewInternship = (internship) => {
    setSelectedInternship(internship);
  };

  const handleCloseModal = () => {
    setSelectedInternship(null);
  };

  const handleDeletePost = (id) => {
    setInternships(internships.filter((item) => item.id !== id));
    setSelectedInternship(null);
  };

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

  const handleEditModal = () => {
    setIsEditingModal(true);
    setEditModalData({ ...selectedInternship });
  };

  const handleEditModalChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditModalData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSaveModalEdit = () => {
    setInternships((prev) => prev.map((item) =>
      item.id === editModalData.id ? { ...editModalData, skills_required: typeof editModalData.skills_required === 'string' ? editModalData.skills_required.split(',').map(s => s.trim()) : editModalData.skills_required } : item
    ));
    setSelectedInternship({ ...editModalData, skills_required: typeof editModalData.skills_required === 'string' ? editModalData.skills_required.split(',').map(s => s.trim()) : editModalData.skills_required });
    setIsEditingModal(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleCancelModalEdit = () => {
    setIsEditingModal(false);
    setEditModalData(null);
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
                  <h3 className="company-name">{internship.job_title}</h3>
                  <h4 className="job-detail">{internship.job_description}</h4>
                  <h4 className="job-detail">Duration: {internship.duration}</h4>
                  <h4 className="job-detail">Total Applicants: {internship.totalApps}</h4>
                  <button className="view-btn" onClick={() => handleViewInternship(internship)}>View Internship</button>
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
      {selectedInternship && (
        <div className="jobmodal-overlay">
          <div className="jobmodal">
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <h2 style={{ flex: 1 }}>{selectedInternship.job_title}</h2>
              {!isEditingModal && (
                <button style={{ padding: '4px 12px', fontSize: '0.95rem', margin: 0 }} onClick={handleEditModal}>Edit</button>
              )}
            </div>
            {isEditingModal ? (
              <>
                <label style={{ marginBottom: 6 }}>
                  Job Title:
                  <input name="job_title" value={editModalData.job_title} onChange={handleEditModalChange} style={{ width: '100%', marginTop: 2 }} />
                </label>
                <label style={{ marginBottom: 6 }}>
                  Description:
                  <textarea name="job_description" value={editModalData.job_description} onChange={handleEditModalChange} style={{ width: '100%', marginTop: 2 }} />
                </label>
                <label style={{ marginBottom: 6 }}>
                  Duration:
                  <input name="duration" value={editModalData.duration} onChange={handleEditModalChange} style={{ width: '100%', marginTop: 2 }} />
                </label>
                <label style={{ marginBottom: 6 }}>
                  Paid:
                  <input name="paid" type="checkbox" checked={editModalData.paid} onChange={handleEditModalChange} style={{ marginLeft: 8 }} />
                </label>
                {editModalData.paid && (
                  <label style={{ marginBottom: 6 }}>
                    Expected Salary:
                    <input name="expected_salary" value={editModalData.expected_salary} onChange={handleEditModalChange} style={{ width: '100%', marginTop: 2 }} />
                  </label>
                )}
                <label style={{ marginBottom: 6 }}>
                  Skills Required (comma separated):
                  <input name="skills_required" value={typeof editModalData.skills_required === 'string' ? editModalData.skills_required : editModalData.skills_required.join(', ')} onChange={handleEditModalChange} style={{ width: '100%', marginTop: 2 }} />
                </label>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
                  <button onClick={handleCancelModalEdit}>Cancel</button>
                  <button onClick={handleSaveModalEdit}>Save</button>
                </div>
              </>
            ) : (
              <>
                <p><strong>Description:</strong> {selectedInternship.job_description}</p>
                <p><strong>Duration:</strong> {selectedInternship.duration}</p>
                <p><strong>Paid:</strong> {selectedInternship.paid ? 'Yes' : 'No'}</p>
                {selectedInternship.paid && (
                  <p><strong>Expected Salary:</strong> {selectedInternship.expected_salary}</p>
                )}
                <p><strong>Skills Required:</strong> {selectedInternship.skills_required && selectedInternship.skills_required.join ? selectedInternship.skills_required.join(', ') : selectedInternship.skills_required}</p>
                <p><strong>Total Applicants:</strong> {selectedInternship.totalApps}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
                  <button onClick={handleCloseModal}>Close</button>
                  <button className="delete-btn" onClick={() => handleDeletePost(selectedInternship.id)}>Delete Posting</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default CompanyInternshipPosts;