import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.tsx';
import Dashboard from './DashboardStudentPRO.tsx';
function App() {
  let VideoCall;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardPRO" element={<Dashboard />} />
        <Route path="/registerCompany" element={<registerCompany />} />
        <Route path="/call" element = {<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
