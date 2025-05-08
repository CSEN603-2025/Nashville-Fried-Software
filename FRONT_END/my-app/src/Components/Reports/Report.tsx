import React, { useState } from 'react';
import "../ComponentStyles/Sidebar.css";
import SideBar from '../Dashboard/SideBar.tsx';
import "../ComponentStyles/Report.css";

function Report() {
  const [reports, setReports] = useState([
    { id: 1, title: 'Report 1', intro: 'Intro 1', body: 'Body 1', submitted: false, appealed: false, courses: [] },
    { id: 2, title: 'Report 2', intro: 'Intro 2', body: 'Body 2', submitted: false, appealed: false, courses: [] },
    { id: 3, title: 'Report 3', intro: 'Intro 3', body: 'Body 3', submitted: false, appealed: false, courses: [] },
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
  const [selectedReportId, setSelectedReportId] = useState<number | null>(null);

  const courseList = ['CA', 'SE', 'DMET', 'NETWORKS'];

  const handleClick = (reportId: number) => {
    const selected = reports.find(report => report.id === reportId);
    if (!selected) return;
    setTitle(selected.title);
    setIntro(selected.intro);
    setBody(selected.body);
    setSelectedCourses(selected.courses || []);
    setViewingReport(reportId);
    setEditing(false);
  };

  const handleCreate = () => {
    setTitle('');
    setIntro('');
    setBody('');
    setSelectedCourses([]);
    setCreating(true);
    setViewingReport(null);
  };

  const handleSave = () => {
    if (title.trim()) {
      if (creating) {
        const newReport = {
          id: reports.length > 0 ? Math.max(...reports.map(r => r.id)) + 1 : 1,
          title: title.trim(),
          intro: intro.trim(),
          body: body.trim(),
          submitted: false,
          appealed: false,
          courses: selectedCourses
        };
        setReports([...reports, newReport]);
        setCreating(false);
        setViewingReport(null);
      } else if (viewingReport !== null) {
        setReports(reports.map(report =>
          report.id === viewingReport
            ? { ...report, title: title.trim(), intro: intro.trim(), body: body.trim(), courses: selectedCourses }
            : report
        ));
      }
      setTitle('');
      setIntro('');
      setBody('');
      setSelectedCourses([]);
      setEditing(false);
    }
  };

  const handleBack = () => {
    setCreating(false);
    setViewingReport(null);
    setTitle('');
    setIntro('');
    setBody('');
    setSelectedCourses([]);
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = (reportId: number) => {
    setReports(reports.filter(report => report.id !== reportId));
  };

  const handleCourseToggle = (course: string) => {
    setSelectedCourses(prev =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const handleReportSubmit = (reportId: number) => {
    setReports(reports.map(report =>
      report.id === reportId ? { ...report, submitted: true } : report
    ));
  };

  const handleViewSubmission = (reportId: number) => {
    setShowCommentsModal(true);
    setSelectedReportId(reportId);
  };

  const closeCommentsModal = () => {
    setShowCommentsModal(false);
  };

  const handleAppeal = (reportId: number) => {
    setReports(reports.map(report =>
      report.id === reportId && !report.appealed
        ? { ...report, appealed: true }
        : report
    ));
    setShowCommentsModal(false);
  };

  return (
    <div className="report-layout">
      <SideBar />

      <div className="report-content">
        {creating || viewingReport !== null ? (
          <div className="create-form">
            <div className="form-columns">
              <div className="report-fields">
                <textarea
                  className="report-textarea title-box"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  disabled={!creating && !editing}
                />
                <textarea
                  className="report-textarea intro-box"
                  placeholder="Introduction"
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                  disabled={!creating && !editing}
                />
                <textarea
                  className="report-textarea body-box"
                  placeholder="Report Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  disabled={!creating && !editing}
                />
              </div>
              <div className="courses-list-container">
                <h2 className="courses-title"><strong>COURSES</strong></h2>
                <ul className="courses-list">
                  {courseList.map(course => (
                    <li key={course} className="course-item">
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCourses.includes(course)}
                          onChange={() => handleCourseToggle(course)}
                          disabled={!creating && !editing}
                        />
                        {course}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="form-buttons">
              {(creating || editing) && <button className="save-button" onClick={handleSave}>Save</button>}
              {!creating && !editing && <button className="create-button" onClick={handleEdit}>Edit</button>}
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
                    <span
                      onClick={() => handleClick(report.id)}
                      style={{ flexGrow: 1, cursor: 'pointer' }}
                    >
                      {report.title}
                      {report.appealed && (
                        <span className="appeal-label" style={{ marginLeft: 8, color: '#d9534f', fontWeight: 'bold' }}>
                          (Appeal Pending)
                        </span>
                      )}
                    </span>
                    {!report.submitted && (
                      <button className="submit-button" onClick={() => handleReportSubmit(report.id)}>
                        Submit
                      </button>
                    )}
                    {report.submitted && (
                      <button className="view-button" onClick={() => handleViewSubmission(report.id)}>
                        View Comments
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
          </>
        )}
      </div>

      {/* Comments Modal */}
      {showCommentsModal && selectedReportId !== null && (
        <div className="comments-modal">
          <div className="comments-modal-content">
            <h3>Comments</h3>
            <p>{comments[selectedReportId]}</p>
            <button
              className="appeal-button"
              onClick={() => handleAppeal(selectedReportId)}
              disabled={reports.find(r => r.id === selectedReportId)?.appealed}
            >
              {reports.find(r => r.id === selectedReportId)?.appealed ? "Appeal Submitted" : "Appeal"}
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
