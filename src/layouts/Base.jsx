import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Classroom from './Classroom';
// auth
import Login from '../pages/auth/LoginPage';
import Register from '../pages/auth/RegisterPage';

import HomePage from '../pages/HomePage';

import NotFoundPage from '../pages/NotFoundPage';

function Base() {
  return (
    <main>
      <Router>
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
          {/* classroom */}
          <Route path="/classroom/*" element={<Classroom />} />
          {/* auth */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </Router>
    </main>
  );
}

export default Base;
