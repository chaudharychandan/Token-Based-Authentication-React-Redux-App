import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR
} from 'actions/types';

const { REACT_APP_API_URL } = process.env;

export const signup = (formProps, callback) => async dispatch => {
  try {
    const { data: { token } } = await axios.post(`${REACT_APP_API_URL}/signup`, formProps);

    dispatch({ type: AUTH_USER, payload: token });
    localStorage.setItem('token', token);
    callback();
  } catch ({ response }) {
    const { data } = response;

    dispatch({ type: AUTH_ERROR, payload: data.error });
  }
}
