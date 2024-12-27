import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css"

function Form() {
  const [name, setName] = useState(""); // Standardize naming convention
  const [age, setAge] = useState("");   // Ensure all state updates are consistent
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, age }; // Correctly place within handleSubmit
    axios.post("http://localhost:1200/userpost", formData)
      .then(response => {
        console.log("response:", response); // Ensure correct logging
      })
      .catch(error => {
        console.log("error:", error); // Ensure correct error logging
      });
  };

  const handleView = () => {
    navigate("/get");
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <div className='content'>
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

        <label>Age:</label>
        <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <br/>

        <button type='submit'>Submit</button>
      </form>
      <button onClick={handleView}>View</button>
    </div>
  );
}

export default Form;

