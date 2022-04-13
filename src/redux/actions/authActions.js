import {
  SIGNUP_SUCCESS,
  LOADING_UI,
  SET_ERRORS,
  SERVER_ERROR,
  CLEAR_ERRORS,
  LOADING_USER,
  SET_USER,
  SET_ERROR,
  SET_UNAUTHENTICATED,
  SET_ERRORS_SIGNUP_COMPANY,
} from '../types';

import axios from '../../util/axios';
import axiosNewInstance from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REACT_APP_SERVER_URL = 'https://travel-gh-backend.herokuapp.com';

export const signupUser = newUserData => async dispatch => {
  dispatch({type: LOADING_UI});
  await axios
    .post(`${REACT_APP_SERVER_URL}/auth/signup-user`, newUserData)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
      });
      dispatch({type: CLEAR_ERRORS});
      // history.push('/signin');
    })
    .catch(err => {
      // console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const loginAction = userData => async dispatch => {
  dispatch({type: LOADING_UI});
  await axios
    .post(`${REACT_APP_SERVER_URL}/auth/login`, userData)
    .then(res => {
      const jwt = `Bearer ${res.data.token}`;
      AsyncStorage.setItem('jwt', jwt);
      axios.defaults.headers.common['Authorization'] = jwt;
      dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
      // console.log('Authenticated, check localStorage', jwt);
      // history.push('/');
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: SET_ERROR,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const resetAction = userData => dispatch => {
  dispatch({type: LOADING_UI});
  axios
    .post(`${REACT_APP_SERVER_URL}/auth/reset-password`, userData)
    .then(res => {
      dispatch({type: CLEAR_ERRORS});
      // console.log("Authenticated, check localStorage", jwt);
      // history.push("/");
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: SET_ERROR,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const getUserData = () => async dispatch => {
  dispatch({type: LOADING_USER});
  await axios
    .get(`${REACT_APP_SERVER_URL}/user`)
    .then(res => {
      if (res.data.empDet) {
        dispatch({
          type: SET_USER,
          payload: res.data.result,
          payload1: res.data.empDet,
          payload2: res.data.accountDetails,
          // payload: res.data,
        });
      } else {
        dispatch({
          type: SET_USER,
          payload: res.data.result,
          // payload1: res.data.empDet,
        });
      }
    })
    .catch(err => console.log(err));
};

export const signupCompany = (newCompanyData, history) => dispatch => {
  const location = `+${newCompanyData.get('aptName')},+${newCompanyData.get(
    'locality',
  )},+${newCompanyData.get('street')},+${newCompanyData.get('zip')}`;
  axiosNewInstance
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: process.env.REACT_APP_GOOGLE_API_KEY,
      },
    })
    .then(result => {
      if (
        Array.isArray(result.data.results) &&
        result.data.results.length > 0
      ) {
        const formattedAddress = result.data.results[0].formatted_address;
        const lat = result.data.results[0].geometry.location.lat;
        const lng = result.data.results[0].geometry.location.lng;
        newCompanyData.append('lat', lat);
        newCompanyData.append('lng', lng);
        newCompanyData.append('formattedAddress', formattedAddress);
      }

      dispatch(signupCompanyFinal(newCompanyData, history));
    })
    .catch(err => {
      console.log(err);
    });
};

export const signupCompanyFinal = (newCompanyData, history) => dispatch => {
  dispatch({type: LOADING_UI});
  axios
    .post(`${REACT_APP_SERVER_URL}/auth/signup-company`, newCompanyData)
    .then(res => {
      dispatch({
        type: SIGNUP_SUCCESS,
      });
      dispatch({type: CLEAR_ERRORS});
      history.push('/signin');
    })
    .catch(err => {
      if (err.response) {
        dispatch({
          type: SET_ERRORS_SIGNUP_COMPANY,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const logoutAction = () => dispatch => {
  AsyncStorage.removeItem('jwt');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({type: SET_UNAUTHENTICATED});
  // if (history) history.push('/signin');
};
