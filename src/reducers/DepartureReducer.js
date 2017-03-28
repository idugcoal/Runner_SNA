import {
SELECT_WHEELCHAIR,
SCAN_BOARDING_PASS,
ALTERNATE_BOARDING_PASS_INPUT,
FIRST_NAME_CHANGED,
LAST_NAME_CHANGED,
AIRLINE_CHANGED,
FLIGHT_NUMBER_CHANGED,
SELECT_GATE_NUMBER,
SELECT_STARTING_POINT,
SELECT_STOP,
// TSA_START,
TSA_END,
SET_FINAL_GATE_NUMBER,
} from '../actions/types';

const INITIAL_STATE = {
  wheelchairNumber: '',
  firstName: '',
  lastName: '',
  airline: '',
  flightNumber: '',
  destinationGate: '',
  finalGate: '',
  employeeLogin: '',
  deviceID: '',
  timeStart: '',
  locationFirstContactButton: '',
  locationFirstContactGPS: {
    latitude: '',
    longitude: ''
  },
  timeTSAStart: '',
  timeTSAEnd: '',
  stops: {},
  timeEnd: '',
  commentsTSA: '',
  commentsEnd: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_WHEELCHAIR:
      return { ...state, wheelchairNumber: action.payload };
    case SCAN_BOARDING_PASS:
      return { ...state, firstName: action.payload };
    case ALTERNATE_BOARDING_PASS_INPUT:
    	return { ...state, firstName: action.payload };
    case FIRST_NAME_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastName: action.payload };
    case AIRLINE_CHANGED: 
      return { ...state, airline: action.payload };
    case FLIGHT_NUMBER_CHANGED:
      return { ...state, flightNumber: action.payload };
    case SELECT_GATE_NUMBER:
    	return { ...state, destinationGate: action.payload }
    case SELECT_STARTING_POINT:
    	return { ...state, locationFirstContactButton: action.payload.locationFirstContactButton, locationFirstContactGPS: action.payload.locationFirstContactGPS, timeStart: action.payload.timeStart };
    case SELECT_STOP:
      return { ...state, error: 'Login Failed. Please Try Again.', password: '', loading: false };
    case TSA_END:
      return { ...state, commentsTSA: action.payload };
    default:
      return state;
  }
};