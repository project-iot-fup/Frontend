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

import { useNavigate } from 'react-router-dom';

import Loader from '../assets/svg/loader';

import { createLLavero } from '../actions/llaveroActions';

function TestPage() {
  const [formData, setFormData] = useState(false);

  const [estudiante, setEstudiante] = useState('Manuel Esteban');
  const [tagStatus, setTagStatus] = useState(false);
  const [tag, setTag] = useState('');

  const llaveroCreate = useSelector((state) => state.llaveroCreate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    // error: errorUpdate,
    // loading: loadingUpdate,
    success: successUpdate
  } = llaveroCreate;

  const submitHandler = (e) => {
    console.log('submitHandler');
    e.preventDefault();
    setFormData(true);
    dispatch(
      createLLavero({
        tag,
        tagStatus,
        estudiante
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 1000);
  };

  useEffect(() => {
    if (successUpdate) {
      console.log('successUpdate');
      navigate('/classroom/list');
    }
  }, [dispatch, successUpdate, navigate]);

  return (
    <form onSubmit={submitHandler}>
      <button type="submit" className="bg-yellow-400 w-full rounded-lg">
        {!formData && (
          <h1 className="text-black text-md font-bold py-4">
            Actualizar Datos
          </h1>
        )}
        {formData && <Loader className="fill-black" />}
      </button>
    </form>
  );
}

export default TestPage;
