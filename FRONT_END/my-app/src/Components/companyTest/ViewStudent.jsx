import React from "react";
import { useState } from "react";
import styles from "../../Styles/profile.module.css";
import completedInternships from "../../previousInternships.json";
import SideBar from "../Dashboard/SideBar";

const ViewStudent = () => {
  const [expandedInternship, setExpandedInternship] = useState(null);
  let jobInterests = [
    "Backend Development",
    "Frontend Development",
    "Cybersecurity",
    "Data Science",
  ];
  let collegeActivities = ["coding competitions", "clubs", "group projects"];
  let name = "John Pork";
  let pro = true;
  return (
    <div className="cntnr">
      <SideBar />
      <div className="main-display">
        <div className="profile-main-content">
          <div className="profile-grid-top">
            <div className="profile-info-col">
              <div className={styles["profileInfo"]}>
                <h2>
                  Profile Information: {name} {pro ? "[PRO]" : ""}
                </h2>
                <div className={styles["interests-activities-wrapper"]}>
                  <div className={styles["section-box"]}>
                    <h4>Job Interests:</h4>
                    <div className={styles["interest-container"]}>
                      {jobInterests.map((jobInterest, idx) => (
                        <div
                          className={`${styles["interest-box"]} ${styles["editable"]}`}
                          key={`ji-${idx}`}
                        >
                          {jobInterest}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles["section-box"]}>
                    <h4>College Activities:</h4>
                    <div className={styles["interest-container"]}>
                      {collegeActivities.map((activity, idx) => (
                        <div
                          className={`${styles["interest-box"]} ${styles["editable"]}`}
                          key={`ca-${idx}`}
                        >
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="collapsible-internships">
                  <h3>Previous Internships</h3>
                  <ul className={styles["collapsible-list"]}>
                    {completedInternships.map((internship, idx) => (
                      <li key={idx} className={styles["collapsible-item"]}>
                        <button
                          className={styles["collapsible-toggle"]}
                          onClick={() =>
                            setExpandedInternship(
                              expandedInternship === idx ? null : idx
                            )
                          }
                          aria-expanded={expandedInternship === idx}
                        >
                          {internship.company_name} - {internship.job_title}
                          <span
                            className={
                              styles["arrow-icon"] +
                              " " +
                              (expandedInternship === idx
                                ? styles["rotate"]
                                : "")
                            }
                          >
                            ▼
                          </span>
                        </button>
                        <div
                          className={styles["collapsible-panel"]}
                          style={{
                            maxHeight:
                              expandedInternship === idx ? "300px" : "0",
                            overflow: "hidden",
                            transition:
                              "max-height 0.3s cubic-bezier(.23,1.12,.72,1.01)",
                          }}
                        >
                          {expandedInternship === idx && (
                            <div className={styles["collapsible-content"]}>
                              <h4>Responsibilities:</h4>
                              <ul>
                                {internship.responsibilities.map((resp, i) => (
                                  <li key={i}>{resp}</li>
                                ))}
                              </ul>
                              <h4>Duration: {internship.duration}</h4>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStudent;
