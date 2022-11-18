/* eslint-disable no-unused-vars */
// no-unused-vars
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import {
  SALA_LIST_REQUEST,
  SALA_LIST_SUCCESS,
  SALA_LIST_FAIL,
  SALA_DETAILS_REQUEST,
  SALA_DETAILS_SUCCESS,
  SALA_DETAILS_FAIL
} from '../constants/asistenciaConstants';

export const listSalas = () => async (dispatch) => {
  try {
    dispatch({ type: SALA_LIST_REQUEST });

    const { data } = await axios.get(`/api/asistencias`);

    dispatch({
      type: SALA_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SALA_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

export const listSalaDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SALA_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/asistencias/${id}/`);

    dispatch({
      type: SALA_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SALA_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};
