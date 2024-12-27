import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateForm() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', age: '' });

  useEffect(() => {
    axios.get(`http://localhost:1200/userget/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:1200/userupdate/${id}`, user)
      .then(response => {
        console.log('User updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={user.name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={user.age} onChange={handleChange} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateForm;
