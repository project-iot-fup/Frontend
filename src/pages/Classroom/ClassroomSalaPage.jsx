/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { listSalaDetails } from '../../actions/asistenciasActions';

function ClassroomSalaPage() {
  const params = useParams();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const salaDetails = useSelector((state) => state.salaDetails);
  const { sala, error, loading } = salaDetails;

  useEffect(() => {
    // dispatch(listSalaDetails(params.id));
    if (userInfo) {
      dispatch(listSalaDetails(params.id));
    }
  }, [dispatch, params.id, userInfo]);

  console.log(sala);
  const zone = new Date();

  const formatDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day} de ${month} ${year}`;
  };

  // convert 2022-11-02T14:58:54.635603-05:00 to hh:mm:ss
  const formatTime = (time) => {
    const d = new Date(time);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    return `${hours}:${minutes}`;
  };

  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-96">
          <h1>loading ...</h1>
        </div>
      ) : error ? (
        <div className="grid place-items-center h-auto my-8 lg:my-44">
          <h1>error ...</h1>
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="bg-zinc-900 rounded-lg w-[700px] h-[800px] p-6 shadow-lg shadow-zinc-900">
            <div className="grid grid-cols-2 items-start">
              <span className="col-span-1 flex flex-col gap-4">
                <h1 className="text-xl text-bold font-bold text-white">
                  {/* Jornada: Nocturna 🌒 */}
                  {sala.materia.jornada === 'Nocturna' ? (
                    <h1 className="text-xl text-bold font-bold text-white">
                      <span className="text-yellow-400">Jornada:</span> Nocturna
                      🌒
                    </h1>
                  ) : (
                    <h1 className="text-xl text-bold font-bold text-white">
                      <span className="text-yellow-400">Diurna:</span> Nocturna
                      🌞
                    </h1>
                  )}
                </h1>
                <h1 className="text-xl text-bold font-bold text-white">
                  <span className="text-yellow-400"> Docente:</span>{' '}
                  {sala.materia.profesor}
                </h1>
                <h1 className="text-xl text-bold font-bold text-white">
                  <span className="text-yellow-400">Materia:</span>{' '}
                  {sala.materia.nombre}
                </h1>
              </span>
              <span className="col-span-1">
                <h1 className="text-xl text-bold font-bold text-white">
                  <span className="text-yellow-400">📅 Fecha:</span>{' '}
                  {formatDate(sala.fecha_inicio)}
                </h1>
                <h1 className="text-xl text-bold font-bold text-white">
                  <span className="text-yellow-400">⏰ Hora:</span>{' '}
                  {formatTime(sala.fecha_inicio)} - {formatTime(sala.fecha_fin)}
                </h1>
                <h1 className="text-xl text-bold font-bold text-white">
                  <span className="text-yellow-400">🏫 Sede: </span>
                  {sala.sede}
                </h1>
                <h1 className="text-xl text-bold font-bold text-white">
                  <span className="text-yellow-400">🚪 Sala: </span>
                  {sala.numero}
                </h1>
              </span>
            </div>
            <div className="overflow-y-auto relative mt-8 p-4 rounded-md h-[550px] border-[3px] border-zinc-600">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="text-zinc-500">N° Identificación</th>
                    <th className="text-zinc-500">Nombre</th>
                    <th className="text-zinc-500">Hora de ingreso</th>
                    <th className="text-zinc-500">Asistencia</th>
                  </tr>
                </thead>
                <tbody>
                  {sala.asistencia.map((asistencia) => (
                    <tr className="text-white">
                      <td>{asistencia.llavero.estudiante.cedula}</td>
                      <td>{asistencia.llavero.estudiante.nombre}</td>
                      <td>
                        {formatTime(asistencia.llavero.updatedAt)}
                        {zone.getHours() < 12 && ' am,'}
                        {/* good afternoon */}
                        {zone.getHours() >= 12 && zone.getHours() < 18 && ' pm'}
                        {/* good night */}
                        {zone.getHours() >= 18 && ' pm'}
                      </td>
                      {asistencia.entrada ? (
                        <td className="text-green-500">Si Asistio</td>
                      ) : (
                        <td className="text-red-500">No Asistio</td>
                      )}
                    </tr>
                  ))}
                  {/* {asistencia.asistencia.map((estudiante) => (
                <tr className="text-white">
                  <td>{estudiante.estudiante.cedula}</td>
                  <td>{estudiante.estudiante.nombre}</td>
                  <td>{estudiante.hora_ingreso}</td>
                  <td className="text-green-500">Si Asistio</td>
                </tr>
              ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClassroomSalaPage;
