
import './App.css'; import React from 'react';  // Ensure React is imported

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formget from './components/Formget';

import Form from './components/Form';  // Ensure Form is imported correctly
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/get" element={<Formget />} />
          <Route path="/updateget/:id" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

      
