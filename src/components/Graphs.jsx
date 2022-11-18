/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

import { BarChart } from '@tremor/react';

function Graphs({ salas }) {
  const chartdata = [
    {
      materia: 'Calculo',
      alumnos: 12
    },
    {
      materia: 'Fisica',
      alumnos: 8
    },
    {
      materia: 'Creditos Libres II',
      alumnos: 18
    }
  ];
  console.log(salas);

  const alumno = salas.map((sala) => sala.asistencia.length);

  return (
    <BarChart
      data={salas}
      dataKey="materia.nombre"
      dataValue="asistencia.length"
      categories={['asistencia.length']}
      colors={['yellow']}
      marginTop="mt-6"
      yAxisWidth="w-12"
    />
  );
}

export default Graphs;
