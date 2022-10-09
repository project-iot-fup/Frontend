/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
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

import { createLLavero, listallaveroDetails } from '../actions/llaveroActions';

function Tag(props) {
  const [formData, setFormData] = useState(false);

  const [estudiante, setEstudiante] = useState('');
  const [tagStatus, setTagStatus] = useState(false);
  const [tag, setTag] = useState('');

  const dispatch = useDispatch();

  const llaveroDetails = useSelector((state) => state.llaveroDetails);
  const { error, loading, llavero } = llaveroDetails;

  const llaveroCreate = useSelector((state) => state.llaveroCreate);
  const navigate = useNavigate();
  const {
    // error: errorUpdate,
    // loading: loadingUpdate,
    success: successCreate
  } = llaveroCreate;

  const submitHandler = (e) => {
    console.log('submitHandler');
    e.preventDefault();
    setFormData(true);
    dispatch(
      createLLavero({
        estudiantes: props.estudiante._id
      })
    );
    setTimeout(() => {
      setFormData(false);
    }, 10000);
  };

  useEffect(() => {
    if (successCreate) {
      navigate(`/classroom/estudiante/${props._id}`);
    } else if (
      !props.estudiante.nombre ||
      props.estudiante._id !== Number(props._id)
    ) {
      dispatch(listallaveroDetails(props._id));
    }
  }, [dispatch, llavero, successCreate, navigate, props.estudiante, props._id]);

  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <button type="submit" className="bg-lime-500 rounded-lg w-[400px] ">
          {!formData && (
            <h1 className="text-black text-md font-bold py-2">Crear Tag</h1>
          )}
          {formData && <Loader className="fill-black" />}
        </button>
      </form> */}
      {llavero[0] === undefined ? (
        <form onSubmit={submitHandler}>
          <button type="submit" className="bg-lime-500 rounded-lg w-[400px] ">
            {!formData && (
              <h1 className="text-black text-md font-bold py-2">Crear Tag</h1>
            )}
            {formData && <Loader className="fill-black" />}
          </button>
        </form>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Tag;
