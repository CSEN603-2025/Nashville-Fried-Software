import React, { useState } from 'react';
import "../ComponentStyles/Sidebar.css"
import SideBar from '../Dashboard/SideBar.tsx'
import "../ComponentStyles/Report.css"

function Report() {
  const [reports, setReports] = useState(['Report 1', 'Report 2', 'Report 3']);
  const [creating, setCreating] = useState(false);
  const [newReportTitle, setNewReportTitle] = useState('');

  const handleClick = (reportName: string) => {
    alert(`You clicked on ${reportName}`);
  };

  const handleCreate = () => {
    setCreating(true);
  };

  const handleSave = () => {
    if (newReportTitle.trim() !== '') {
      setReports([...reports, newReportTitle.trim()]);
      setNewReportTitle('');
      setCreating(false);
    }
  };

  const handleBack = () => {
    setCreating(false);
    setNewReportTitle('');
  };

  return (
    <div className="report-container">
      <SideBar />

      {!creating ? (
        <>
          <button className="create-button" onClick={handleCreate}>Create New Report</button>
          <ul className="report-list">
            {reports.map((report) => (
              <li key={report} onClick={() => handleClick(report)} className="report-item">
                {report}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="create-form">
          <textarea
            className="report-textarea title-box"
            placeholder="Enter report title..."
            value={newReportTitle}
            onChange={(e) => setNewReportTitle(e.target.value)}
          />
          <div className="form-buttons">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="back-button" onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Report;
