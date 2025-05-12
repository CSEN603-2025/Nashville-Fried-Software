import React, { useState } from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx';
import styles from './Styles/WorkshopSCAD.module.css';
import addIcon from './assets/plus.svg'



const WorkshopSCAD = () => {


    const [workshops, setWorkshops] = useState([
        {
          name: "Artificial Intelligence in Modern Healthcare",
          startDateTime: "2025-06-10T09:00",
          endDateTime: "2025-06-10T12:00",
          speaker: "Dr. Lena Matthews",
          workshopDescription: "This workshop explores how AI is revolutionizing diagnostics, treatment personalization, and healthcare data analytics. Participants will gain insights into real-world applications and current research.",
          speakerBios: "Dr. Lena Matthews is a biomedical informatics researcher with over 15 years of experience in applying AI to healthcare systems. She leads the AI for Health Lab at MedTech University.",
          speakerAgenda: "Introduction to AI in healthcare, Case studies on diagnostic support, Interactive session on ethical considerations, Q&A session."
        },
        {
          name: "Cybersecurity Essentials for Developers",
          startDateTime: "2025-06-11T14:00",
          endDateTime: "2025-06-11T17:00",
          speaker: "Raj Patel",
          workshopDescription: "A hands-on session focused on secure coding practices, threat modeling, and common vulnerabilities. Ideal for developers wanting to level up their security mindset.",
          speakerBios: "Raj Patel is a cybersecurity consultant and former security engineer at SecureCorp. He has trained over 10,000 professionals in secure software design.",
          speakerAgenda: "Secure coding walkthrough, Live hacking demo, Group vulnerability analysis, Final security checklist review."
        },
        {
          name: "UX Design for Emerging Technologies",
          startDateTime: "2025-06-12T10:00",
          endDateTime: "2025-06-12T13:00",
          speaker: "Amina Zhao",
          workshopDescription: "Learn how to create intuitive and accessible UX for technologies like AR/VR, voice interfaces, and wearables. This session blends design theory with prototyping activities.",
          speakerBios: "Amina Zhao is a UX strategist at NextGen Interfaces and has led product design initiatives at multiple Fortune 500 companies.",
          speakerAgenda: "UX principles for emerging tech, Designing for voice and AR, Interactive prototype creation, Peer feedback loop."
        },
        {
          name: "Data Visualization and Analysis with D3.js",
          startDateTime: "2025-06-13T09:30",
          endDateTime: "2025-06-13T12:30",
          speaker: "Carlos Vega",
          workshopDescription: "Master the fundamentals of D3.js to build interactive, web-based visualizations that bring data stories to life.",
          speakerBios: "Carlos Vega is a data scientist and visualization expert. He teaches data storytelling at BrightTech Academy.",
          speakerAgenda: "Intro to D3.js, Binding data to DOM elements, Building dynamic charts, Hands-on project."
        },
        {
          name: "Introduction to Quantum Computing",
          startDateTime: "2025-06-14T11:00",
          endDateTime: "2025-06-14T14:00",
          speaker: "Dr. Nina El-Tayeb",
          workshopDescription: "A beginner-friendly session demystifying quantum computing concepts and how they apply to real-world problems.",
          speakerBios: "Dr. Nina El-Tayeb is a physicist at QubitLab and a leading educator in quantum technology applications.",
          speakerAgenda: "Quantum computing basics, Qubits and gates, Real-world use cases, Tools to get started."
        },
        {
          name: "Building Scalable Web Apps with React and Firebase",
          startDateTime: "2025-06-15T13:00",
          endDateTime: "2025-06-15T16:00",
          speaker: "Tomoko Ishikawa",
          workshopDescription: "Learn how to use Firebase with React to create responsive, real-time web applications that scale with users.",
          speakerBios: "Tomoko Ishikawa is a full-stack engineer at CloudWorks and a Firebase community contributor.",
          speakerAgenda: "Setting up Firebase, Auth and Firestore, Real-time updates with React hooks, Deploying your app."
        }
      ]);
      const [selectedWorkshop, setSelectedWorkshop] = useState(-1);
      const [showModal, setShowModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    startDateTime: "",
    endDateTime: "",
    speaker: "",
    workshopDescription: "",
    speakerBios: "",
    speakerAgenda: ""
  });

  const handleModalOpen = (workshop) => {
    setSelectedWorkshop(workshop);
    setFormData(workshops[workshop]);
    setIsEditing(false);
    setShowModal(true)
  };

  const handleAddModalOpen = () => {
    setSelectedWorkshop(-1);
    setFormData({
        name: "",
        startDateTime: "",
        endDateTime: "",
        speaker: "",
        workshopDescription: "",
        speakerBios: "",
        speakerAgenda: ""
      })
    setIsEditing(true);
    setShowModal(true)
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    console.log('deletingg')
    setWorkshops(workshops.filter(workshop => workshop !== workshops[selectedWorkshop]));
    setShowModal(false)
    setSelectedWorkshop(-1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("how i am here only god knows")
    if (selectedWorkshop >= 0) {
      setWorkshops(workshops.map(workshop =>
        workshop.name === workshops[selectedWorkshop].name ? formData : workshop
      ));
    } else {
      setWorkshops([...workshops, formData]);
    }
    setIsEditing(false)
    setSelectedWorkshop(-1);
    setShowModal(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles["cntnr"]}>
      <SideBar scad={true} active='Workshops'/>
      <div className={styles["main-display"]}>
        <div className={styles["header-row"]}>
          <h1 className={styles["page-title"]}>Workshops</h1>
        </div>
        <div className={styles["cards-container"]}>
          {workshops.map((workshop, index) => (
            <div key={index} className={styles["workshop-card"]}>
              <h3 className={styles["card-title"]}>{workshop.name}</h3>
              <p className={styles["card-speaker"]}>Speaker : {workshop.speaker}</p>
              <p className={styles["card-time"]}>Starts on : {new Date(workshop.startDateTime).toLocaleString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
              </p>
              <button className={styles["view-btn"]} onClick={() => {handleModalOpen(index)}}>View</button>
            </div>
          ))}
          <div className={styles["workshop-card"]}>
            <button className={styles["add-btn"]} onClick={() => {handleAddModalOpen()}}>
                <img src={addIcon} className={styles["add-icon"]}/>
            </button>
            
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal-content"]}>
            <div className={styles["modal-header"]}> 
            <h2>{isEditing ? "Edit Workshop" : "Workshop Details"}</h2>
            <button
            className={styles["close-button"]}
            onClick={() => {
                setShowModal(false);
            }}
            >
            ×
            </button>
            </div>
            <form onSubmit={handleFormSubmit}>
            <label>
                Workshop Name:
                <input
                    type="text"
                    name="name"
                    placeholder="e.g. AI in Modern Healthcare"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                />
                </label>

                <label>
                Speaker:
                <input
                    type="text"
                    name="speaker"
                    placeholder="e.g. Dr. Lena Matthews"
                    value={formData.speaker}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                />
                </label>

                <div className={styles["dates"]}>
                <label>
                    Start Time:
                    <input
                    type="datetime-local"
                    name="startDateTime"
                    value={formData.startDateTime}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                    />
                </label>
                <label>
                    End Time:
                    <input
                    type="datetime-local"
                    name="endDateTime"
                    value={formData.endDateTime}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                    />
                </label>
                </div>

                <label>
                Description:
                <textarea
                    name="workshopDescription"
                    placeholder="Brief overview of what the workshop will cover"
                    value={formData.workshopDescription}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
                </label>

                <label>
                Speaker Bio:
                <textarea
                    name="speakerBios"
                    placeholder="Professional background and experience of the speaker"
                    value={formData.speakerBios}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
                </label>

                <label>
                Workshop Agenda:
                <textarea
                    name="speakerAgenda"
                    placeholder="Detailed schedule or topics the speaker will cover"
                    value={formData.speakerAgenda}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
                </label>

              <div className={styles["modal-actions"]}>
                
                {isEditing ? (
                    <button className={styles['save-button']} type="submit">Save</button>
                ) : (
                  <>
                    <button className={styles['save-button']} type="submit" disabled={!isEditing}>Save</button>
                    <button className={styles['save-button']} type="button" onClick={handleEditClick}>Edit</button>
                    <button className={styles['del-button']} type='button' onClick={handleDeleteClick}>Delete</button>
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

export default WorkshopSCAD;