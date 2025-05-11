<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage.tsx";
import Dashboard from "./DashboardStudentPRO.tsx";
import Report from "./Components/Reports/Report.tsx";
import VideoCall from "./VideoCall.tsx";
import Profile from "./Components/Profile/profile.jsx";
import Internships from "./Components/Profile/Internship.jsx";
import Evaluation from "./Components/Profile/evaluation.jsx";
import LiveWorkshop from "./LiveWorkshop.tsx";
import RecordedWorkshop from "./RecordedWorkshop.tsx";
import CompanyDashboard from "./CompanyDashboard.jsx";
import ViewInternship from "./Components/Profile/viewInternship.jsx";
import ViewCompletedInternship from "./Components/Profile/viewCompletedInternship.jsx";
import Applications from "./Components/Applications/Applications.jsx";
import ViewApplicant from "./Components/Applications/ViewApplicant.jsx";
import EvaluateIntern from "./Components/Applications/EvaluateIntern.jsx";
=======

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
import RegisterCompany from './Components/Registration/RegisterCompany.tsx';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
<<<<<<< Updated upstream
        <Route path="/dashboard" element={<Dashboard pro={false} />} />
        <Route path="/dashboardPRO" element={<Dashboard pro={true} />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/registerCompany" element={<registerCompany />} />
        <Route path="/call" element={<LoginPage />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/VideoCall" element={<VideoCall />} />
        <Route path="/Profile" element={<Profile pro={false} />} />
        <Route path="/ProfilePro" element={<Profile pro={true} />} />
=======
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardPRO" element={<Dashboard />} />
        <Route path="/registerCompany" element={<registerCompany />} />
        <Route path="/call" element = {<LoginPage />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/VideoCall" element={<VideoCall/>} />
        <Route path="/Profile" element={<Profile/>} />
>>>>>>> Stashed changes
        <Route path="/Internships" element={<Internships />} />
        <Route path="/Evaluation" element={<Evaluation />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Workshops" element={<LiveWorkshop />} />
        <Route path="/RecWorkshop" element={<RecordedWorkshop />} />
<<<<<<< Updated upstream
        <Route path="/viewInternship/:id" element={<ViewInternship />} />
        <Route
          path="/viewCompletedInternship/:id"
          element={<ViewCompletedInternship />}
        />
        <Route path="/Applications" element={<Applications />} />
        <Route path="/viewApplicant/:id" element={<ViewApplicant />} />
        <Route path="/evaluateIntern" element={<EvaluateIntern />} />
      </Routes>
    </Router>
=======
        <Route path="/RegisterCompany" element={<RegisterCompany />} />
      </Routes>
    </Router>

>>>>>>> Stashed changes
  );
}

export default App;
