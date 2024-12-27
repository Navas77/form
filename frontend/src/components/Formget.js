import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Formget() {
  const [users, setUsers] = useState([]);  // Corrected to be an array initially
  const navigate = useNavigate();

  useEffect(() => {  // Corrected useEffect syntax
    axios.get("http://localhost:1200/userget")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  const handleUpdate = (id) => {
    navigate(`/updateget/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1200/userdelete/${id}`) // Corrected URL path
      .then(response => {
        console.log("user delete", response.data);
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id)); // Corrected state update
      })
      .catch(error => {
        console.error("error deleting user:", error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <div>
          {users.map(user => (
            <div key={user._id}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Age:</strong> {user.age} <br />
              <button onClick={() => handleUpdate(user._id)}>Update</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default Formget;
