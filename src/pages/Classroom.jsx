/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function Classroom() {
  const date = new Date();
  return (
    <section className="bg-zinc-800">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-zinc-900 rounded-lg w-[700px] h-[800px] p-6 shadow-lg shadow-zinc-900">
          <div className="flex justify-between items-start">
            <span className="flex flex-col gap-4 w-96">
              <h1 className="text-xl text-bold font-bold text-white">
                Jornada: Nocturna
              </h1>
              <h1 className="text-xl text-bold font-bold text-white">
                Docente: Edinson Fabián Vasquez Gonzalez
              </h1>
              <h1 className="text-xl text-bold font-bold text-white">
                Materia: Creditos Libres II
              </h1>
              <h1 className="text-xl text-bold font-bold text-white">
                De <span className="text-yellow-400">11 </span>estudiantes solo
                asistieron <span className="text-blue-400">5</span>
              </h1>
            </span>
            <span>
              <h1 className="text-xl text-bold font-bold text-white">
                Fecha: {date.toLocaleDateString()}
              </h1>
              <h1 className="text-xl text-bold font-bold text-white">
                Hora: 6:00 pm - 8:00 pm
              </h1>
            </span>
          </div>
          <div className="overflow-y-auto relative mt-8 p-4 rounded-md h-[500px] border-[3px] border-zinc-600">
            <div className="flex justify-between gap-4">
              <div className="flex flex-row gap-2">
                <h1 className="font-bold text-lg text-white">
                  Manuel Esteban Erazo
                </h1>
              </div>
              <div className="flex flex-row gap-2">
                <h1 className="font-bold text-lg text-green-500">
                  Asistio a clase
                </h1>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-row gap-2">
                <h1 className="font-bold text-lg text-white">
                  Juan Orozco Hoyos
                </h1>
              </div>
              <div className="flex flex-row gap-2">
                <h1 className="font-bold text-lg text-red-500">
                  No Asistio a clase
                </h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-8 pt-6 items-center">
            <div className="p-2 flex">a</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Classroom;
