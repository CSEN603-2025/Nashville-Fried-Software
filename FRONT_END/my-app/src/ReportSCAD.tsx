import React, { useState } from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx';
import styles from './Styles/ReportSCAD.module.css';
import editIcon from './assets/edit.svg';

const ReportSCAD = ({scad} : {scad:boolean}) => {
  const [statusFilter, setStatusFilter] = useState('-1');
  const [showModal, setShowModal] = useState(false);
  const [clarificationText, setClarificationText] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);
  const [viewReportModal, setViewReportModal] = useState(false);

  
  const [viewEvaluationModal, setViewEvaluationModal] = useState(false);

  const [reports, setReports] = useState([
    {
      studentName: "Alice Johnson",
      role: "Frontend Developer Intern",
      company: "TechNova",
      status: "Accepted",
      report: {
        title: "Building Modern UI with React",
        body: "During my internship at TechNova, I worked on designing and implementing user interfaces using React.js. I collaborated with designers to translate mockups into interactive components and optimized performance for faster load times.",
        courses: ["Web Development", "User Interface Design", "JavaScript Programming"]
      },
      evaluation: {
        supervisor: "Laura Chen",
        startDate: "2024-06-01",
        endDate: "2024-08-31",
        age: 21,
        major: "Computer Science"
      }
    },
    {
      studentName: "Bob Smith",
      role: "Data Analyst Intern",
      company: "DataBridge",
      status: "Pending",
      report: {
        title: "Data-Driven Insights for Business Growth",
        body: "At DataBridge, I was responsible for collecting, cleaning, and analyzing datasets to provide actionable insights. I used tools like Python, SQL, and Tableau to visualize trends and support business decision-making.",
        courses: ["Data Science", "Database Systems", "Statistical Analysis"]
      },
      evaluation: {
        supervisor: "Rachel Green",
        startDate: "2024-05-15",
        endDate: "2024-08-15",
        age: 22,
        major: "Information Systems"
      }
    },
    {
      studentName: "Carol Lee",
      role: "Mobile Developer Intern",
      company: "Appify",
      status: "Rejected",
      report: {
        title: "Cross-Platform Mobile Development",
        body: "My internship involved developing mobile applications using Flutter. I worked on features like authentication and push notifications, and learned to debug and optimize performance across both iOS and Android platforms.",
        courses: ["Mobile Application Development", "Software Engineering", "Object-Oriented Programming"]
      },
      evaluation: {
        supervisor: "Tom Anderson",
        startDate: "2024-06-10",
        endDate: "2024-09-10",
        age: 23,
        major: "Software Engineering"
      }
    },
    {
      studentName: "David Kim",
      role: "AI Research Intern",
      company: "NeuralNet Labs",
      status: "Accepted",
      report: {
        title: "Advancing Machine Learning Models",
        body: "At NeuralNet Labs, I contributed to research on neural network optimization techniques. I trained and evaluated models on real-world datasets, explored hyperparameter tuning, and documented findings in research reports.",
        courses: ["Machine Learning", "Artificial Intelligence", "Linear Algebra"]
      },
      evaluation: {
        supervisor: "Sofia Ramirez",
        startDate: "2024-07-01",
        endDate: "2024-09-30",
        age: 24,
        major: "Artificial Intelligence"
      }
    },
    {
      studentName: "Emily Davis",
      role: "Cybersecurity Intern",
      company: "SecureByte",
      status: "Pending",
      report: {
        title: "Securing Enterprise Networks",
        body: "My role at SecureByte involved auditing security systems, monitoring threats, and responding to incidents. I also developed automation scripts to scan for vulnerabilities and improve incident response times.",
        courses: ["Cybersecurity", "Network Security", "Operating Systems"]
      },
      evaluation: {
        supervisor: "Michael Hart",
        startDate: "2024-06-20",
        endDate: "2024-09-20",
        age: 22,
        major: "Cybersecurity"
      }
    },
    {
      studentName: "Frank Zhang",
      role: "UI/UX Designer Intern",
      company: "PixelPerfect",
      status: "Rejected",
      report: {
        title: "Designing Intuitive User Interfaces",
        body: "I worked with a cross-functional team to design wireframes and prototypes. Using tools like Figma, I iterated on feedback to create engaging and user-friendly interfaces for mobile and web apps.",
        courses: ["Human-Computer Interaction", "Design Thinking", "Digital Media"]
      },
      evaluation: {
        supervisor: "Emma Blake",
        startDate: "2024-05-25",
        endDate: "2024-08-25",
        age: 21,
        major: "Interaction Design"
      }
    }
  ]);
  

    // Add this function
    const openEvaluationModal = (report) => {
    setSelectedReport(report);
    setViewEvaluationModal(true);
    };

    const closeEvaluationModal = () => {
    setViewEvaluationModal(false);
    setSelectedReport(null);
    setPdfText("Download PDF")
    };
  const [pdfText, setPdfText] = useState('Download PDF')
  const filteredReports = reports.filter(report => statusFilter === '-1' || report.status.toLowerCase() === statusFilter.toLowerCase());

  const openModal = (report) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setClarificationText('');
  };

  const openReportModal = (report) => {
    setSelectedReport(report);
    setViewReportModal(true);
  };

  const closeReportModal = () => {
    setViewReportModal(false);
    setSelectedReport(null);
    setPdfText("Download PDF")
  };

  const handleStatusChange = (e) => {
      const newStatus = e.target.value;
      if (!selectedReport) return;

      setReports((prevReports) =>
        prevReports.map((report) =>
          report === selectedReport
            ? { ...report, status: newStatus }
            : report
        )
      );

      setSelectedReport((prev) =>
        prev ? { ...prev, status: newStatus } : null
      );
      
  }

  return (
    <div className={styles["cntnr"]}>
      <SideBar scad={scad}/>
      <div className={styles['main-display']}>
        <div className={styles['header-row']}>
          <h1 className={styles['page-title']}>Reports</h1>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={styles['duration-filter']}
          >
            <option value="-1">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
            <option value="Accepted">Accepted</option>
            <option value="Accepted">Flagged</option>
          </select>
        </div>
        <div className={styles['report-list']}>
          {filteredReports.map((report, idx) => (
            <div key={idx} className={styles['report-card']}>
              <div className={styles['report-info']}>
                <p><strong>{report.studentName}</strong></p>
                <p>Role: {report.role}</p>
                <p>Company: {report.company}</p>
                <p className={`${styles['status']} ${styles[report.status.toLowerCase()]}`}>Status: {report.status}</p>
              </div>
              <div className={styles['report-actions']}>
                <button className={styles['action-btn']} onClick={() => openReportModal(report)}>View internship report</button>
                <button onClick={() => openEvaluationModal(report)} className={styles['action-btn']}>View evaluation report</button>
                {(report.status === 'Pending' || report.status === 'Rejected') && (
                  <button className={styles['clarify-btn']} onClick={() => openModal(report)}>Submit clarification</button>
                )}
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className={styles['modal-overlay']} onClick={closeModal}>
            <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
              <h2>Clarification</h2>
              <textarea
                value={clarificationText}
                onChange={(e) => setClarificationText(e.target.value)}
                placeholder="Enter your clarification..."
                className={styles['clarification-textarea']}
              />
              <button className={styles['submit-btn']} onClick={closeModal}>Submit</button>
            </div>
          </div>
        )}

        {viewReportModal && selectedReport && (
          <div className={styles['modal-overlay']} onClick={closeReportModal}>
            <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
              <button className={styles['close-btn']} onClick={closeReportModal}>×</button>
              <h2>{selectedReport.report.title}</h2>
              <p>{selectedReport.report.body}</p>
              <div className="courses">
                <h4>Relevant Courses: </h4>
                <div className={styles['course-cards']}>
                    {selectedReport.report.courses.map((course, index) => (
                    <div key={index} className={styles['course-card']}>{course}</div>
                    ))}
                </div>
              </div>
              <div className={styles["modal-status"]}> 
                <p>Status: </p>
                <select
                  value={selectedReport.status}
                  onChange={handleStatusChange}
                  className={styles['status-list']}
                  disabled={scad}
                  >
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Flagged">Flagged</option>
                  </select>
              </div>
              
              <button onClick={() => {setPdfText('PDF downloaded')}} className={styles['download-btn']}>{pdfText}</button>
            </div>
          </div>
        )}

        {viewEvaluationModal && selectedReport && (
        <div className={styles['modal-overlay']} onClick={closeEvaluationModal}>
            <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
            <button className={styles['close-btn']} onClick={closeEvaluationModal}>×</button>
            <h2>Evaluation Report</h2>
            <div className={styles['evaluation-grid']}>
                <div><strong>Role:</strong> {selectedReport.role}</div>
                <div><strong>Student:</strong> {selectedReport.studentName}</div>
                <div><strong>Age:</strong> {selectedReport.evaluation.age}</div>
                <div><strong>Major:</strong> {selectedReport.evaluation.major}</div>
                <div><strong>Start Date:</strong> {selectedReport.evaluation.startDate}</div>
                <div><strong>End Date:</strong> {selectedReport.evaluation.endDate}</div>
                <div><strong>Supervisor:</strong> {selectedReport.evaluation.supervisor}</div>
                <div><strong>Company:</strong> {selectedReport.company}</div>
            </div>
            
            <button onClick={() => {setPdfText('PDF downloaded')}} className={styles['download-btn']}>
                {pdfText}
            </button>
            </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default ReportSCAD;