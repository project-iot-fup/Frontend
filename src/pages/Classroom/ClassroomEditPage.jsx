/* eslint-disable jsx-a11y/label-has-associated-control */
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

import { useNavigate, useParams } from 'react-router-dom';

import {
  listaEstudianteDetails,
  updateEstudiante
} from '../../actions/estudianteActions';
import { ESTUDIANTE_UPDATE_RESET } from '../../constants/estudianteConstants';

import Loader from '../../assets/svg/loader';
import Add from '../../assets/svg/add';
import Remove from '../../assets/svg/remove';

function ClassroomRegisterPage() {
  const [formData, setFormData] = useState(false);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [materias, setMaterias] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const estudianteDetails = useSelector((state) => state.estudianteDetails);
  const { error, loading, estudiante } = estudianteDetails;

  const estudianteUpdate = useSelector((state) => state.estudianteUpdate);

  const {
    // error: errorUpdate,
    // loading: loadingUpdate,
    success: successUpdate
  } = estudianteUpdate;

  const submitHandler = (e) => {
    console.log('submitHandler');
    e.preventDefault();
    setFormData(true);
    dispatch(
      updateEstudiante({
        _id: params.id,
        nombre,
        apellido,
        materias
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
  };

  useEffect(() => {
    if (successUpdate) {
      console.log('successUpdate');
      dispatch({ type: ESTUDIANTE_UPDATE_RESET });
      navigate('/classroom/list');
    } else if (!estudiante.nombre || estudiante._id !== Number(params.id)) {
      dispatch(listaEstudianteDetails(params.id));
    } else {
      setNombre(estudiante.nombre);
      setApellido(estudiante.apellido);
      setMaterias(estudiante.materias);
    }
  }, [dispatch, estudiante, params, successUpdate, navigate]);

  console.log(estudiante);

  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-96">
          <Loader
            width="200px"
            height="200px"
            className="fill-black dark:fill-white"
          />
        </div>
      ) : error ? (
        <div className="grid place-items-center h-auto my-8 lg:my-44">
          <h1>{error}</h1>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <label className="text-white text-sm font-bold uppercase tracking-widest">
            Nombre:
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del producto"
            className="outline-none font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
          />
          <label className="text-white text-sm font-bold uppercase tracking-widest">
            Apellido:
          </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Nombre del producto"
            className="outline-none font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
          />
          <label className="text-white text-sm font-bold uppercase tracking-widest">
            Materias:
          </label>
          <select
            value={materias}
            onChange={(e) => setMaterias(e.target.value)}
            className="outline-none font-bold relative text-black placeholder-zinc-400 dark:placeholder-zinc-400 dark:text-white bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 pl-4 w-full"
          >
            <option disabled value="0">
              Seleccione una materia
            </option>
            <option value="Creditos Libres II">Creditos Libres II</option>
          </select>
          <span className="col-span-3 grid place-items-center pt-2 justify-center">
            <button
              type="submit"
              className="bg-zinc-300 dark:bg-[#F0E9D2] w-full rounded-lg px-24"
            >
              {!formData && (
                <h1 className="text-black dark:text-black text-md font-bold py-4">
                  Actualizar Estudiante
                </h1>
              )}
              {formData && <Loader className="fill-white dark:fill-black" />}
            </button>
          </span>
        </form>
      )}
    </>
  );
}

export default ClassroomRegisterPage;
