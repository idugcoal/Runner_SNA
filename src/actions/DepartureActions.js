import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SELECT_WHEELCHAIR,
  SCAN_BOARDING_PASS,
  ALTERNATE_BOARDING_PASS_INPUT,
  FIRST_NAME_CHANGED,
	LAST_NAME_CHANGED,
	AIRLINE_CHANGED,
	FLIGHT_NUMBER_CHANGED,
	SELECT_GATE_NUMBER,
	TSA_END
} from './types';

export const selectWheelchair = ({ wheelchairNumber }) => {
  
  Actions.scanBoardingPass();

  return(dispatch) => {
  	dispatch({
	    type: SELECT_WHEELCHAIR,
	    payload: wheelchairNumber
  	})
  };
};

export const scanBoardingPass = ({ firstName, lastName, airline, flightNumber }) => {

	Actions.selectGate({ type: 'reset' });

	return(dispatch) => {
		dispatch({
			type: SCAN_BOARDING_PASS,
			payload: firstName
		})
	};
};

export const alternateBoardingPassInput = () => {
	Actions.alternateBoardingPassInput();
}

export const firstNameChanged = (text) => {
  return {
    type: FIRST_NAME_CHANGED,
    payload: text
  };
};

export const lastNameChanged = (text) => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text
  };
};
export const airlineChanged = (text) => {
  return {
    type: AIRLINE_CHANGED,
    payload: text
  };
};
export const flightNumberChanged = (text) => {
  return {
    type: FLIGHT_NUMBER_CHANGED,
    payload: text
  };
};
export const selectGateNumber = (text) => {
	
	Actions.selectStartingPoint();
	
	return(dispatch) => {
		dispatch({
			type: SELECT_GATE_NUMBER,
			payload: text
		});
	};
};

export const addCommentsTSA = (text) => {
	
	Actions.selectStopsSterile({ type: 'reset' });

	return(dispatch) => {
		dispatch({
			type: TSA_END,
			payload: text
		});
	};
};