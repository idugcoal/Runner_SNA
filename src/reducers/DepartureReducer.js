import {
SET_NUMBER_OF_PASSENGERS,
SELECT_WHEELCHAIR_1,
SELECT_WHEELCHAIR_2,
SCAN_BOARDING_PASS_1,
SCAN_BOARDING_PASS_2,
// ALTERNATE_BOARDING_PASS_INPUT,
PASSENGER_1_FIRST_NAME_CHANGED,
PASSENGER_1_LAST_NAME_CHANGED,
PASSENGER_2_FIRST_NAME_CHANGED,
PASSENGER_2_LAST_NAME_CHANGED,
AIRLINE_CHANGED,
FLIGHT_NUMBER_CHANGED,
SELECT_GATE_NUMBER,
ADD_STARTING_POINT,
SELECT_STOP,
TSA_START,
TSA_END,
SET_FINAL_GATE_NUMBER,
ADD_STOP, 
UPDATE_CURRENT_POSITION,
SET_TIME_START,
SET_TIME_END,
SET_RUN_TYPE,
ADD_STARTING_POINT_ARRIVAL,
ADD_STARTING_LOCATION_ARRIVAL,
// ADD_COMMENTS_TSA,
ADD_COMMENTS_CLOSING,
ADD_DESTINATION,
RETURN_TO_START,
SET_PREBOARD_TYPE
} from '../actions/types';

const INITIAL_STATE = {
  runType: '',
  passenger1Wheelchair: '',
  passenger1FirstName: '',
  passenger1LastName: '',
  passenger2Wheelchair: '',
  passenger2FirstName: '',
  passenger2LastName: '',
  numPassengers: 1,
  airline: '',
  flightNumber: '',
  destinationGate: '',
  finalGate: '',
  employeeLogin: '',
  deviceID: '',
  currentGPS: {
    latitude: '',
    longitude: '',
    timestamp: ''
  },
  timeStart: '',
  timeGateArrival: '',
  locationFirstContact: {
    buttonValue: '',
    gps: {
      latitude: '',
      longitude: '',
      timestamp: ''
    } 
  },
  timeTSAStart: '',
  timeTSAEnd: '',
  numStops: 0,
  stops: [],
  timeEnd: '',
  commentsTSA: '',
  commentsEnd: '',
  destination: '',
  preboardType: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RUN_TYPE:
      console.log('YOOOO', action.payload)
      return { ...state, runType: action.payload.runType, deviceID: action.payload.deviceID, timeStart: Date.now() };
    case SET_NUMBER_OF_PASSENGERS:
      return { ...state, numPassengers: action.payload };
    case SELECT_WHEELCHAIR_1:
      return { ...state, passenger1Wheelchair: action.payload };
    case SELECT_WHEELCHAIR_2:
      return { ...state, passenger2Wheelchair: action.payload };
    case SCAN_BOARDING_PASS_1:
      return { ...state, passenger1FirstName: action.payload.firstName, passenger1LastName: action.payload.lastName, airline: action.payload.airline, flightNumber: action.payload.flightNumber };
    case SCAN_BOARDING_PASS_2:
      return { ...state, passenger2FirstName: action.payload.firstName, passenger2LastName: action.payload.lastName, airline: action.payload.airline, flightNumber: action.payload.flightNumber };
    // case ALTERNATE_BOARDING_PASS_INPUT:
    //   console.log('ALTERNATEBOARDINGPASSINPUT NEVER HERE')
    // 	return { ...state, passenger1FirstName: action.payload };
    case PASSENGER_1_FIRST_NAME_CHANGED:
      return { ...state, passenger1FirstName: action.payload };
    case PASSENGER_1_LAST_NAME_CHANGED:
      return { ...state, passenger1LastName: action.payload };
    case PASSENGER_2_FIRST_NAME_CHANGED:
      return { ...state, passenger2FirstName: action.payload };
    case PASSENGER_2_LAST_NAME_CHANGED:
      return { ...state, passenger2LastName: action.payload };
    case AIRLINE_CHANGED: 
      return { ...state, airline: action.payload };
    case FLIGHT_NUMBER_CHANGED:
      return { ...state, flightNumber: action.payload };
    case SELECT_GATE_NUMBER:
    	return { ...state, destinationGate: action.payload };
    case ADD_STARTING_POINT:
    	return { ...state, startLocation: action.payload.startLocation, startLocationGPS: action.payload.startLocationGPS };
    case ADD_STARTING_POINT_ARRIVAL:
      return { ...state, startLocationGPS: action.payload.startLocationGPS };
    case ADD_STARTING_LOCATION_ARRIVAL:
      return { ...state, startLocation: action.payload };
    case SELECT_STOP:
      return { ...state, error: 'Login Failed. Please Try Again.', password: '', loading: false };
    case TSA_START:
      return { ...state, timeTSAStart: action.payload };
    case TSA_END:
      return { ...state, commentsTSA: action.payload.commentsTSA, timeTSAStart: action.payload.timeTSAStart, timeTSAEnd: action.payload.timeTSAEnd };
    case ADD_STOP:
      return { ...state, stops: [...state.stops, action.payload] };
    case ADD_DESTINATION:
      return { ...state, destination: action.payload };
    case UPDATE_CURRENT_POSITION:
      return { ...state, currentGPS: action.payload };
    case SET_FINAL_GATE_NUMBER: 
      return { ...state, finalGate: action.payload };
    case SET_TIME_START:
      return { ...state, timeStart: action.payload };
    case SET_TIME_END:
      return { ...state, timeEnd: action.payload };
    case SET_PREBOARD_TYPE:
      return { ...state, preboardType: action.payload };
    case RETURN_TO_START:
      return { ...state, ...INITIAL_STATE }
    default:
      return state;
  }
};