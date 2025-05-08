
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.tsx';
import Dashboard from './DashboardStudentPRO.tsx';
import Report from './Components/Reports/Report.tsx';
import VideoCall from './VideoCall.tsx';
import Profile from './Components/Profile/profile.jsx'
import Internships from './Components/Profile/Internship.jsx'
import Evaluation from './Components/Profile/evaluation.jsx'
import LiveWorkshop from './LiveWorkshop.tsx'
import RecordedWorkshop from './RecordedWorkshop.tsx'
import DashboardSCAD from './DashboardSCAD.tsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardPRO" element={<Dashboard />} />
        <Route path="/registerCompany" element={<registerCompany />} />
        <Route path="/call" element = {<LoginPage />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/VideoCall" element={<VideoCall/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Internships" element={<Internships />} />
        <Route path="/Evaluation" element={<Evaluation />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Workshops" element={<LiveWorkshop />} />
        <Route path="/RecWorkshop" element={<RecordedWorkshop />} />
        <Route path="/scaddashboard" element={<DashboardSCAD />} />
        <Route path="/RecWorkshop" element={<RecordedWorkshop />} />
      </Routes>
    </Router>

  );
}

export default App;
