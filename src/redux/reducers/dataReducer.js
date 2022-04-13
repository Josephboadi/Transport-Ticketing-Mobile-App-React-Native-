import {
  SET_CLIENTS,
  SET_SEARCH_CLIENTS,
  LOADING_DATA,
  SET_CLIENT,
  SET_AVAILABLE_TRIPS,
  SET_AVAILABLE_FUTURE_TRIPS,
  SET_AVAILABLE_TRIP,
  SET_TRIPS,
  SET_TRIP,
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  ADD_BOOKING_SUCCESS,
  RE_BOOKING_SUCCESS,
  CANCEL_BOOKING_SUCCESS,
  UPDATE_TICKETSCOUNT_SUCCESS,
  SET_CART,
  DELETE_TRIP_CART,
  SET_BOOKINGS,
  SET_BOOKING,
  SET_VEHICLES,
  SET_VEHICLE,
  SET_LOCATIONS,
  SET_LOCATION,
  EDIT_STATUS,
  SET_USER_BOOKING,
  SET_USER_BOOKINGS,
  SET_EMPLOYEES,
  SET_EMPLOYEE,
  SET_COMPANY,
  EDIT_USER,
  UPDATE_SEAT_SUCCESS,
  UPDATE_SEAT_SUCCESS1,
  SET_PAYMENTACCOUNTS,
  SET_RE_AVAILABLE_TRIPS,
  SET_REVIEW,
  COMPANY_CREATE_REVIEW,
} from '../types';

const initialState = {
  clients: [],
  review: [],
  addReview: null,
  clientsSearch: [],
  paymentAccounts: [],
  client: {},
  availableTrip: [],
  reavailableTrip: [],
  availableFutureTrip: [],
  availableTripDetail: {},
  cart: [],
  price: '',
  loading: true,
  loadingReview: true,
  addCartSuccess: null,
  deleteSuccessTrip: null,
  bookings: [],
  booking: {},
  userBookings: [],
  userBooking: {},
  vehicles: [],
  vehicle: {},
  employees: [],
  employee: {},
  company: {},
  locations: [],
  location: {},
  trips: [],
  trip: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_CLIENTS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };
    case SET_REVIEW:
      return {
        ...state,
        loading: true,
        review: action.payload.result,
        loading: false,
      };
    case COMPANY_CREATE_REVIEW:
      return {
        ...state,
        addReview: true,
      };
    case SET_SEARCH_CLIENTS:
      return {
        ...state,
        loading: false,
        clientsSearch: action.payload,
      };
    case SET_PAYMENTACCOUNTS:
      return {
        ...state,
        paymentAccounts: action.payload,
        loading: false,
      };
    case SET_CLIENT:
      return {
        ...state,
        loading: false,
        client: action.payload.result,
      };
    case SET_AVAILABLE_TRIPS:
      return {
        ...state,
        loading: false,
        availableTrip: action.payload.result,
      };

    case SET_RE_AVAILABLE_TRIPS:
      return {
        ...state,
        loading: false,
        reavailableTrip: action.payload.result,
      };
    case SET_AVAILABLE_FUTURE_TRIPS:
      return {
        ...state,
        loading: false,
        availableFutureTrip: action.payload.result,
      };
    case SET_AVAILABLE_TRIP:
      return {
        ...state,
        loading: false,
        availableTripDetail: action.payload.result,
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        addCartSuccess: true,
      };
    case ADD_BOOKING_SUCCESS:
      return {
        ...state,
        addBookingSuccess: true,
      };
    case RE_BOOKING_SUCCESS:
      return {
        ...state,
        reBookingSuccess: true,
      };
    case CANCEL_BOOKING_SUCCESS:
      return {
        ...state,
        cancelBookingSuccess: true,
      };
    case UPDATE_TICKETSCOUNT_SUCCESS:
      return {
        ...state,
        updateTicketsCountSuccess: true,
      };
    case UPDATE_SEAT_SUCCESS:
      return {
        ...state,
        updateSeatStatusSuccess: true,
      };
    case UPDATE_SEAT_SUCCESS1:
      return {
        ...state,
        updateSeatStatusSuccess1: true,
      };
    case ADD_CART_FAIL:
      return {
        ...state,
        addCartSuccess: false,
      };
    case DELETE_TRIP_CART:
      return {
        ...state,
        deleteSuccessTrip: true,
      };
    case SET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
      };
    case SET_BOOKING:
      return {
        ...state,
        booking: action.payload,
        loading: false,
      };
    case SET_USER_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
      };
    case SET_USER_BOOKING:
      return {
        ...state,
        booking: action.payload,
        loading: false,
      };
    case SET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
        loading: false,
      };
    case SET_VEHICLE:
      return {
        ...state,
        vehicle: action.payload,
        loading: false,
      };
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    case SET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
        loading: false,
      };
    case SET_COMPANY:
      return {
        ...state,
        company: action.payload,
        loading: false,
      };
    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
        loading: false,
      };
    case SET_TRIPS:
      return {
        ...state,
        trips: action.payload,
        loading: false,
      };
    case SET_TRIP:
      return {
        ...state,
        trip: action.payload,
        loading: false,
      };
    case EDIT_STATUS:
      return {
        ...state,
        bookings: state.bookings.map(booking =>
          booking._id === action.payload._id ? {...action.payload} : booking,
        ),
      };
    case SET_CART:
      return {
        ...state,
        loading: false,
        cart: action.payload.cart,
        price: action.payload.totalPrice,
      };
    default:
      return state;
  }
}
