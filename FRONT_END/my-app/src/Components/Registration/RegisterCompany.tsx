import React, { useState } from 'react';
import '../ComponentStyles/RegisterCompany.css';

function RegisterCompany() {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');

  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (!email || !companyName || !industry || !companySize || !companyLogo) {
      setErrorMessage('All fields must be filled out.');
      return;
    }

    if (!documentsUploaded) {
      setErrorMessage('Please upload your documents before registering.');
      return;
    }

    setIsRegistered(true);
    setErrorMessage('');
  };

  const handleUploadDocuments = () => {
    setDocumentsUploaded(true);
    setErrorMessage('');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <div className="register-fields">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
            />
          </div>
          <div className="input-group">
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="register-input"
            />
          </div>
          <div className="input-group">
            <label>Industry</label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="register-input"
            />
          </div>
          <div className="input-group">
            <label>Company Size</label>
            <input
              type="text"
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              className="register-input"
            />
          </div>
          <div className="input-group">
            <label>Company Logo</label>
            <input
              type="text"
              value={companyLogo}
              onChange={(e) => setCompanyLogo(e.target.value)}
              className="register-input"
              placeholder="Image URL or file name"
            />
          </div>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="register-buttons">
          <button className="action-button" onClick={handleUploadDocuments}>
            {documentsUploaded ? 'Documents Uploaded' : 'Upload Documents'}
          </button>
          <button className="action-button" onClick={handleRegister}>
            {isRegistered ? 'Registered' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterCompany;
