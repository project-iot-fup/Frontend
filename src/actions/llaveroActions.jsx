/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
// no-unused-vars
/* eslint-disable no-underscore-dangle */

import axios from 'axios';
import {
  LLAVERO_CREATE_REQUEST,
  LLAVERO_CREATE_SUCCESS,
  LLAVERO_CREATE_FAIL,
  LLAVERO_CREATE_RESET
} from '../constants/llaveroConstants';

export const createLLavero = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LLAVERO_CREATE_REQUEST
    });

    const {
      userLogin: { userInfo }
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.post(`/api/llaveros/create/`, {}, config);
    dispatch({
      type: LLAVERO_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LLAVERO_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};
