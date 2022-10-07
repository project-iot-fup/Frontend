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

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const estudianteDetails = useSelector((state) => state.estudianteDetails);
  const { error, loading, estudiante } = estudianteDetails;

  const estudianteUpdate = useSelector((state) => state.estudianteUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate
  } = estudianteUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData(true);
    dispatch(
      updateEstudiante({
        _id: params.id,
        nombre,
        apellido
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
  };

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ESTUDIANTE_UPDATE_RESET });
      navigate('/classroom/list');
    } else if (!estudiante.nombre || estudiante._id !== Number(params.id)) {
      dispatch(listaEstudianteDetails(params.id));
    } else {
      setNombre(estudiante.nombre);
      setApellido(estudiante.apellido);
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
        <div />
      )}
    </>
  );
}

export default ClassroomRegisterPage;
