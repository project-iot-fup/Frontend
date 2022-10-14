/* eslint-disable no-alert */
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
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import Message from './Message';

import Loader from '../assets/svg/loader';
import Barcode from '../assets/svg/barcode';
import Warning from '../assets/svg/warning';
import Check from '../assets/svg/check';

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
    loading: loadingUpdate,
    success: successCreate
  } = llaveroCreate;

  const submitHandler = (e) => {
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
    if (loadingUpdate) {
      console.log('loadingUpdate');
    }

    if (successCreate) {
      dispatch(listallaveroDetails(props.estudiante._id));
    } else if (
      !props.estudiante.nombre ||
      props.estudiante._id !== Number(props._id)
    ) {
      dispatch(listallaveroDetails(props._id));
    }
  }, [
    dispatch,
    llavero,
    loadingUpdate,
    successCreate,
    errorCreate,
    navigate,
    props.estudiante,
    props._id
  ]);

  return (
    <>
      {errorCreate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Message
            message="Registro Fallido"
            description="Vuelva a pasar el tag por el lector"
            className="text-yellow-400"
            icon={<Warning className="fill-yellow-400" />}
          />
        </motion.div>
      )}
      {successCreate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Message
            message="Registro exitoso"
            description="Se ha creado el tag con éxito"
            className="text-green-500"
            icon={<Check className="fill-green-500" />}
          />
        </motion.div>
      )}
      {llavero[0] === undefined ? (
        <form onSubmit={submitHandler}>
          <button
            type="submit"
            className=" bg-black rounded-md shadow-md shadow-black"
          >
            {!formData && (
              <span className="flex flex-row gap-2 items-center py-2 px-6">
                <Barcode className="fill-white" />
                <h1 className="text-lg font-bold text-white">Crear Tag</h1>
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
