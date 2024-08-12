// src/TestApp.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const TestApp = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/about" element={<div>About</div>} />
    </Routes>
  );
};

export default TestApp;