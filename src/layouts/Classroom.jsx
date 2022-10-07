/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import ClassroomReportPage from '../pages/Classroom/ClassroomReportPage';
import ClassroomHomePage from '../pages/Classroom/ClassroomHomePage';
import ClassroomEditPage from '../pages/Classroom/ClassroomEditPage';
import ClassroomListPage from '../pages/Classroom/ClassroomListPage';

function Classroom() {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/auth/login');
    }
  }, [navigate, userInfo]);
  return (
    <main className="bg-zinc-800 h-full">
      <div className="flex justify-center items-center">
        <div className="bg-zinc-900 w-[900px] rounded-b-lg">s</div>
      </div>
      <Routes>
        <Route index element={<ClassroomHomePage />} />
        <Route path="/report" element={<ClassroomReportPage />} />
        <Route path="/edit/:id" element={<ClassroomEditPage />} />
        <Route path="/list" element={<ClassroomListPage />} />
      </Routes>
    </main>
  );
}

export default Classroom;
