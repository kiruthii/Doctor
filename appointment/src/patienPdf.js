import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';



const PatientPdf = () => {
  const { state } = useLocation();
  const { selectedDoc, formData } = state || {};
  const navigate = useNavigate();
  if (!selectedDoc || !formData) 
    return <p>No data provided</p>;
const handleClick=()=>{
    navigate('/success');
}
  return (
    <center>
    <div>
      <h2>Patient Summary</h2>
      <h4>Doctor Information:</h4>
      <p>Name: {selectedDoc.name}</p>
      <p>Hospital: {selectedDoc.hospital}</p>
      <p>Specialisation: {selectedDoc.specialisation}</p>

      <h4>Patient Information:</h4>
      <p>Name: {formData.name}</p>
      <p>Sick: {formData.sick}</p>
      <p>Age: {formData.age}</p>
      <p>Summary: {formData.summary}</p>
      <button onClick={handleClick}>ok</button>
    </div>
    </center>
  );
};

export default PatientPdf;
