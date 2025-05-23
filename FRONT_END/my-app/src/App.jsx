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
import ViewStudent from "./Components/companyTest/ViewStudent.jsx";
import DashboardSCAD from "./DashboardSCAD.tsx";
import Students from "./Students.tsx";
import ReportSCAD from "./ReportSCAD.tsx";
import WorkshopSCAD from "./WorkshopSCAD.tsx";
import CompanySCAD from "./CompanySCAD.tsx";
import AppointmentsPage from "./Appointments.tsx";
import Assessments from "./Components/Assessment/AssessmentForm.jsx";
import RegisterCompany from "./Components/Registration/RegisterCompany.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard pro={false} />} />
        <Route path="/dashboardPRO" element={<Dashboard pro={true} />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/call" element={<LoginPage />} />
        <Route path="/VideoCall" element={<VideoCall />} />
        <Route path="/Profile" element={<Profile pro={false} />} />
        <Route path="/ProfilePro" element={<Profile pro={true} />} />
        <Route path="/Internships" element={<Internships isStudent={true} />} />
        <Route
          path="/InternshipsPro"
          element={<Internships isStudent={true} pro={true} />}
        />
        <Route
          path="/Internshipscad"
          element={<Internships isStudent={false} />}
        />
        <Route path="/Evaluate" element={<Evaluation pro={false} />} />
        <Route path="/EvaluatePro" element={<Evaluation pro={true} />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/ReportPro" element={<Report pro={true} />} />
        <Route path="/Workshops" element={<LiveWorkshop />} />
        <Route path="/RecWorkshop" element={<RecordedWorkshop />} />
        <Route path="/viewInternship/:id" element={<ViewInternship />} />
        <Route
          path="/viewCompletedInternship/:id"
          element={<ViewCompletedInternship />}
        />
        <Route path="/Applications" element={<Applications />} />
        <Route path="/viewApplicant/:id" element={<ViewApplicant />} />
        <Route
          path="/evaluateIntern"
          element={<EvaluateIntern pro={false} />}
        />
        <Route
          path="/evaluateInternPro"
          element={<EvaluateIntern pro={false} />}
        />
        <Route path="/viewStudent/:id" element={<ViewStudent />} />
        <Route
          path="/facultydashboard"
          element={<DashboardSCAD scad={false} />}
        />
        <Route path="/scaddashboard" element={<DashboardSCAD scad={true} />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/ReportSCAD" element={<ReportSCAD scad={true} />} />
        <Route path="/ReportFaculty" element={<ReportSCAD scad={false} />} />
        <Route path="/WorkshopSCAD" element={<WorkshopSCAD />} />
        <Route path="/CompanySCAD" element={<CompanySCAD />} />
        <Route path="/ViewStudent" element={<ViewStudent />} />
        <Route
          path="/Internshipcompany"
          element={<Internships isStudent={false} isCompany={true} />}
        />

        <Route path="/Appointments" element={<AppointmentsPage />} />
        <Route path="/Assessments" element={<Assessments />} />
        <Route path="/RegisterCompany" element={<RegisterCompany />} />
      </Routes>
    </Router>
  );
}

export default App;
