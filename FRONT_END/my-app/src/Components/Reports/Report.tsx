import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import styles from "../ComponentStyles/Report.module.css";

function Report({ pro }) {
  const [reports, setReports] = useState([
    {
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
    {
      role: "UI/UX Design Intern",
      company: "Adobe",
      title: "Designing for Accessibility",
      intro: "The report highlights my role in enhancing UI accessibility.",
      body: "I redesigned key UI elements in a flagship product to meet WCAG standards. Usability testing showed a 20% improvement in task completion for users with visual impairments.",
      status: "Pending",
      comments: [],
      appealed: false,
      relevant_courses: [
        "UI/UX Design",
        "Accessibility in Computing",
        "Visual Design",
      ],
    },
    {
      role: "Cloud Engineering Intern",
      company: "IBM",
      title: "Optimizing Cloud Infrastructure",
      intro:
        "Summary of work done to reduce cloud service costs and increase reliability.",
      body: "I created Terraform scripts to manage multi-cloud environments and implemented cost analysis tools that identified $10k/month in savings.",
      status: "Flagged",
      comments: ["Needs more clarity on individual contribution."],
      appealed: false,
      relevant_courses: ["Cloud Computing", "DevOps", "Infrastructure as Code"],
    },
    {
      role: "Marketing Intern",
      company: "Netflix",
      title: "Social Media Campaign Analytics",
      intro:
        "This report covers how I analyzed data from social campaigns to drive strategy.",
      body: "Using tools like Tableau and Google Analytics, I assessed campaign effectiveness and delivered weekly reports that shaped audience targeting strategies.",
      status: "Rejected",
      comments: [
        "Report reads like a blog post.",
        "Lacks structure and depth.",
      ],
      appealed: false,
      relevant_courses: [
        "Digital Marketing",
        "Data Visualization",
        "Consumer Behavior",
      ],
    },
  ]);
  const [drafts, setDrafts] = useState([
    {
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



  const handleDraftSubmit = (idx) => {
  if (!selectedDraft) return;
  // Step 1: Save the changes made to the draft (handled already through the onChange event)

  // Step 2: Append the draft to the reports list with status "Pending" and appealed: false
  const newReport = {
    ...selectedDraft,
    status: "Pending",
    appealed: false,
  };

  setReports((prevReports) => [...prevReports, newReport]);

  // Step 3: Remove the draft from the drafts list after it's been added to reports
  // setDrafts((prevDrafts) => prevDrafts.filter((draft) => draft !== selectedDraft));
  setDrafts((prevDrafts) => {
    return prevDrafts.filter((draft,i) => i !== idx);
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
        <h1>REPORTS</h1>
        <div className={styles["reports-wrapper"]}>
          <h2>Finalized Reports</h2>
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
                  View
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
                  <p>
                    <strong>Company:</strong> {selectedReport.company}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedReport.status}
                  </p>
                  <p className={styles["modal-intro"]}>
                    {selectedReport.intro}
                  </p>
                  <p className={styles["modal-body"]}>{selectedReport.body}</p>

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

                  {(selectedReport.status == "Flagged" ||
                    selectedReport.status == "Rejected") && (
                    <button className={styles["appeal-btn"]}>Appeal</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles["drafts-wrapper"]}>
          <h2>Draft Reports</h2>

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
                  View
                </button>
              </div>
            ))}
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
                <h2>{selectedDraft.title}</h2>

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

                <p>
                  <strong>Status:</strong>
                  <input
                    type="text"
                    value={selectedDraft.status}
                    onChange={(e) => handleEdit("status", e.target.value)}
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

                <button
                  className={styles["submit-draft"]}
                  onClick={()=>handleDraftSubmit(i)}
                >
                  Submit Draft
                </button>
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
