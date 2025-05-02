import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/Generic/LoginPage.tsx';
import Dashboard from './DashboardStudent.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardPRO" element={<Dashboard />} />
        <Route path="/registerCompany" element={<registerCompany />} />
      </Routes>
    </Router>
  );
}

export default App;
