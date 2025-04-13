import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PatientForm = () => {
  const { state } = useLocation();
  const selectedDoc = state?.selectedDoc;

  const [formData, setFormData] = useState({
    name: '',
    sick: '',
    age: '',
    summary: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pdf', { state: { selectedDoc, formData } });
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (!selectedDoc) {
    return null;
  }

  return (
    <center>
      <div>
        <div>
          <p>Name: {selectedDoc.name}</p>
          <p>Hospital: {selectedDoc.hospital}</p>
          <p>Specialisation: {selectedDoc.specialisation}</p>
        </div>
        <br />
        <h2>Fill Your Details</h2>
        <form onSubmit={handleSubmit}>
          <h4>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter your name' /></h4>
          <h4>Sick: <input type="text" name="sick" value={formData.sick} onChange={handleChange} placeholder='Sickness name' /></h4>
          <h4>Age: <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder='Enter your Age' /></h4>
          <h4>Summary: <textarea name="summary" value={formData.summary} onChange={handleChange} placeholder='Enter your summary here...' /></h4>
          <button type="button" onClick={handleCancel}>Cancel</button>      <button type="submit">Submit</button>
         
        </form>
      </div>
    </center>
  );
};

export default PatientForm;
