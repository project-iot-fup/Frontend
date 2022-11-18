/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  SALA_LIST_REQUEST,
  SALA_LIST_SUCCESS,
  SALA_LIST_FAIL,
  SALA_DETAILS_REQUEST,
  SALA_DETAILS_SUCCESS,
  SALA_DETAILS_FAIL
} from '../constants/asistenciaConstants';

export const salaListReducer = (state = { salas: [] }, action) => {
  switch (action.type) {
    case SALA_LIST_REQUEST:
      return { loading: true, salas: [] };

    case SALA_LIST_SUCCESS:
      return {
        loading: false,
        salas: action.payload.salas,
        page: action.payload.page,
        pages: action.payload.pages
      };

    case SALA_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const salaDetailsReducer = (
  state = { sala: { materia: {}, asistencia: [] } },
  action
) => {
  switch (action.type) {
    case SALA_DETAILS_REQUEST:
      return { loading: true, ...state };

    case SALA_DETAILS_SUCCESS:
      return { loading: false, sala: action.payload };

    case SALA_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
