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
import Barcode from '../assets/svg/barcode';

import { createLLavero, listallaveroDetails } from '../actions/llaveroActions';

function Tag(props) {
  const [formData, setFormData] = useState(false);

  const [estudiante, setEstudiante] = useState('');
  const [tagStatus, setTagStatus] = useState(false);
  const [tag, setTag] = useState('');

  const dispatch = useDispatch();

  const llaveroDetails = useSelector((state) => state.llaveroDetails);
  const { llavero } = llaveroDetails;

  const llaveroCreate = useSelector((state) => state.llaveroCreate);
  const navigate = useNavigate();
  const {
    error: errorCreate,
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
    }, 3000);
  };

  useEffect(() => {
    if (errorCreate) {
      console.log('error');
    }

    if (successCreate) {
      navigate(`/classroom/list`);
    } else if (
      !props.estudiante.nombre ||
      props.estudiante._id !== Number(props._id)
    ) {
      dispatch(listallaveroDetails(props._id));
    }
  }, [
    dispatch,
    llavero,
    successCreate,
    errorCreate,
    navigate,
    props.estudiante,
    props._id
  ]);

  return (
    <>
      {llavero[0] === undefined ? (
        <form onSubmit={submitHandler}>
          <button
            type="submit"
            className=" bg-black rounded-md shadow-md shadow-black"
          >
            {!formData && (
              <span className="flex flex-row gap-2 items-center py-4 px-6">
                <Barcode className="fill-white" />
                <h1 className="text-xl font-bold text-white">Crear Tag</h1>
              </span>
            )}
            {formData && <Loader className="fill-white w-44" />}
          </button>
        </form>
      ) : (
        <div>
          <span className="flex flex-row gap-2 items-center">
            <Barcode className="fill-white" />
            <h1 className="text-xl font-bold text-white underline">
              {llavero[0].tag}
            </h1>
          </span>
        </div>
      )}
    </>
  );
}

export default Tag;
