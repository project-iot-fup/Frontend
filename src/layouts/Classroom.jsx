/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClassroomListPage from '../pages/Classroom/ClassroomListPage';
import ClassroomSalaPage from '../pages/Classroom/ClassroomSalaPage';
import ClassroomProfilePage from '../pages/Classroom/ClassroomProfilePage';
import ClassroomEstadistic from '../pages/Classroom/ClassroomEstadistic';

import NotFoundPage from '../pages/NotFoundPage';
import Dashboard from '../components/Dashboard';

import Logout from '../assets/svg/logout';
import { logout } from '../actions/userActions';

function Classroom() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    if (userInfo) {
      navigate('/auth/login');
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/auth/login');
    }
  }, [navigate, userInfo]);
  return (
    <main className="bg-zinc-800 h-full container mx-auto mb-96">
      <section className="grid grid-cols-12 gap-12 pt-32">
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-8">
          <Dashboard />
          <button type="button" onClick={logoutHandler}>
            <div className="bg-zinc-900 px-8 py-4 rounded-lg shadow-md shadow-zinc-900 flex flex-row gap-2 cursor-pointer fill-white hover:fill-zinc-400 text-white hover:text-zinc-400">
              <Logout />
              <h1 className=" font-bold text-md tracking-normal">
                Cerrar sesión
              </h1>
            </div>
          </button>
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Routes>
            <Route index element={<ClassroomListPage />} />
            <Route path="/sala/:id" element={<ClassroomSalaPage />} />
            <Route path="/profile" element={<ClassroomProfilePage />} />
            <Route path="/stadistic" element={<ClassroomEstadistic />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}

export default Classroom;
