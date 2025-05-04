import React, { useState } from 'react';
import "../ComponentStyles/Sidebar.css";
import SideBar from '../Dashboard/SideBar.tsx';
import "../ComponentStyles/Report.css";

function Report() {
  const [reports, setReports] = useState([
    { id: 1, title: 'Report 1', intro: 'Intro 1', body: 'Body 1', submitted: false, appealed: false },
    { id: 2, title: 'Report 2', intro: 'Intro 2', body: 'Body 2', submitted: false, appealed: false },
    { id: 3, title: 'Report 3', intro: 'Intro 3', body: 'Body 3', submitted: false, appealed: false },
  ]);

  const [comments, setComments] = useState({
    1: "nice sub",
    2: "mid sub",
    3: "ts pmo sub"
  });

  const [creating, setCreating] = useState(false);
  const [viewingReport, setViewingReport] = useState<null | number>(null);
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [body, setBody] = useState('');

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState(null);

  const handleClick = (index: number) => {
    const selected = reports[index];
    setTitle(selected.title);
    setIntro(selected.intro);
    setBody(selected.body);
    setViewingReport(index);
    setEditing(false);
  };

  const handleCreate = () => {
    setTitle('');
    setIntro('');
    setBody('');
    setCreating(true);
    setViewingReport(null);
  };

  const handleSave = () => {
    if (title.trim()) {
      const newReport = { id: reports.length + 1, title: title.trim(), intro: intro.trim(), body: body.trim(), submitted: false, appealed: false };
      setReports([...reports, newReport]);
      setCreating(false);
      setViewingReport(null);
      setTitle('');
      setIntro('');
      setBody('');
    }
  };

  const handleBack = () => {
    setCreating(false);
    setViewingReport(null);
    setTitle('');
    setIntro('');
    setBody('');
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = (indexToDelete: number) => {
    setReports(reports.filter((_, index) => index !== indexToDelete));
  };

  const handleCourseToggle = (course: string) => {
    setSelectedCourses((prev) =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const handleReportSubmit = (reportId) => {
    setReports(reports.map(report =>
      report.id === reportId ? { ...report, submitted: true } : report
    ));
  };

  const handleViewSubmission = (reportId) => {
    setShowCommentsModal(true);
    setSelectedReportId(reportId);
  };

  const closeCommentsModal = () => {
    setShowCommentsModal(false);
  };

  const handleAppeal = (reportId) => {
    setReports(reports.map(report =>
      report.id === reportId ? { ...report, appealed: true, title: `${report.title} (appealed)` } : report
    ));
    setShowCommentsModal(false);  // Close the comments modal after appealing
  };

  return (
    <div className="report-layout">
      <SideBar />

      <div className="report-content">
        {creating ? (
          <div className="create-form">
            <textarea
              className="report-textarea title-box"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="report-textarea intro-box"
              placeholder="Introduction"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
            <textarea
              className="report-textarea body-box"
              placeholder="Report Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <div className="form-buttons">
              <button className="save-button" onClick={handleSave}>Save</button>
              <button className="back-button" onClick={handleBack}>Back</button>
            </div>
          </div>
        ) : viewingReport !== null ? (
          <div className="create-form">
            <textarea
              className="report-textarea title-box"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={!editing}
            />
            <textarea
              className="report-textarea intro-box"
              placeholder="Introduction"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              disabled={!editing}
            />
            <textarea
              className="report-textarea body-box"
              placeholder="Report Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={!editing}
            />
            <div className="form-buttons">
              {!editing && <button className="create-button" onClick={handleEdit}>Edit</button>}
              {editing && <button className="save-button" onClick={handleSave}>Save</button>}
              <button className="back-button" onClick={handleBack}>Back</button>
            </div>
          </div>
        ) : (
          <>
            <div className="report-list-container">
              <div className="report-list-title-container">
                <h2 className="report-list-title">REPORTS</h2>
                <button className="create-button" onClick={handleCreate}>Create New Report</button>
              </div>
              <ul className="report-list">
                {reports.map((report) => (
                  <li key={report.id} className="report-item">
                    <span onClick={() => handleClick(report.id)} style={{ flexGrow: 1, cursor: 'pointer' }}>
                      {report.title}
                    </span>
                    {!report.submitted && (
                      <button
                        className="submit-button"
                        onClick={() => handleReportSubmit(report.id)}
                      >
                        Submit
                      </button>
                    )}
                    {report.submitted && (
                      <button
                        className="view-button"
                        onClick={() => handleViewSubmission(report.id)}
                      >
                        View Submission
                      </button>
                    )}
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(report.id)}
                      style={{ marginLeft: '10px' }}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses List */}
            <div className="courses-list-container">
              <h2 className="courses-title"><strong>COURSES</strong></h2>
              <ul className="courses-list">
                {['CA', 'SE', 'DMET', 'NETWORKS'].map(course => (
                  <li key={course} className="course-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedCourses.includes(course)}
                        onChange={() => handleCourseToggle(course)}
                      />
                      {course}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Comments Modal */}
      {showCommentsModal && (
        <div className="comments-modal">
          <div className="comments-modal-content">
            <h3>Comments</h3>
            <p>{comments[selectedReportId]}</p>
            <button
              className="appeal-button"
              onClick={() => handleAppeal(selectedReportId)}
            >
              Appeal
            </button>
            <button className="close-comments-modal" onClick={closeCommentsModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Report;
