import React, { useState } from 'react';
import '../ComponentStyles/RegisterCompany.css';

function RegisterCompany() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
