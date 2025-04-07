import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    ailment: ''
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  const fetchStudents = async () => {
    try {
   
      const response = await axios.get('http://localhost:8000/api/students');
      setStudents(response.data);
      console.log(response.data)
      // console.log("student", data)

    } catch (error) {
      console.error('Error fetching Students:', error);
     
    } 
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: name === 'age' ? (value === '' ? '' : Number(value)) : value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
   
    
  //   try {
  //     if (!formData.name || !formData.age || !formData.ailment) {
  //       setFormError("All fields are required");
  //       return;
  //     }
      
  //     await axios.post('http://localhost:8000/api/patients', {
  //       name: formData.name,
  //       age: Number(formData.age),
  //       ailment: formData.ailment
  //     });
      
  //     setFormData({ name: '', age: '', ailment: '' });
  //     setFormSuccess("Patient added successfully!");
      
  //     fetchPatients();
  //   } catch (error) {
  //     console.error('Error adding patient:', error);
  //     setFormError(error.response?.data?.message || "Failed to add patient");
  //   }
  // };

  // const deletePatient = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:8000/api/patients/${id}`);
  //     // After successful deletion, update the patients list
  //     setPatients(patients.filter(patient => patient._id !== id));
  //     setFormSuccess("Patient deleted successfully!");
  //   } catch (error) {
  //     console.error('Error deleting patient:', error);
  //     setFormError("Failed to delete patient");
  //   }
  // };

  return (
    <>
      <h1>Student Dom</h1>
      
      <div >
  
        
        
        {/* <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter patient name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter patient age"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="ailment">Ailment:</label>
            <input
              type="text"
              id="ailment"
              name="ailment"
              value={formData.ailment}
              onChange={handleInputChange}
              placeholder="Enter patient ailment"
            />
          </div>
          
          <button type="submit">Add Patient</button>
        </form> */}
      </div>
      
      <h2>Student List</h2>
      <div>
      <div >
          {students.length > 0 ? (
            students.map(student => (
              <div key={student._id} >
                <h3>{student.name}</h3>
                <p>Age: {student.age}</p>
                <p>Email: {student.email}</p>
                {/* <button 
                  className="delete-btn" 
                  onClick={() => deletePatient(patient._id)}
                >
                  Delete
                </button> */}
              </div>
            ))
          ) : (
            <p>No patients found</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
