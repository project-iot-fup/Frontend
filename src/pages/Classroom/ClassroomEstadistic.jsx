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
import { listSalas } from '../../actions/asistenciasActions';
import Graphs from '../../components/Graphs';

function ClassroomEstadistic() {
  const dispatch = useDispatch();

  const salaList = useSelector((state) => state.salaList);
  const { error, loading, salas } = salaList;

  useEffect(() => {
    dispatch(listSalas());
  }, [dispatch]);

  console.log(salas);

  return (
    <div className="bg-zinc-900 rounded-md p-6 shadow-lg">
      <h1 className="text-white/80 text-xl">Estadísticas de mis materias</h1>
      <Graphs salas={salas} />
      {/* {salas.map((sala) => (
      ))} */}
    </div>
  );
}

export default ClassroomEstadistic;
