/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { listSalas } from '../../actions/asistenciasActions';

function ClassroomListPage() {
  const dispatch = useDispatch();

  const salaList = useSelector((state) => state.salaList);
  const { error, loading, salas } = salaList;

  useEffect(() => {
    dispatch(listSalas());
  }, [dispatch]);

  console.log(salas);

  return (
    <>
      <Helmet>
        <title>Mis Salas</title>
      </Helmet>
      <section className="bg-zinc-900 w-full h-full rounded-lg shadow-lg">
        <div className="p-8 flex flex-col gap-2">
          <h1 className="text-white text-2xl font-bold">Mis Salas</h1>
          <hr className="border border-zinc-600/80" />
          <div className="grid grid-cols-6 gap-4">
            {salas.map((item) => (
              <Link
                key={item._id}
                to={`/classroom/sala/${item._id}`}
                className="col-span-2 border-2 border-dashed px-4 py-3 border-zinc-700/80 hover:bg-zinc-700/20 rounded-lg"
              >
                <h1 className="text-white text-md">{item.sede}</h1>
                <h1 className="text-white">Sala: {item.numero}</h1>
                <h1 className="text-white">Materia: {item.materia.nombre}</h1>
                <h1 className="text-white">Docente: {item.materia.profesor}</h1>
                <h1 className="text-white">
                  Alumnos: {item.asistencia.length}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassroomListPage;
