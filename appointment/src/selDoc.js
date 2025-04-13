import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelDoc = ({ selectedDoc }) => {
  const navigate = useNavigate();

  if (!selectedDoc){
    return null;
  } 

  const handleBook = () => {
    navigate('/form', { state: { selectedDoc } });
  };

  return (
    <div>
      <p>Name: {selectedDoc.name}</p>
      <p>Hospital: {selectedDoc.hospital}</p>
      <p>Specialisation: {selectedDoc.specialisation}</p>
      <p>Contact: {selectedDoc.contact}</p>
      <p>Timing: {selectedDoc.timing}</p>
      <button onClick={handleBook}>Book Appointment</button>
    </div>
  );
};

export default SelDoc;
