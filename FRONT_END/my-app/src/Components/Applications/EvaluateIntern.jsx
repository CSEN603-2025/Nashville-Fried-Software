import React, { useState } from "react";
import SideBar from "../Dashboard/SideBarCompany";
import styles from "../../Styles/WorkshopSCAD.module.css";
import addIcon from "../../assets/plus.svg";
import { faL } from "@fortawesome/free-solid-svg-icons";

const EvaluateIntern = ({ pro }) => {
  const [workshops, setWorkshops] = useState([
    {
      student_name: "Ava Johnson",
      evaluation:
        "Ava was proactive and consistently met deadlines. Strong communication skills.",
      role: "Marketing Intern",
      major: "Business Administration",
    },
    {
      student_name: "Liam Patel",
      evaluation:
        "Liam demonstrated excellent problem-solving abilities and adapted quickly to new tasks.",
      role: "Software Developer Intern",
      major: "Computer Science",
    },
    {
      student_name: "Sophia Martinez",
      evaluation:
        "Sophia showed great initiative and worked well independently and with the team.",
      role: "UX Design Intern",
      major: "Graphic Design",
    },
    {
      student_name: "Noah Kim",
      evaluation:
        "Noah struggled initially but showed improvement by the end of the internship.",
      role: "IT Support Intern",
      major: "Information Technology",
    },
    {
      student_name: "Isabella Thompson",
      evaluation:
        "Isabella was highly dependable and delivered high-quality work consistently.",
      role: "Data Analyst Intern",
      major: "Statistics",
    },
    {
      student_name: "Elijah Brown",
      evaluation:
        "Elijah was enthusiastic and contributed positively to team discussions.",
      role: "Product Management Intern",
      major: "Management",
    },
  ]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    student_name: "",
    evaluation: "",
    role: "",
    major: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleModalOpen = (workshop) => {
    setSelectedWorkshop(workshop);
    setFormData(workshops[workshop]);
    setError(false);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleAddModalOpen = () => {
    setSelectedWorkshop(-1);
    setFormData({
      student_name: "",
      evaluation: "",
    });
    setError(false);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleEditClick = () => {
    setError(false);
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    console.log("deletingg");
    setWorkshops(
      workshops.filter((workshop) => workshop !== workshops[selectedWorkshop])
    );
    setShowModal(false);
    setError(false);
    setSelectedWorkshop(-1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("how i am here only god knows");
    if (selectedWorkshop >= 0) {
      setWorkshops(
        workshops.map((workshop) =>
          workshop.student_name === workshops[selectedWorkshop].student_name
            ? formData
            : workshop
        )
      );
      setShowModal(false);
      setError(false);
    } else {
      if (
        !workshops.map((e) => e.student_name).includes(formData.student_name)
      ) {
        setWorkshops([...workshops, formData]);
        setShowModal(false);
        setError(false);
      } else {
        setError(true);
        setErrorMessage("Student Name already exists");
        setTimeout(() => {
          setShowModal(false);
          setError(false);
        }, 1000);
      }
    }
    setIsEditing(false);
    setSelectedWorkshop(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles["cntnr"]}>
      <SideBar scad={true} active="Evaluations" pro={pro} />
      <div className={styles["main-display"]}>
        <div className={styles["header-row"]}>
        </div>
        <div className={styles["cards-container"]}>
          {workshops.map((workshop, index) => (
            <div key={index} className={styles["workshop-card"]}>
              <h3 className={styles["card-title"]}>{workshop.student_name}</h3>
              <p className={styles["card-speaker"]}>Role : {workshop.role}</p>
              <p className={styles["card-speaker"]}>Major : {workshop.major}</p>
              <button
                className={styles["view-btn"]}
                onClick={() => {
                  handleModalOpen(index);
                }}
              >
                View
              </button>
            </div>
          ))}
          <div className={styles["workshop-card"]}>
            <button
              className={styles["add-btn"]}
              onClick={() => {
                handleAddModalOpen();
              }}
            >
              <img src={addIcon} className={styles["add-icon"]} />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}>
              <h2>
                {isEditing && selectedWorkshop >= 0
                  ? "Edit Evaluation"
                  : isEditing
                  ? "New Evaluation"
                  : "Evaluation Details"}
              </h2>
              <button
                className={styles["close-button"]}
                onClick={() => {
                  setShowModal(false);
                  setError(true);
                  setErrorMessage("");
                }}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <label>
                Student Name:
                <input
                  type="text"
                  name="student_name"
                  placeholder="e.g. John Pork."
                  value={formData.student_name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </label>
              <label>
                Role:
                <input
                  type="text"
                  name="role"
                  placeholder="e.g. Marketing Intern."
                  value={formData.role}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </label>
              <label>
                Major:
                <input
                  type="text"
                  name="major"
                  placeholder="e.g. BI."
                  value={formData.major}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </label>
              <label>
                Evaluation:
                <textarea
                  name="evaluation"
                  placeholder="Evaluation of the student"
                  value={formData.evaluation}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </label>

              {error && (
                <p className={styles["error-message"]}>{errorMessage}</p>
              )}
              <div className={styles["modal-actions"]}>
                {isEditing ? (
                  <button className={styles["save-button"]} type="submit">
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className={styles["save-button"]}
                      type="submit"
                      disabled={!isEditing}
                    >
                      Save
                    </button>
                    <button
                      className={styles["save-button"]}
                      type="button"
                      onClick={handleEditClick}
                    >
                      Edit
                    </button>
                    <button
                      className={styles["del-button"]}
                      type="button"
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluateIntern;
