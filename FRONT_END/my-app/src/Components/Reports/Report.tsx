import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import styles from "../ComponentStyles/Report.module.css";
import plusIcon from "../../assets/plus.svg"

function Report({ pro }) {
  const [reports, setReports] = useState([
    {
      id:0,
      role: "Software Engineering Intern",
      company: "Google",
      title: "Building Scalable Web Services",
      intro:
        "This report outlines my experience building APIs for scalable web applications.",
      body: "During my internship, I worked on developing RESTful services in Go and optimized existing endpoints for latency. I collaborated with a cross-functional team using Agile practices.",
      status: "Pending",
      comments: [],
      appealed: false,
      relevant_courses: [
        "Web Development",
        "Distributed Systems",
        "Software Engineering",
      ],
    },
    {
      id:1,
      role: "Data Analyst Intern",
      company: "Amazon",
      title: "Data-Driven Decision Making",
      intro:
        "A report summarizing my internship focused on analytics to support business strategy.",
      body: "I utilized SQL and Python to generate key insights from large datasets and presented weekly dashboards to the operations team, influencing inventory decisions.",
      status: "Flagged",
      comments: ["Too much focus on tools, not enough on outcomes."],
      appealed: false,
      relevant_courses: ["Data Science", "Database Systems", "Statistics"],
    },
    {
      id:2,
      role: "Cybersecurity Intern",
      company: "Cisco",
      title: "Vulnerability Assessment and Mitigation",
      intro:
        "This report discusses the security protocols I evaluated during my internship.",
      body: "I ran weekly vulnerability scans on internal networks and proposed remediations for identified issues. One proposal led to adoption across three business units.",
      status: "Accepted",
      comments: [],
      appealed: false,
      relevant_courses: [
        "Network Security",
        "Operating Systems",
        "Cryptography",
      ],
    },
    {
      id:3,
      role: "Product Management Intern",
      company: "Meta",
      title: "Launching User-Centered Features",
      intro:
        "Overview of my contributions to feature development in a fast-paced PM environment.",
      body: "I led user interviews, synthesized feedback, and helped design a new onboarding feature that increased user retention by 15% on pilot groups.",
      status: "Rejected",
      comments: [
        "Not enough technical detail.",
        "Missing clear metrics of success.",
      ],
      appealed: false,
      relevant_courses: [
        "Human-Computer Interaction",
        "Project Management",
        "Software Product Design",
      ],
    },
    {
      id:4,
      role: "AI Research Intern",
      company: "OpenAI",
      title: "Fine-tuning Language Models",
      intro:
        "An account of my time working on LLM fine-tuning techniques and evaluation.",
      body: "I trained and evaluated transformer models on specialized datasets. My contributions helped improve performance on niche domain tasks by 7%.",
      status: "Accepted",
      comments: [],
      appealed: false,
      relevant_courses: [
        "Machine Learning",
        "Natural Language Processing",
        "Deep Learning",
      ],
    },
  ]);
  const [drafts, setDrafts] = useState([
    {
      id:0,
      role: "Backend Developer Intern",
      company: "Stripe",
      title: "Improving Payment APIs",
      intro:
        "This report covers backend optimization techniques applied to Stripe's payment systems.",
      body: "I worked on microservices written in Java and improved response times by 18% through caching and database indexing.",
      status: "Draft",
      relevant_courses: ["Software Engineering", "Databases", "System Design"],
    },
    {
      id:1,
      role: "Machine Learning Intern",
      company: "Tesla",
      title: "Autonomous Driving Data Analysis",
      intro:
        "An exploration of computer vision models in the context of autonomous driving.",
      body: "I developed models to detect lane markings and vehicles using PyTorch, achieving over 92% accuracy on test sets.",
      status: "Draft",
      relevant_courses: [
        "Machine Learning",
        "Computer Vision",
        "Deep Learning",
      ],
    },
    {
      id:2,
      role: "DevOps Intern",
      company: "Red Hat",
      title: "CI/CD Pipeline Automation",
      intro:
        "The report outlines my work on automating the deployment process using Jenkins and Docker.",
      body: "I created a CI/CD pipeline that reduced deployment time by 60%, with integrated testing and rollback mechanisms.",
      status: "Draft",
      relevant_courses: ["DevOps", "Cloud Computing", "Infrastructure as Code"],
    },
  ]);
  const [currId, setCurrId] = useState(3)
  const courses = [
    "Web Development",
    "Distributed Systems",
    "Software Engineering",
    "Data Science",
    "Database Systems",
    "Statistics",
    "Network Security",
    "Operating Systems",
    "Cryptography",
    "Human-Computer Interaction",
    "Project Management",
    "Software Product Design",
    "Machine Learning",
    "Natural Language Processing",
    "Deep Learning",
    "UI/UX Design",
    "Accessibility in Computing",
    "Visual Design",
    "Cloud Computing",
    "DevOps",
    "Infrastructure as Code",
    "Digital Marketing",
    "Data Visualization",
    "Consumer Behavior",
  ];

  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const openModal = (report) => setSelectedReport(report);
  const closeModal = () => setSelectedReport(null);
  const openDraftModal = (draft) => setSelectedDraft(draft);
  const closeDraftModal = () => setSelectedDraft(null);

  const [newCourse, setNewCourse] = useState("");

const handleRemoveCourse = (indexToRemove) => {
  const updatedCourses = selectedDraft.relevant_courses.filter(
    (_, index) => index !== indexToRemove
  );
  handleEdit("relevant_courses", updatedCourses);
};

const handleAddCourse = () => {
  if (!newCourse.trim()) return;
  const updatedCourses = [
    ...(selectedDraft.relevant_courses || []),
    newCourse.trim(),
  ];
  handleEdit("relevant_courses", updatedCourses);
  setNewCourse("");
};

  const handleAppeal = () => {



    setSelectedReport((prev) => ({
      ...prev,
      appealed: true,
    }));

    setReports((prevDrafts) =>
      prevDrafts.map((draft) =>
        draft.id === selectedReport.id ? {...draft, appealed: true} : draft
      )
    );

  };


  const addDraft = () => {
    console.log(currId)
    let newDraft = {
      id:currId,
      role: "",
      company: "",
      title: "",
      intro: "",
      body: "",
      status: "Draft",
      relevant_courses: [],
    }
    setDrafts([...drafts, newDraft])
    openDraftModal(newDraft)
    setCurrId(currId+1)
  }

  const handleDraftDelete = () => {
    setDrafts((prevDrafts) => {
      return prevDrafts.filter((draft) => draft.id !== selectedDraft.id);
    });
    closeDraftModal()
  }

  const handleDraftSave = () => { 
    setDrafts((prevDrafts) =>
      prevDrafts.map((draft) =>
        draft.id === selectedDraft.id ? selectedDraft : draft
      )
    );
    console.log(drafts)
    
    closeDraftModal();
  }

  const handleDraftSubmit = () => {
  if (!selectedDraft) return;
  // Step 1: Save the changes made to the draft (handled already through the onChange event)
  setDrafts((prevDrafts) =>
    prevDrafts.map((draft) =>
      draft.id === selectedDraft.id ? selectedDraft : draft
    )
  );
  // Step 2: Append the draft to the reports list with status "Pending" and appealed: false
  const newReport = {
    ...selectedDraft,
    status: "Pending",
    appealed: false,
    id: reports.length
  };

  setReports((prevReports) => [...prevReports, newReport]);

  // Step 3: Remove the draft from the drafts list after it's been added to reports
  // setDrafts((prevDrafts) => prevDrafts.filter((draft) => draft !== selectedDraft));
  setDrafts((prevDrafts) => {
    return prevDrafts.filter((draft) => draft.id !== selectedDraft.id);
  });

  // Close the draft modal after submitting
  closeDraftModal();
};

  const handleEdit = (field, value) => {
    setSelectedDraft((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };


  return (
    <div className={styles["cntnr"]}>
      <SideBar active="Reports" pro={pro} />
      <div className={styles["main-display"]}>
        <div className={styles["reports-wrapper"]}>
          <h2 className={styles['section-header']}>Finalized Reports</h2>
          <div className={styles["report-list"]}>
            {reports.map((r, i) => (
              <div
                className={`${styles["report-card"]} ${
                  styles[`status-${r.status}`]
                }`}
                key={i}
              >
                <h2 className={styles["report-title"]}>{r.title}</h2>
                <p className={styles["report-meta"]}>
                  {r.role} @ {r.company}
                </p>
                <p className={styles["report-status"]}>Status: {r.status}</p>
                <button
                  className={styles["view-btn"]}
                  onClick={() => openModal(r)}
                >
                  View Report
                </button>
              </div>
            ))}

            {selectedReport && (
              <div className={styles["modal-overlay"]} onClick={closeModal}>
                <div
                  className={styles["modal"]}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className={styles["close-btn"]} onClick={closeModal}>
                    ✕
                  </button>
                  <h2>{selectedReport.title}</h2>
                  <p>
                    <strong>Role:</strong> {selectedReport.role}
                  </p>
                  <hr className={styles["break"]}/>
                  <p>
                    <strong>Company:</strong> {selectedReport.company}
                  </p>
                  <hr className={styles["break"]}/>
                  <p>
                    <strong>Status:</strong> {selectedReport.status}
                  </p>
                  <hr className={styles["break"]}/>
                  <p className={styles["modal-intro"]}>
                    {selectedReport.intro}
                  </p>
                  <p className={styles["modal-body"]}>{selectedReport.body}</p>
                  <hr className={styles["break"]}/>
                  {selectedReport.relevant_courses && selectedReport.relevant_courses.length > 0 && (
                    <div className={styles["courses-section"]}>
                      <h4 className={styles["courses-title"]}>Relevant Courses</h4>
                      <div className={styles["courses-container"]}>
                        {selectedReport.relevant_courses.map((course, index) => (
                          <div key={index} className={styles["course-card"]}>
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {["Flagged", "Rejected"].includes(selectedReport.status) &&
                    selectedReport.comments.length > 0 && (
                      <div className={styles["comment-box"]}>
                        <h4>Comments:</h4>
                        <ul>
                          {selectedReport.comments.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {(selectedReport.status === "Flagged" || selectedReport.status === "Rejected") && (
                    <div className={styles["appeal-section"]}>
                      {!selectedReport.appealed && (
                        <textarea
                          className={styles["appeal-input"]}
                          placeholder="Enter appeal message..."
                        />
                      )}
                      <button
                        className={styles["appeal-btn"]}
                        onClick={handleAppeal}
                        disabled={selectedReport.appealed}
                      >
                        {selectedReport.appealed ? "Appealed!" : "Appeal"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className={styles["break"]}/>
        <div className={styles["drafts-wrapper"]}>
          <h2 className={styles['section-header']}>Draft Reports</h2>

          <div className={styles["Draft-list"]}>
            {drafts.map((r, i) => (
              <div
                className={`${styles["report-card"]} ${
                  styles[`status-${r.status}`]
                }`}
                key={i}
              >
                <h2 className={styles["report-title"]}>{r.title}</h2>
                <p className={styles["report-meta"]}>
                  {r.role} @ {r.company}
                </p>
                <p className={styles["report-status"]}>Status: {r.status}</p>
                <button
                  className={styles["view-btn"]}
                  onClick={() => openDraftModal(r)}
                >
                  View Report
                </button>
              </div>
            ))}
            <div onClick={addDraft} className={`${styles["report-card-plus"]}`}>
              <img src={plusIcon} className={styles['pluslus']} />
             </div>
          </div>
          

          {selectedDraft && (
            <div className={styles["modal-overlay"]} onClick={closeDraftModal}>
              <div
                className={styles["modal"]}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles["close-btn"]}
                  onClick={closeDraftModal}
                >
                  ✕
                </button>
                <h2>
                  <strong>Title:</strong>
                  <input
                    type="text"
                    value={selectedDraft.title}
                    onChange={(e) => handleEdit("title", e.target.value)}
                  />
                </h2>

                <p>
                  <strong>Role:</strong>
                  <input
                    type="text"
                    value={selectedDraft.role}
                    onChange={(e) => handleEdit("role", e.target.value)}
                  />
                </p>

                <p>
                  <strong>Company:</strong>
                  <input
                    type="text"
                    value={selectedDraft.company}
                    onChange={(e) => handleEdit("company", e.target.value)}
                  />
                </p>
                <p className={styles["modal-intro"]}>
                  <strong>Intro:</strong>
                  <input
                    type="text"
                    value={selectedDraft.intro}
                    onChange={(e) => handleEdit("intro", e.target.value)}
                  />
                </p>

                <p className={styles["modal-body"]}>
                  <strong>Body:</strong>
                  <textarea
                    value={selectedDraft.body}
                    onChange={(e) => handleEdit("body", e.target.value)}
                  />
                </p>

                <div className={styles["courses-section"]}>
                  <h4 className={styles["courses-title"]}>Relevant Courses</h4>
                  <div className={styles["courses-container"]}>
                    {selectedDraft.relevant_courses?.map((course, index) => (
                      <div key={index} className={styles["course-card"]}>
                        {course}
                        <button
                          className={styles["course-remove"]}
                          onClick={() => handleRemoveCourse(index)}
                        >
                          <span>&#8722;</span>
                        </button>
                      </div>
                    ))}
                    <div className={styles["course-add-container"]}>
                      <input
                        type="text"
                        value={newCourse}
                        onChange={(e) => setNewCourse(e.target.value)}
                        className={styles["course-input"]}
                        placeholder="Add course..."
                      />
                      <button
                        className={styles["course-add"]}
                        onClick={handleAddCourse}
                        disabled={!newCourse.trim()}
                      >
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles["action-buttons"]}>
                  <button
                    className={styles["submit-draft"]}
                    onClick={handleDraftSubmit}
                  >
                    Submit Draft
                  </button>
                  <button
                    className={styles["submit-draft"]}
                    onClick={handleDraftSave}
                  >
                    Save Draft
                  </button>
                  <button
                    className={styles["delete-draft"]}
                    onClick={handleDraftDelete}
                  >
                    Delete Draft
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Comments Modal */}
    </div>
  );
}

export default Report;
