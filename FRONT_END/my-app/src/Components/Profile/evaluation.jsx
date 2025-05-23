import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import styles from "../../Styles/WorkshopSCAD.module.css";
import addIcon from "../../assets/plus.svg";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Evaluation = ({ pro }) => {
  const [workshops, setWorkshops] = useState([
    {
      company_name: "TechNova Inc.",
      evaluation: "Great work environment and supportive team.",
      recommend: "yes",
      industry: "Software Development",
      role: "Frontend Developer Intern",
    },
    {
      company_name: "InnoCore Solutions",
      evaluation: "Challenging workload with little guidance.",
      recommend: "no",
      industry: "IT Consulting",
      role: "Business Analyst Intern",
    },
    {
      company_name: "BrightLabs",
      evaluation: "Innovative projects and learning opportunities.",
      recommend: "yes",
      industry: "Biotech",
      role: "Data Science Intern",
    },
    {
      company_name: "QuantumSoft",
      evaluation: "Outdated tools and poor management.",
      recommend: "no",
      industry: "Enterprise Software",
      role: "Software Engineer Intern",
    },
    {
      company_name: "NeoEdge Technologies",
      evaluation: "Good mentorship and friendly colleagues.",
      recommend: "yes",
      industry: "Cybersecurity",
      role: "Security Analyst Intern",
    },
    {
      company_name: "DataSphere Corp.",
      evaluation: "Long hours but rewarding experience.",
      recommend: "yes",
      industry: "Big Data Analytics",
      role: "Data Engineer Intern",
    },
  ]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    company_name: "",
    evaluation: "",
    recommend: "",
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
      company_name: "",
      evaluation: "",
      recommend: "",
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
          workshop.company_name === workshops[selectedWorkshop].company_name
            ? formData
            : workshop
        )
      );
      setShowModal(false);
      setError(false);
    } else {
      if (
        !workshops.map((e) => e.company_name).includes(formData.company_name)
      ) {
        setWorkshops([...workshops, formData]);
        setShowModal(false);
        setError(false);
      } else {
        setError(true);
        setErrorMessage("Company Name already exists");
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
              <h3 className={styles["card-title"]}>{workshop.company_name}</h3>
              <p className={styles["card-speaker"]}>
                Industry : {workshop.industry}
              </p>
              <p className={styles["card-speaker"]}>Role : {workshop.role}</p>
              <button
                className={styles["view-btn"]}
                onClick={() => {
                  handleModalOpen(index);
                }}
              >
                View Evaluation
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
                Company Name:
                <input
                  type="text"
                  name="company_name"
                  placeholder="e.g. TechNova Inc."
                  value={formData.company_name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </label>
              <label>
                Evaluation:
                <textarea
                  name="evaluation"
                  placeholder="Evaluation of the company"
                  value={formData.evaluation}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </label>

              <div className={styles["recommend-section"]}>
                <span>Would you recommend this company?</span>
                <label>
                  <input
                    id={styles['yes']}
                    type="radio"
                    name="recommend"
                    value="yes"
                    checked={formData.recommend === "yes"}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  Yes
                </label>
                <label>
                  <input
                  id={styles['no']}
                    type="radio"
                    name="recommend"
                    value="no"
                    checked={formData.recommend === "no"}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                  No
                </label>
              </div>

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

export default Evaluation;
