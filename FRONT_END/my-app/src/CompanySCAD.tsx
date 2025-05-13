import React, { useState } from "react";
import SideBar from './Components/Dashboard/SideBarSCAD.tsx';
import styles from './Styles/CompanySCAD.module.css';
import { replace } from "react-router-dom";
import {useNavigate} from 'react-router-dom'



const CompanySCAD = () => {
    const navigator = useNavigate()
    const [statusFilter, setStatusFilter] = useState('-1')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [companies, setCompanies] = useState([
        {
          name: "TechNova",
          industry: "ComputerScience",
          description: "TechNova is a global leader in developing scalable software solutions for cloud infrastructure, AI systems, and cybersecurity platforms.",
          founder: "Sarah Mitchell",
          foundedIn: 2012,
          location: "San Francisco, USA"
        },
        {
          name: "BuildRight",
          industry: "Engineering",
          description: "BuildRight specializes in innovative civil and mechanical engineering projects, focusing on sustainable infrastructure and smart city technologies.",
          founder: "Ahmed El-Masry",
          foundedIn: 2005,
          location: "Cairo, Egypt"
        },
        {
          name: "CreativePulse",
          industry: "Arts",
          description: "CreativePulse is a design and media agency that collaborates with brands worldwide to craft engaging visual content and immersive experiences.",
          founder: "Lena Chen",
          foundedIn: 2017,
          location: "Berlin, Germany"
        },
        {
          name: "PharmaWell",
          industry: "Pharmacy",
          description: "PharmaWell develops and distributes advanced pharmaceutical products, with a focus on affordable healthcare and rare disease treatment.",
          founder: "Dr. Hossam Farid",
          foundedIn: 1998,
          location: "Toronto, Canada"
        },
        {
          name: "MarketSphere",
          industry: "Business",
          description: "MarketSphere is a consultancy and analytics firm helping enterprises optimize operations through strategic planning and market insights.",
          founder: "Olivia Brown",
          foundedIn: 2010,
          location: "London, UK"
        },
        {
          name: "BioCore Labs",
          industry: "Biotechnology",
          description: "BioCore Labs pioneers advancements in genetic engineering and synthetic biology to revolutionize agriculture and medical diagnostics.",
          founder: "Jonas Richter",
          foundedIn: 2013,
          location: "Zurich, Switzerland"
        },
        {
          name: "PixelForge",
          industry: "Design",
          description: "PixelForge is a creative studio known for blending art and technology to create compelling digital products, UI/UX designs, and brand identities.",
          founder: "Ananya Kapoor",
          foundedIn: 2016,
          location: "Mumbai, India"
        },
        {
          name: "FinTrust Capital",
          industry: "Finance",
          description: "FinTrust Capital provides data-driven financial solutions, investment planning, and digital banking innovations to global clients.",
          founder: "George Ibrahim",
          foundedIn: 2001,
          location: "Dubai, UAE"
        },
      ]);
      
    
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
      };
      
      const handleStatusFilterChange = (e) => {
        const value = e.target.value;
        setStatusFilter(value);
      };

      const handleModalOpen = (index) => {
        setSelectedCompany(companies[index]);
        setIsModalOpen(true);
      };
      
      const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedCompany(null);
      };

      const handleRemoveCompany = () => {
        setCompanies((prevCompanies) =>
          prevCompanies.filter((company) => company !== selectedCompany)
        );
        setIsModalOpen(false);
        setSelectedCompany(null);
      };

  return (
    <div className={styles["cntnr"]}>
      <SideBar scad={true} active='Companies'/>
      <div className={styles['main-display']}>
      <h1 className={styles['page-title']}>Applying companies</h1>
        <div className={styles['header-row']}>
            <input
                type="text"
                placeholder="Enter company name"
                value={searchQuery}
                onChange={handleSearchChange}
                className={styles['search-bar']}
            />

            <select
            value={statusFilter}
            onChange={handleStatusFilterChange}
            className={styles['duration-filter']}
            >
            <option value="-1">All Industries</option>
            <option value="Engineering">Engineering</option>
            <option value="ComputerScience">Computer Science</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
            </select>
        </div>

        <div className={styles["cards-container"]}>
            {companies.filter((company) => {
                    const matchesIndustry = statusFilter === "-1" || company.industry === statusFilter;
                    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesIndustry && matchesSearch;
                }).map((company, index) => (
                <div key={index} className={styles["company-card"]}>
                <h3 className={styles["card-title"]}>{company.name}</h3>
                <p className={styles["card-speaker"]}>Industry: {company.industry}</p>
                <p className={styles["card-speaker"]}>Location: {company.location}</p>
                <button className={styles["view-btn"]} onClick={() => {handleModalOpen(index)}}>View</button>
                </div>
            ))}
            {isModalOpen && selectedCompany && (
                <div className={styles["modal-overlay"]}>
                    <div className={styles["modal"]}>
                    <div className={styles['modal-header']}>
                        <h2 className={styles["modal-title"]}>{selectedCompany.name}</h2>
                        <button className={styles["close-btn"]} onClick={handleModalClose}>×</button>
                    </div>
                    <p><strong>Industry:</strong> {selectedCompany.industry}</p>
                    <hr className={styles["break"]}/>
                    <p><strong>Location:</strong> {selectedCompany.location}</p>
                    <hr className={styles["break"]}/>
                    <p><strong>Description:</strong> {selectedCompany.description}</p>
                    <hr className={styles["break"]}/>
                    <p><strong>Founder:</strong> {selectedCompany.founder}</p>
                    <hr className={styles["break"]}/>
                    <p><strong>Founded in:</strong> {selectedCompany.foundedIn}</p>
                    <hr className={styles["break"]}/>
                    <div className={styles["modal-buttons"]}>
                        <button onClick={handleRemoveCompany} className={styles["accept-btn"]}>Accept</button>
                        <button onClick={handleRemoveCompany} className={styles["reject-btn"]}>Reject</button>
                    </div>
                    </div>
                </div>
                )}
        </div>

      </div>
    </div>
  );
};

export default CompanySCAD;
