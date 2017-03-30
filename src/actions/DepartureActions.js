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
	TSA_START,
	TSA_END,
	SET_FINAL_GATE_NUMBER,
	ADD_STOP,
	UPDATE_CURRENT_POSITION,
	SET_TIME_START,
	SET_TIME_END
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

export const startTSA = () => {

	const timeTSAStart = Date.now();
	Actions.tsa();

	return(dispatch) => {
		dispatch({
			type: TSA_START,
			payload: timeTSAStart
		})
	}

}

export const addCommentsTSA = (text) => {
	
	const timeTSAEnd = Date.now();
	const commentsTSA = text;

	payload = {
		timeTSAEnd: timeTSAEnd,
		commentsTSA: commentsTSA
	}

	Actions.selectStopsSterile({ type: 'reset' });

	return(dispatch) => {
		dispatch({
			type: TSA_END,
			payload: payload
		});
	};
};

export const setFinalGateNumber = (text) => {
	
	Actions.closing({reset: true});
	console.log(text)
	return(dispatch) => {
		dispatch({
			type:SET_FINAL_GATE_NUMBER,
			payload: text
		})
	}
}

export const addStartingPoint = (buttonLocation, position) => {
	
	const { coords, timestamp } = position;
	const { latitude, longitude } = coords;
	const gps = {
		latitude: latitude,
		longitude: longitude,
		timestamp: timestamp,
	}

	const payload = {
		gps: gps,
		buttonValue: buttonLocation
	}

	Actions.selectStopsNonSterile();
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
	
	const { coords, timestamp } = position;
	const { latitude, longitude } = coords;
	const payload = {
		latitude: latitude,
		longitude: longitude,
		timestamp: timestamp
	}

	console.log('in action creator', payload);

	return(dispatch) => {
			dispatch({
				type: UPDATE_CURRENT_POSITION,
				payload: payload
			})
		}
}
export const setTimeStart = () => {
	return(dispatch) => {
		dispatch({
			type: SET_TIME_START,
			payload: Date.now()
		});
	};
}

export const setTimeEnd = () => {
	
	return(dispatch) => {
		dispatch({
			type: SET_TIME_END,
			payload: Date.now()
		})
	}	
}
 
