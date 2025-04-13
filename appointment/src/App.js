import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorDetails from './doctorDetails';
import PatientForm from './patientForm';
import PatientPdf from './patienPdf';
import SuccessPage from './SuccessPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DoctorDetails />} />
        <Route path="/form" element={<PatientForm />} />
        <Route path="/pdf" element={<PatientPdf />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
