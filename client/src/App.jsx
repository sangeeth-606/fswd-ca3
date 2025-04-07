import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [students, setStudents] = useState([]);

  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    ailment: ''
  });


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




  return (
    <>
      <h1>Student Dom</h1>
      
      <div >
  
        
     
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
              
              </div>
            ))
          ) : (
            <p>No students found</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App
