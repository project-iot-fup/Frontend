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

import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
import { listaEstudiantes } from '../../actions/estudianteActions';

import Loader from '../../assets/svg/loader';

function ClassroomRegisterPage() {
  const dispatch = useDispatch();
  const estudianteList = useSelector((state) => state.estudianteList);
  const { error, loading, estudiante } = estudianteList;

  useEffect(() => {
    dispatch(listaEstudiantes());
  }, [dispatch]);

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
