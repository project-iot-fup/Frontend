import React from 'react';

// import User from '../assets/icons/user';
// import Chart from '../assets/icons/chart';
// import Report from '../assets/icons/report';

function Report() {
  const date = new Date();
  return (
    <div className="flex justify-center items-center h-screen pt-56">
      <div className="bg-zinc-900 rounded-lg w-[700px] h-[800px] p-6 shadow-lg shadow-zinc-900">
        <div className="flex justify-between items-start">
          <span className="flex flex-col gap-4 w-96">
            <h1 className="text-xl text-bold font-bold text-white">
              Jornada: Nocturna 🌒
            </h1>
            <h1 className="text-xl text-bold font-bold text-white">
              Docente: Edinson Fabián Vasquez Gonzalez
            </h1>
            <h1 className="text-xl text-bold font-bold text-white">
              Materia: Creditos Libres II
            </h1>
          </span>
          <span>
            <h1 className="text-xl text-bold font-bold text-white">
              <span className="text-yellow-400">📅 Fecha:</span>{' '}
              {date.toLocaleDateString()}
            </h1>
            <h1 className="text-xl text-bold font-bold text-white">
              <span className="text-yellow-400">⏰ Hora:</span> 6:00 pm - 8:00
              pm
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
              <tr className="text-white">
                <td>1234567890</td>
                <td>Erazo Medina Manuel Esteban</td>
                <td>6:00:00</td>
                <td className="text-green-500">Si Asistio</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="grid grid-cols-1 gap-8 pt-6">
            <div className="p-2 flex flex-row gap-12 items-center justify-center">
              <button
                className="border-none"
                type="button"
                onClick={(e) => {
                  e.target.classList.toggle('fill-white');
                }}
              >
                <User className="w-8 h-8 fill-zinc-600" />
              </button>
              <button
                className="border-none"
                onClick={(e) => {
                  e.target.classList.toggle('fill-white');
                }}
                type="button"
              >
                <Chart className="w-8 h-8 fill-zinc-600" />
              </button>
              <button
                className="border-none"
                onClick={(e) => {
                  e.target.classList.toggle('fill-white');
                }}
                type="button"
              >
                <Report className="w-8 h-8 fill-zinc-600" />
              </button>
            </div>
          </div> */}
      </div>
    </div>
  );
}

export default Report;
