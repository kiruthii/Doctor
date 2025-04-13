import React,{useState} from 'react';
import SelDoc from './selDoc';
const DoctorDetails=()=>{
 const [selectedHospital,setHospital]=useState('');
 const [selectedspec,setSpecialisation]=useState('');
 const [selectedDoc,setDoctor]=useState(null);
 
  const doctors = [
    {
      name: 'Dr. A',
      hospital: 'abc hospital',
      specialisation: 'General',
      contact: '0000000000',
      timing: '9AM - 1PM',
    },
    {
      name: 'Dr. B',
      hospital: 'Apollo hospital',
      specialisation: 'Psychologist',
      contact: '8888888888',
      timing: '2PM - 6PM',
    },
    {
      name: 'Dr. C',
      hospital: 'xyz hospital',
      specialisation: 'Gynecologist',
      contact: '99999999999',
      timing: '10AM - 2PM',
    },
    {
      name: 'Dr.D',
      hospital: 'abc hospital',
      specialisation: 'Cardiologist',
      contact: '6666666666',
      timing: '4PM - 8PM',
    },
    {
      name: 'Dr. E',
      hospital: 'xyz hospital',
      specialisation: 'Psychologist',
      contact: '2222222222',
      timing: '11AM - 3PM',
    },
    {
      name: 'Dr. F',
      hospital: 'Apollo hospital',
      specialisation: 'Dentist',
      contact: '3333333333',
      timing: '1PM - 5PM',
    },
  ]; 


  const fildoc=doctors.filter((doc)=>
  doc.hospital.toLowerCase().includes(selectedHospital.toLowerCase()) && doc.specialisation.toLowerCase().includes(selectedspec.toLowerCase())
  );

  return(
    <center>
  <div>
   <input type="text" placeholder="search specialisation" value={selectedspec} onChange={(e)=>{setSpecialisation(e.target.value)}}></input>  <select value={selectedHospital} onChange={(e)=>setHospital(e.target.value)}><option value={""}>Select</option><option value={"abc hospital"}>abc hospital</option><option value={"xyz hospital"}>xyz hospital</option><option value={"Apollo hospital"}>Apollo hospital</option></select>

    {
      fildoc.map((doctors,i)=>(
        <div key={i} value={selectedDoc} onClick={()=>setDoctor(doctors)}>
        <li>{doctors.name}<br/></li>
        </div>))
    }
   
    <SelDoc selectedDoc={selectedDoc} />
  </div>
  </center>)
}
 export default DoctorDetails;

 
  











  

