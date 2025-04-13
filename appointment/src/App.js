// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import DoctorAppointment from './doctorAppointment';
// import Form from './patientForm';
// const App=()=>{
  
//   return(
//     <div>
//      {/* <DoctorAppointment/> */}
//      <Form/>
//     </div>
//   )
// }

// export default App;




// import React, { useState } from 'react';

// const DoctorAppointment = () => {
//   const [selectedHospital, setSelectedHospital] = useState('');
//   const [specialisation, setSpecialisation] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState(null);

//   // Sample doctor data with details
//   const doctors = [
//     {
//       name: 'Dr. Asha',
//       hospital: 'Apollo',
//       specialisation: 'Gynecologist',
//       contact: 'asha@apollo.com',
//       experience: '10 years',
//       timing: '9AM - 1PM',
//     },
//     {
//       name: 'Dr. Ravi',
//       hospital: 'Apollo',
//       specialisation: 'Psychologist',
//       contact: 'ravi@apollo.com',
//       experience: '7 years',
//       timing: '2PM - 6PM',
//     },
//     {
//       name: 'Dr. Meena',
//       hospital: 'KMS',
//       specialisation: 'Gynecologist',
//       contact: 'meena@kms.com',
//       experience: '8 years',
//       timing: '10AM - 2PM',
//     },
//     {
//       name: 'Dr. Karan',
//       hospital: 'KMS',
//       specialisation: 'Cardiologist',
//       contact: 'karan@kms.com',
//       experience: '12 years',
//       timing: '4PM - 8PM',
//     },
//     {
//       name: 'Dr. Priya',
//       hospital: 'GH',
//       specialisation: 'Psychologist',
//       contact: 'priya@gh.com',
//       experience: '6 years',
//       timing: '11AM - 3PM',
//     },
//     {
//       name: 'Dr. Rahul',
//       hospital: 'Vinayaga',
//       specialisation: 'Dentist',
//       contact: 'rahul@vinayaga.com',
//       experience: '5 years',
//       timing: '1PM - 5PM',
//     },
//   ];

//   const filteredDoctors = doctors.filter(
//     (doc) =>
//       doc.hospital.toLowerCase() === selectedHospital.toLowerCase() &&
//       doc.specialisation.toLowerCase().includes(specialisation.toLowerCase())
//   );

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Doctor Appointment</h1>
//       <h2>Hello! kiruthika</h2>

//       <input
//         type="text"
//         placeholder="Search by Specialisation"
//         value={specialisation}
//         onChange={(e) => setSpecialisation(e.target.value)}
//         style={{ marginRight: '10px', padding: '8px' }}
//       />

//       <select
//         value={selectedHospital}
//         onChange={(e) => {
//           setSelectedHospital(e.target.value);
//           setSelectedDoctor(null); // clear doctor when hospital changes
//         }}
//         style={{ padding: '8px' }}
//       >
//         <option value="">Select hospital</option>
//         <option value="Apollo">Apollo</option>
//         <option value="KMS">KMS</option>
//         <option value="GH">GH</option>
//         <option value="Vinayaga">Vinayaga</option>
//       </select>

//       <div style={{ marginTop: '20px' }}>
//         {filteredDoctors.length > 0 ? (
//           filteredDoctors.map((doc, index) => (
//             <p
//               key={index}
//               style={{ cursor: 'pointer', color: 'blue' }}
//               onClick={() => setSelectedDoctor(doc)}
//             >
//               {doc.name} - {doc.specialisation}
//             </p>
//           ))
//         ) : (
//           <p>No doctors found.</p>
//         )}
//       </div>

//       {/* Doctor Details Section */}
//       {selectedDoctor && (
//         <div >
//           <p><strong>Name:</strong> {selectedDoctor.name}</p>
//           <p><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
//           <p><strong>Specialisation:</strong> {selectedDoctor.specialisation}</p>
//           <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
//           <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
//           <p><strong>Timing:</strong> {selectedDoctor.timing}</p>
//           <div><button >Book Appointment</button></div>
//         </div>
        
//       )}
      
//     </div>
//   );
// };


// export default DoctorAppointment;
// import React from 'react';
// const App=()=>{
//   const student=[
//     {name:"kiruthika",department:"CSE"},{name:"Seshan",department:"ECE"}
//   ]
//   const searchName="kiruthika";
//   const searchDepartment="CSE";
//   const hi=student.find((student)=>student.name === searchName);
//   console.log("hello kiruthika");
//   return(
//     <div></div>

//   )
// }
// export default App;



// import React,{useState} from 'react';
// const App=()=>{
//   const students=[
//   { name: "Arun", department: "Computer Science", year: "3rd" },
//   { name: "Meena", department: "Electronics", year: "2nd" },
//   { name: "Vikram", department: "Computer Science", year: "2nd" },
//   { name: "Sara", department: "Mechanical", year: "3rd" },
//   ];
//   const [searchdep,setSearchDep]=useState('');
//   const [searchYear,setSearchYear]=useState('');
//   const [selectedStudent,setSelectedStudent]=useState('');
//   const filStu=students.filter((stu)=>stu.department.toLowerCase().includes(searchdep.toLowerCase()) && stu.year.toLowerCase().includes(searchYear.toLowerCase()));
  
 
//   return(
//     <div>
      
//       <input type="text" placeholder="Search dep " value={searchdep} onChange={(e)=>setSearchDep(e.target.value)}></input>   <select value={searchYear} onChange={(e)=>setSearchYear(e.target.value)} ><option value="">select</option><option value="2nd">2nd</option><option value="3rd">3rd</option></select>
//       {filStu.map((student,i)=>
//       (<div value={selectedStudent} onChange={(e)=>setSelectedStudent(e.target.value)}><p key={i}>{student.name}</p>
//       </div>
//       ))}
      

      
    
//     </div>
//   )
// }
// export default App;

// import React from 'react';
// const App=()=>{
//   const students=[
//        { name: "Arun", department: "Computer Science", year: "3rd" },
//        { name: "Meena", department: "Electronics", year: "2nd" },
//        { name: "Vikram", department: "Computer Science", year: "2nd" },
//        { name: "Sara", department: "Mechanical", year: "3rd" },
//        ];
//   return(
//     <div>
//       {students.map((students,index)=>
//       <div key={index}><p>{students.name}</p>
//       <p>{students.department}</p>
//       <p>{students.year}</p></div>
//       )}
//     </div>
//   )
// }
// export default App;

// import React, { useState } from 'react';
// const App=()=>{
//   const [name,setName]=useState('');
  
//   return(
//     <div><input type="text" placeholder="enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input>
//     <p>hi ! {name}</p></div>
    
//   )
// }
// export default App;


// import React, { useState,useEffect } from 'react';
// const App1=()=>{
//   const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log(`Count changed to: ${count}`);
// }, [count]);

  
//   return(
//   <div>
//   <button onClick={(e)=>{setCount(count+1)}}>Increment</button>
//   <p>{count}</p>
//   </div>
//   )
// }
// export default App1;


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
