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
	ADD_STARTING_POINT,
	SELECT_GATE_NUMBER,
	TSA_END,
	SET_FINAL_GATE_NUMBER,
	ADD_STOP,
	UPDATE_CURRENT_POSITION
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

export const setFinalGateNumber = (text) => {
	return(dispatch) => {
		dispatch({
			type:SET_FINAL_GATE_NUMBER,
			payload: text
		})
	}
}

export const addStartingPoint = (buttonLocation, { coords, timestamp }) => {
	const { latitude, longitude } = coords;
	const payload = {
		locationFirstContactButton: buttonLocation,
		timeStart: timestamp,
		locationFirstContactGPS: {
			latitude: latitude,
			longitude: longitude
		}
	};
	return(dispatch) => {
		dispatch({ 
			type: ADD_STARTING_POINT,
			payload: payload
		});
	}
}

export const addStop = (text) => {
	return(dispatch) => {
		dispatch({
			type: ADD_STOP,
			payload: text
		})
	}
}

export const updateCurrentPosition = (position) => {
	
	console.log('in action creator', position);
	
	return(dispatch) => {
			dispatch({
				type: UPDATE_CURRENT_POSITION,
				payload: position
			})
		}
}
 
