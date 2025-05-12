import React, { useState } from 'react';
import '../ComponentStyles/RegisterCompany.css';
import { useNavigate } from 'react-router-dom';

function RegisterCompany() {
  const navigator = useNavigate();
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [companySize, setCompanySize] = useState('small');
  const [companyLogo, setCompanyLogo] = useState('Upload Company Logo');

  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const handleRegister = () => {
    // Validation for empty fields
    if (!companyEmail || !companyName || !industry || !companySize || !companyLogo) {
      setErrorMessage('All fields must be filled out.');
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(companyEmail)) {
      setErrorMessage('Please enter a valid Company Email.');
      return;
    }


    // Check if documents are uploaded
    if (!documentsUploaded) {
      setErrorMessage('Please upload your documents before registering.');
      return;
    }

    // If all validations pass, set registration state
    setIsRegistered(true);
    setErrorMessage('');
    
    // Display simple notification for email checking
    setNotification('Check your Email for Application Status!');

    // Hide the notification after 5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 5000);

    setTimeout(() => navigator('/'), 2000);
  };

  const handleUploadDocuments = () => {
    setDocumentsUploaded(true);
    setErrorMessage('');
  };

  const handleUploadLogo = () =>{
    setCompanyLogo("Uploading...")
    setTimeout(() =>  setCompanyLogo("Uploaded!"), 1000)
   
  }

  return (
    <div className="register-container">
      {notification && (
        <div className="simple-notification">
          {notification}
        </div>
      )}
      <div className="register-box">
        <h2 className="register-title">Register</h2>
        <div className="register-fields">
          <div className="input-group">
            <label>Company Email</label>
            <input
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
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
            <select 
            name="companySize" id="" 
            onChange = {(e) => setCompanySize(e.target.value)}
            className="register-input">
              <option value="small">Small (0-50)</option>
              <option value="medium">Medium (50-100)</option>
              <option value="large">Large (100-500)</option>
              <option value="corporate">Corporate (500++)</option>
            </select>
          </div>
          <div className="input-group">
            <label>Company Logo</label>
            <button onClick={handleUploadLogo}>{companyLogo}</button>
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
