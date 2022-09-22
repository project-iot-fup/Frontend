import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Classroom from '../pages/Classroom';
// auth
import Login from '../pages/Login';
import Register from '../pages/Register';

// Header
// import Header from '../components/Header';

// Footer
// import Footer from '../components/Footer';

import HomePage from '../pages/HomePage';

import NotFoundPage from '../pages/NotFoundPage';

function Base() {
  return (
    <main>
      <Router>
        {/* <Header /> */}
        {/* <div className="container mx-auto lg:px-0 px-4 pt-8 lg:pt-10">
          {location === '/' ? <Back /> : null}
        </div> */}
        <Routes>
          {/* home */}
          <Route path="/" element={<HomePage />} />
          {/* not found */}
          <Route path="*" element={<NotFoundPage />} />
          {/* classroom */}
          <Route path="/classroom" element={<Classroom />} />
          {/* auth */}
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </main>
  );
}

export default Base;
