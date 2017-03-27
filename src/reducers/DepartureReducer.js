import {
SELECT_WHEELCHAIR,
SCAN_BOARDING_PASS,
ALTERNATE_BOARDING_PASS_INPUT,
SELECT_GATE_NUMBER,
SELECT_STARTING_POINT,
SELECT_STOP,
TSA_START,
TSA_END,
} from '../actions/types';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  airline: '',
  flightNumber: '',
  destinationGate: '',
  finalGate: '',
  wheelchairNumber: '',
  employeeLogin: '',
  deviceID: '',
  timeStart: '',
  locationFirstContactButton: '',
  locationFirstContactGPS: {},
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
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, airline: action.payload.airline };
    case ALTERNATE_BOARDING_PASS_INPUT:
    	return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, airline: action.payload.airline };
    case SELECT_GATE_NUMBER:
    	return { ...state, destinationGate: action.payload }
    case SELECT_STARTING_POINT:
    	return { ...state, locationFirstContactButton: action.payload.locationFirstContactButton, locationFirstContactGPS: action.payload.locationFirstContactGPS, timeStart: action.payload.timeStart };
    case SELECT_STOP:
      return { ...state, error: 'Login Failed. Please Try Again.', password: '', loading: false };
    case TSA_START:
      return { ...state, error: 'Login Failed. Please Try Again.', password: '', loading: false };
    case TSA_END:
      return { ...state, error: 'Login Failed. Please Try Again.', password: '', loading: false };
    default:
      return state;
  }
};