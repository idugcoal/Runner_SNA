import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SET_NUMBER_OF_PASSENGERS,
  SELECT_WHEELCHAIR_1,
  SELECT_WHEELCHAIR_2,
  SCAN_BOARDING_PASS_1,
  SCAN_BOARDING_PASS_2,
  ALTERNATE_BOARDING_PASS_INPUT,
  PASSENGER_1_FIRST_NAME_CHANGED,
	PASSENGER_1_LAST_NAME_CHANGED,
	PASSENGER_2_FIRST_NAME_CHANGED,
	PASSENGER_2_LAST_NAME_CHANGED,
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
	SET_TIME_END,
	SET_RUN_TYPE
} from './types';

export const setRunType = (runType) => {

	if(runType === 'departure') {
		Actions.selectStartingPoint();
		//write to database
		return(dispatch) => {
			dispatch({
				type: SET_RUN_TYPE,
				payload: runType
			})
		}
	} else if (runType === 'arrival') {
		// Actions.selectNumberOfWheelchairs();
		Actions.selectGate();
		//write to database
		return(dispatch) => {
			dispatch({
				type: SET_RUN_TYPE,
				payload: runType
			})
		}
	} else if (runType == 'checkin') {
		//do checkin stuff
	}
}

export const setNumberOfPassengers = (runType, number) => {
	if(runType === 'departure') {	
		Actions.selectWheelchair({title: "Select Wheelchair #1"});
		return(dispatch) => {
			dispatch({
				type: SET_NUMBER_OF_PASSENGERS,
				payload: number
			})
		}
	} else if(runType === 'arrival') {
		Actions.selectWheelchair({title: "Select Wheelchair #1"});
		return(dispatch) => {
			dispatch({
				type: SET_NUMBER_OF_PASSENGERS,
				payload: number
			})
		}
	}
}

export const addStartingPoint = (runType, buttonLocation, position) => {

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
	
	if(runType === 'departure') {
		Actions.selectNumberOfWheelchairs();
		return(dispatch) => {
			dispatch({ 
				type: ADD_STARTING_POINT,
				payload: payload
			});
		}
	}
}

export const selectWheelchair = (runType, numPassengers, passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, airline, flightNumber, buttonValue) => {

	if (numPassengers === 1) {
		Actions.scanBoardingPass({ title: "Scan Boarding Pass" });
		return(dispatch) => {
			dispatch({
				type: SELECT_WHEELCHAIR_1,
				payload: buttonValue
			})
		}
	}

	if (numPassengers === 2) {
		if (passenger1Wheelchair === '') {
			Actions.scanBoardingPass({ title: "Scan Boarding Pass #1" });
			return(dispatch) => {
				dispatch({
					type: SELECT_WHEELCHAIR_1,
					payload: buttonValue
				})
			}
		}
		if (passenger1Wheelchair != '' && passenger1FirstName != '' && passenger1LastName != '' && passenger2FirstName != '' && passenger2LastName != '' && flightNumber != '') {
			Actions.selectGate();
			//write to database
			return(dispatch) => {
				dispatch({
					type: SELECT_WHEELCHAIR_2,
					payload: buttonValue
				})
			}
		}
		if (passenger1Wheelchair != '') {
			Actions.scanBoardingPass({ title: "Scan Boarding Pass #2 "});
			return(dispatch) => {
				dispatch({
					type: SELECT_WHEELCHAIR_2,
					payload: buttonValue
				})
			}
		}
	}
};

export const scanBoardingPass = (runType, numPassengers, passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, airline, flightNumber, boardingPassData) => {

		//if there's one passenger, set boardingPass1 to boardingPassData, route to selectGate
		if(numPassengers === 1) {
			Actions.selectGate();
			//write to database
			return(dispatch) => {
				dispatch({
					type: SCAN_BOARDING_PASS_1,
					payload: boardingPassData
				})
			}
		}
		//if there are two passengers, 
		//if passenger1FirstName is empty, set boardingPass1 to boardingPassData, route to selectWheelchair
		else if(passenger1FirstName === '') {
			Actions.selectWheelchair({type: 'reset', title: "Select Wheelchair #2"});
			return(dispatch) => {
				dispatch({
					type: SCAN_BOARDING_PASS_1,
					payload: boardingPassData
				})
			}
		//if passenger1FirstName is not empty, set boardingPass2 to boardingPassData, route to selectGate
		}	else {
			//write to database
			Actions.selectGate();
			return(dispatch) => {
				dispatch({
					type: SCAN_BOARDING_PASS_2,
					payload: boardingPassData
				})
			}	
		}
};

export const passenger1FirstNameChanged = (text) => {
  return {
    type: PASSENGER_1_FIRST_NAME_CHANGED,
    payload: text
  };
};

export const passenger1LastNameChanged = (text) => {
  return {
    type: PASSENGER_1_LAST_NAME_CHANGED,
    payload: text
  };
};

export const passenger2FirstNameChanged = (text) => {
  return {
    type: PASSENGER_2_FIRST_NAME_CHANGED,
    payload: text
  };
};

export const passenger2LastNameChanged = (text) => {
  return {
    type: PASSENGER_2_LAST_NAME_CHANGED,
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

export const selectGateNumber = (runType, text) => {
	
	if(runType === 'departure') {
		Actions.selectStopsNonSterile();
		return(dispatch) => {
			dispatch({
				type: SELECT_GATE_NUMBER,
				payload: text
			});
		};
	} else if (runType === 'arrival') {
		// Actions.selectStopsSterile();
		Actions.selectNumberOfWheelchairs();
		return(dispatch) => {
			dispatch({
				type: SELECT_GATE_NUMBER,
				payload: text
			})
		}
	}
};

export const startTSA = () => {

	const timeTSAStart = Date.now();
	Actions.tsa();
	//write to database
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
	//write to database
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

export const addStop = (text) => {
	//write to database
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
	//write to database
	return(dispatch) => {
			dispatch({
				type: UPDATE_CURRENT_POSITION,
				payload: payload
			})
		}
}
export const setTimeStart = () => {
	//write to database
	return(dispatch) => {
		dispatch({
			type: SET_TIME_START,
			payload: Date.now()
		});
	};
}

export const setTimeEnd = () => {
	//write to database
	return(dispatch) => {
		dispatch({
			type: SET_TIME_END,
			payload: Date.now()
		})
	}	
}
 
