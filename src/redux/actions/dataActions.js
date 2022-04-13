import {
  SET_CLIENTS,
  LOADING_DATA,
  SET_CLIENT,
  SET_AVAILABLE_TRIPS,
  SET_AVAILABLE_FUTURE_TRIPS,
  SET_AVAILABLE_TRIP,
  SET_TRIPS,
  SET_TRIP,
  LOADING_UI,
  SET_ERROR_TRIP,
  SERVER_ERROR,
  CLEAR_ERRORS,
  ADD_TRIP,
  DELETE_TRIP,
  EDIT_TRIP,
  ADD_VEHICLE,
  DELETE_VEHICLE,
  EDIT_VEHICLE,
  SET_ERROR_VEHICLE,
  SET_ERROR_EMPLOYEE,
  SET_ERROR_COMPANY,
  SET_ERROR_USER_BOOKING,
  ADD_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION,
  SET_ERROR_LOCATION,
  ADD_CART_SUCCESS,
  ADD_BOOKING_SUCCESS,
  UPDATE_TICKETSCOUNT_SUCCESS,
  ADD_CART_FAIL,
  SET_CART,
  DELETE_TRIP_CART,
  SET_ERRORS,
  SET_BOOKINGS,
  SET_BOOKING,
  EDIT_STATUS,
  SET_VEHICLES,
  SET_VEHICLE,
  SET_LOCATIONS,
  SET_LOCATION,
  SET_EMPLOYEE,
  SET_EMPLOYEES,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  EDIT_EMPLOYEE,
  EDIT_USER,
  SET_USER_BOOKING,
  SET_USER_BOOKINGS,
  ADD_USER_BOOKING,
  DELETE_USER_BOOKING,
  EDIT_USER_BOOKING,
  DELETE_COMPANY,
  EDIT_COMPANY,
  SET_COMPANY,
  SET_SEARCH_CLIENTS,
  UPDATE_SEAT_SUCCESS,
  SET_PAYMENTACCOUNTS,
  RE_BOOKING_SUCCESS,
  CANCEL_BOOKING_SUCCESS,
  SET_RE_AVAILABLE_TRIPS,
  UPDATE_SEAT_SUCCESS1,
  SET_REVIEW,
  COMPANY_CREATE_REVIEW,
} from '../types';
import axios from '../../util/axios';
import axiosNewInstance from 'axios';
import {getUserData} from './authActions';
// import {REACT_APP_SERVER_URL} from '@env';

const REACT_APP_SERVER_URL = 'https://travel-gh-backend.herokuapp.com';
// const url = process.env['REACT_APP_SERVER_URL'];
// https://548438c25b43.ngrok.io

export const fetchClients = () => async dispatch => {
  // dispatch({type: LOADING_DATA});
  // console.log(REACT_APP_SERVER_URL);
  await axios
    .get(`${REACT_APP_SERVER_URL}/clients`)
    .then(res => {
      dispatch({
        type: SET_CLIENTS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_CLIENTS,
        payload: [],
      });
    });
};

export const fetchBookings = () => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/booking/get-bookings`)
    .then(async res => {
      dispatch({
        type: SET_USER_BOOKINGS,
        payload: res.data,
      });
      await localStorage.setItem('bookings', JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_USER_BOOKINGS,
        payload: [],
      });
    });
};

export const fetchVehicles = () => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/vehicle/get-vehicles`)
    .then(async res => {
      dispatch({
        type: SET_VEHICLES,
        payload: res.data,
      });
      await localStorage.setItem('vehicles', JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_VEHICLES,
        payload: [],
      });
    });
};

export const fetchLocations = () => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/location/get-locations`)
    .then(async res => {
      dispatch({
        type: SET_LOCATIONS,
        payload: res.data,
      });
      await localStorage.setItem('locations', JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_LOCATIONS,
        payload: [],
      });
    });
};

export const fetchEmployees = () => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/employee/get-employees`)
    .then(async res => {
      dispatch({
        type: SET_EMPLOYEES,
        payload: res.data,
      });
      await localStorage.setItem('employees', JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_EMPLOYEES,
        payload: [],
      });
    });
};

export const fetchClientsByAddress = (lat, lng, loc, dat) => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/clients-location/${lat}/${lng}/${loc}/${dat}`)
    .then(res => {
      dispatch({
        type: SET_SEARCH_CLIENTS,
        payload: res.data,
      });
    })
    .catch(err => {
      // console.log(err);
      dispatch({
        type: SET_SEARCH_CLIENTS,
        payload: [],
      });
    });
};

export const fetchClient = compId => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .get(`${REACT_APP_SERVER_URL}/client/${compId}`)
    .then(res => {
      dispatch({
        type: SET_CLIENT,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_CLIENT,
        payload: {},
      });
    });
};

export const fetchReview = compId => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/review/${compId}`)
    .then(res => {
      dispatch({
        type: SET_REVIEW,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_REVIEW,
        payload: [],
      });
    });
};

export const createCompanyReview = review => async dispatch => {
  await axios
    .post(`${REACT_APP_SERVER_URL}/add-reviews`, review)
    .then(res => {
      dispatch({
        type: COMPANY_CREATE_REVIEW,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const fetchBooking = bookId => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .get(`${REACT_APP_SERVER_URL}/booking/get-booking/${bookId}`)
    .then(res => {
      dispatch({
        type: SET_USER_BOOKING,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_USER_BOOKING,
        payload: {},
      });
    });
};

export const fetchVehicle = vehId => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .get(`${REACT_APP_SERVER_URL}/vehicle/get-vehicle/${vehId}`)
    .then(res => {
      dispatch({
        type: SET_VEHICLE,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_VEHICLE,
        payload: {},
      });
    });
};

export const fetchLocation = locId => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .get(`${REACT_APP_SERVER_URL}/location/get-location/${locId}`)
    .then(res => {
      dispatch({
        type: SET_LOCATION,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_LOCATION,
        payload: {},
      });
    });
};

export const fetchEmployee = empId => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .get(`${REACT_APP_SERVER_URL}/employee/get-employee/${empId}`)
    .then(res => {
      dispatch({
        type: SET_EMPLOYEE,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_EMPLOYEE,
        payload: {},
      });
    });
};

export const fetchCompany = companyId => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .get(`${REACT_APP_SERVER_URL}/company/get-company/${companyId}`)
    .then(res => {
      dispatch({
        type: SET_COMPANY,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_COMPANY,
        payload: {},
      });
    });
};

export const fetchPaymentAccounts = compaId => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/client/paymentAccount/${compaId}`)
    .then(async res => {
      dispatch({
        type: SET_PAYMENTACCOUNTS,
        payload: res.data,
      });
      // await localStorage.setItem("paymentaccounts", JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_PAYMENTACCOUNTS,
        payload: [],
      });
    });
};

export const fetchAvailableFutureTrips = compId => async dispatch => {
  // dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/client/availableFutureTrip/${compId}`)
    .then(res => {
      dispatch({
        type: SET_AVAILABLE_FUTURE_TRIPS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_AVAILABLE_FUTURE_TRIPS,
        payload: {},
      });
    });
};

export const fetchAvailableTrips = (compId, tripData) => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .post(`${REACT_APP_SERVER_URL}/client/availableTrip/${compId}`, tripData)
    .then(res => {
      dispatch({
        type: SET_AVAILABLE_TRIPS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_AVAILABLE_TRIPS,
        payload: {},
      });
    });
};

export const fetchReAvailableTrips = (compId, tripData) => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .post(`${REACT_APP_SERVER_URL}/client/reavailableTrip/${compId}`, tripData)
    .then(res => {
      dispatch({
        type: SET_RE_AVAILABLE_TRIPS,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_RE_AVAILABLE_TRIPS,
        payload: {},
      });
    });
};

export const fetchTrips = () => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/trip/get-trips`)
    .then(async res => {
      dispatch({
        type: SET_TRIPS,
        payload: res.data,
      });
      await localStorage.setItem('trips', JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_TRIPS,
        payload: [],
      });
    });
};

export const fetchAvailableTrip = tripId => dispatch => {
  dispatch({type: LOADING_DATA});
  axios
    .get(`${REACT_APP_SERVER_URL}/trip/${tripId}`)
    .then(res => {
      dispatch({
        type: SET_AVAILABLE_TRIP,
        payload: res.data,
      });
      //   localStorage.setItem('tripInfo', JSON.stringify(res.data));
      //   history.push(`/trip/${tripId}`);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_AVAILABLE_TRIP,
        payload: {},
      });
    });
};

export const fetchTrip = tripId => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/trip/get-trip/${tripId}`)
    .then(res => {
      dispatch({
        type: SET_TRIP,
        payload: res.data,
      });
      // localStorage.setItem("tripInfo", JSON.stringify(res.data));
      // history.push(`/trip/${tripId}`);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SET_TRIP,
        payload: {},
      });
    });
};

export const addTrip = tripData => dispatch => {
  dispatch({type: LOADING_UI});
  axios
    .post(`${REACT_APP_SERVER_URL}/trip/create-trip`, tripData)
    .then(res => {
      dispatch({
        type: ADD_TRIP,
        payload: res.data.trip,
      });
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_TRIP,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const deleteTrip = tripId => dispatch => {
  axios
    .delete(`${REACT_APP_SERVER_URL}/trip/delete-trip/${tripId}`)
    .then(res => {
      dispatch({
        type: DELETE_TRIP,
        payload: tripId,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const editTrip = (tripData, tripId) => dispatch => {
  axios
    .put(`${REACT_APP_SERVER_URL}/trip/edit-trip/${tripId}`, tripData)
    .then(res => {
      dispatch({
        type: EDIT_TRIP,
        payload: res.data.trip,
      });
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_TRIP,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const addBooking = bookingData => async dispatch => {
  dispatch({type: LOADING_UI});
  await axios
    .post(`${REACT_APP_SERVER_URL}/booking/create-booking`, bookingData)
    .then(async res => {
      dispatch({
        type: ADD_USER_BOOKING,
        payload: res.data.booking,
      });
      await dispatch(fetchVehicles());
      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_USER_BOOKING,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const deleteBooking = bookId => dispatch => {
  axios
    .delete(`${REACT_APP_SERVER_URL}/booking/delete-booking/${bookId}`)
    .then(res => {
      dispatch({
        type: DELETE_USER_BOOKING,
        payload: bookId,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const editBooking = (bookingData, bookId) => dispatch => {
  axios
    .put(`${REACT_APP_SERVER_URL}/booking/edit-booking/${bookId}`, bookingData)
    .then(res => {
      dispatch({
        type: EDIT_USER_BOOKING,
        payload: res.data.booking,
      });
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_USER_BOOKING,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const addVehicle = vehicleData => async dispatch => {
  dispatch({type: LOADING_UI});
  await axios
    .post(`${REACT_APP_SERVER_URL}/vehicle/create-vehicle`, vehicleData)
    .then(async res => {
      dispatch({
        type: ADD_VEHICLE,
        payload: res.data.vehicle,
      });
      await dispatch(fetchVehicles());

      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_VEHICLE,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const deleteVehicle = vehicleId => async dispatch => {
  await axios
    .delete(`${REACT_APP_SERVER_URL}/vehicle/delete-vehicle/${vehicleId}`)
    .then(async res => {
      dispatch({
        type: DELETE_VEHICLE,
        payload: vehicleId,
      });
      await dispatch(fetchVehicles());
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const editVehicle = (vehicleData, vehicleId) => async dispatch => {
  await axios
    .put(
      `${REACT_APP_SERVER_URL}/vehicle/edit-vehicle/${vehicleId}`,
      vehicleData,
    )
    .then(async res => {
      dispatch({
        type: EDIT_VEHICLE,
        payload: res.data.vehicle,
      });
      await dispatch(fetchVehicles());
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_VEHICLE,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const addEmployee = employeeData => async dispatch => {
  dispatch({type: LOADING_UI});
  await axios
    .post(`${REACT_APP_SERVER_URL}/auth/signup-employee`, employeeData)
    .then(async res => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: res.data.employee,
      });
      await dispatch(fetchEmployees());

      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_EMPLOYEE,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const deleteEmployee = employeeId => async dispatch => {
  await axios
    .delete(`${REACT_APP_SERVER_URL}/employee/delete-employee/${employeeId}`)
    .then(async res => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: employeeId,
      });
      await dispatch(fetchEmployees());
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const editUser = (userDatta, userId) => async dispatch => {
  await axios
    .put(`${REACT_APP_SERVER_URL}/edit-user/${userId}`, userDatta)
    .then(async res => {
      dispatch({
        type: EDIT_USER,
        payload: res.data.user,
      });
      dispatch(getUserData());
      // await dispatch(fetchUser(userId));
      // await dispatch(fetchUsers());
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_USER,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const editEmployee = (employeeData, employeeId) => async dispatch => {
  await axios
    .put(
      `${REACT_APP_SERVER_URL}/employee/edit-employee/${employeeId}`,
      employeeData,
    )
    .then(async res => {
      dispatch({
        type: EDIT_EMPLOYEE,
        payload: res.data.employee,
      });
      await dispatch(fetchEmployee(employeeId));
      await dispatch(fetchEmployees());
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_EMPLOYEE,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const deleteCompany = companyId => async dispatch => {
  await axios
    .delete(`${REACT_APP_SERVER_URL}/company/delete-company/${companyId}`)
    .then(async res => {
      dispatch({
        type: DELETE_COMPANY,
        payload: companyId,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const editCompany = (companyData, companyId) => async dispatch => {
  await axios
    .put(
      `${REACT_APP_SERVER_URL}/company/edit-company/${companyId}`,
      companyData,
    )
    .then(async res => {
      dispatch({
        type: EDIT_COMPANY,
        payload: res.data.company,
      });
      await dispatch(fetchCompany(companyId));
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_COMPANY,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const addLocation = locationData => async dispatch => {
  dispatch({type: LOADING_UI});
  await axios
    .post(`${REACT_APP_SERVER_URL}/location/create-location`, locationData)
    .then(async res => {
      dispatch({
        type: ADD_LOCATION,
        payload: res.data.location,
      });
      await dispatch(fetchLocations());

      dispatch({type: CLEAR_ERRORS});
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_LOCATION,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const deleteLocation = locationId => async dispatch => {
  await axios
    .delete(`${REACT_APP_SERVER_URL}/location/delete-location/${locationId}`)
    .then(async res => {
      dispatch({
        type: DELETE_LOCATION,
        payload: locationId,
      });
      await dispatch(fetchLocations());
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const editLocation = (locationData, locationId) => async dispatch => {
  await axios
    .put(
      `${REACT_APP_SERVER_URL}/location/edit-location/${locationId}`,
      locationData,
    )
    .then(async res => {
      dispatch({
        type: EDIT_LOCATION,
        payload: res.data.location,
      });
      await dispatch(fetchLocations());
    })
    .catch(err => {
      console.log(err.response.data);
      if (err.response) {
        dispatch({
          type: SET_ERROR_LOCATION,
          payload: err.response.data,
        });
      } else {
        dispatch({
          type: SERVER_ERROR,
        });
      }
    });
};

export const addToCart = tripData => dispatch => {
  // const tripData = {
  //   tripId,
  //   quantity
  // }
  axios
    .post(`${REACT_APP_SERVER_URL}/cart`, tripData)
    .then(res => {
      dispatch({
        type: ADD_CART_SUCCESS,
        payload: tripData,
      });
      dispatch(getCart());
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: ADD_CART_FAIL,
      });
    });
};

export const getCart = () => dispatch => {
  axios
    .get(`${REACT_APP_SERVER_URL}/cart`)
    .then(res => {
      dispatch({
        type: SET_CART,
        payload: res.data,
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: SET_CART,
        payload: [],
      });
    });
};

export const deleteCartTrip = tripData => dispatch => {
  axios
    .post(`${REACT_APP_SERVER_URL}/delete-cart-trip`, tripData)
    .then(res => {
      dispatch({
        type: DELETE_TRIP_CART,
      });
      dispatch(getCart());
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const removeCartTrip = tripID => dispatch => {
  axios
    .post(`${REACT_APP_SERVER_URL}/remove-cart-trip/${tripID}`)
    .then(res => {
      // console.log(res.data);
      dispatch(getCart());
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const fetchAddress = (userData, history) => dispatch => {
  const location = `+${userData.aptName},+${userData.locality},+${userData.street},+${userData.zip}`;
  axiosNewInstance
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: process.env.REACT_APP_GOOGLE_API_KEY,
      },
    })
    .then(result => {
      const formattedAddress = result.data.results[0].formatted_address;
      // console.log(formattedAddress);
      const lat = result.data.results[0].geometry.location.lat;
      const lng = result.data.results[0].geometry.location.lng;
      userData.lat = lat;
      userData.lng = lng;
      userData.formattedAddress = formattedAddress;
      dispatch(addAddress(userData, history));
    })
    .catch(err => {
      console.log(err);
    });
};

export const addAddress = (userData, history) => dispatch => {
  // console.log(userData.formattedAddress);
  axios
    .post(`${REACT_APP_SERVER_URL}/user/address`, userData)
    .then(res => {
      // console.log(res.data);
      dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
      dispatch(placeBooking(history));
    })
    .catch(err => {
      console.log(err.response);
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

export const cancelBooking = (
  refundData,
  bookingId,
  tripId,
  body,
  body1,
) => async dispatch => {
  await axios
    .post(`${REACT_APP_SERVER_URL}/cancel-booking`, refundData)
    .then(res => {
      dispatch({
        type: CANCEL_BOOKING_SUCCESS,
        payload: refundData,
      });

      dispatch(changeSeatStatus1(tripId, body));
      dispatch(changeTicketsCount(tripId, body1));
      dispatch(getBooking(bookingId));
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const reBooking = (
  rebookingData,
  tripId,
  body,
  body1,
) => async dispatch => {
  await axios
    .post(`${REACT_APP_SERVER_URL}/re-booking`, rebookingData)
    .then(res => {
      dispatch({
        type: RE_BOOKING_SUCCESS,
        payload: rebookingData,
      });

      dispatch(changeSeatStatus1(tripId, body));
      dispatch(changeTicketsCount(tripId, body1));
      // dispatch(fetchReAvailableTrips(tripId));
      // dispatch(getBookings());
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const placeBooking = (bookingData, tripId, body) => async dispatch => {
  await axios
    .post(`${REACT_APP_SERVER_URL}/booking`, bookingData)
    .then(res => {
      dispatch({
        type: ADD_BOOKING_SUCCESS,
        payload: bookingData,
      });

      dispatch(changeSeatStatus(tripId, body));
      dispatch(getCart());
      dispatch(getBookings());
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const getBookings = () => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/bookings`)
    .then(res => {
      dispatch({
        type: SET_BOOKINGS,
        payload: res.data.bookings,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const getBooking = bookingId => async dispatch => {
  dispatch({type: LOADING_DATA});
  await axios
    .get(`${REACT_APP_SERVER_URL}/booking/${bookingId}`)
    .then(res => {
      dispatch({
        type: SET_BOOKING,
        payload: res.data.booking,
      });
      // localStorage.setItem('bookingDetail', JSON.stringify(res.data.booking));
      // history.push(`/booking/${bookingId}`);
    })

    .catch(err => {
      console.log(err.response);
    });
};

export const changeTicketsCount = (tripId, body1) => dispatch => {
  axios
    .put(`${REACT_APP_SERVER_URL}/edit-ticketsCount/${tripId}`, body1)
    .then(res => {
      dispatch({
        type: UPDATE_TICKETSCOUNT_SUCCESS,
        payload: body1,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const changeSeatStatus = (tripId, body) => dispatch => {
  axios
    .put(`${REACT_APP_SERVER_URL}/edit-seatStatus/${tripId}`, body)
    .then(res => {
      dispatch({
        type: UPDATE_SEAT_SUCCESS,
        // payload: body,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const changeSeatStatus1 = (tripId, body) => dispatch => {
  axios
    .put(`${REACT_APP_SERVER_URL}/edit-seatStatus1/${tripId}`, body)
    .then(res => {
      dispatch({
        type: UPDATE_SEAT_SUCCESS1,
        // payload: body,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const changeBookingStatus = (bookingId, body) => dispatch => {
  axios
    .post(`${REACT_APP_SERVER_URL}/booking-status/${bookingId}`, body)
    .then(res => {
      dispatch({
        type: EDIT_STATUS,
        payload: res.data.updatedbooking,
      });
    })
    .catch(err => {
      console.log(err.response);
    });
};

export const socketStatusUpdate = booking => dispatch => {
  dispatch({
    type: EDIT_STATUS,
    payload: booking,
  });
};
