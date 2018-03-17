import { Actions } from 'react-native-router-flux';
import {
  SET_NUMBER_OF_PASSENGERS,
  SELECT_WHEELCHAIR_1,
  SELECT_WHEELCHAIR_2,
  SCAN_BOARDING_PASS_1,
  SCAN_BOARDING_PASS_2,
  PASSENGER_1_FIRST_NAME_CHANGED,
	PASSENGER_1_LAST_NAME_CHANGED,
	PASSENGER_2_FIRST_NAME_CHANGED,
	PASSENGER_2_LAST_NAME_CHANGED,
	AIRLINE_CHANGED,
	FLIGHT_NUMBER_CHANGED,
	ADD_STARTING_POINT,
	ADD_STARTING_POINT_ARRIVAL,
	ADD_STARTING_LOCATION_ARRIVAL,
	SELECT_GATE_NUMBER,
	TSA_START,
	TSA_END,
	SET_FINAL_GATE_NUMBER,
	ADD_STOP,
	UPDATE_CURRENT_POSITION,
	SET_TIME_START,
	SET_TIME_END,
	SET_RUN_TYPE,
	SET_DEPARTURE,
	SET_TIME_GATE_ARRIVAL,
	ADD_DESTINATION,
	ADD_COMMENTS_CLOSING,
	RETURN_TO_START,
	SET_PREBOARD_TYPE,
	CLEAR_PASSENGER
} from './types';

export const setRunType = (runType, deviceID) => {
	
	if(runType === 'arrival') {
		Actions.selectGate({ title: "Select Starting Point" });
	} else if (runType === 'departure') {
		Actions.selectStartingPoint();
	} else if (runType === 'checkin' || runType === 'preboard' || runType === 'transfer') {
		Actions.selectWheelchair({ title: "Select Wheelchair"});
	}
	
	const payload = {
		runType: runType,
		deviceID: deviceID
	}

	return(dispatch) => {
		dispatch({
			type: SET_RUN_TYPE,
			payload: payload
		})
	}
}

export const setStartingPoint = (props, buttonLocation) => {
	const { runType, currentGPS } = props
	const { latitude, longitude, timestamp } = currentGPS;
	const startLocationGPS = {
		latitude: latitude,
		longitude: longitude,
		timestamp: timestamp,
	}
	const payload = {
		startLocationGPS: startLocationGPS,
		startLocation: buttonLocation
	}

	Actions.selectNumberOfWheelchairs();
	return(dispatch) => {
		dispatch({ 
			type: ADD_STARTING_POINT,
			payload: payload
		});
	}
}

export const setNumberOfPassengers = (number) => {
	Actions.selectWheelchair({title: "Select Wheelchair #1"});
	return(dispatch) => {
		dispatch({
			type: SET_NUMBER_OF_PASSENGERS,
			payload: number
		})
	}
}

export const clearPassenger = (runType, returnTo) => {
	//if runType is arrival, navigate to SBP with 'clear'
	if(runType === 'arrival') {
		Actions.scanBoardingPass({ 'clearPax': true, returnTo: returnTo })
	}

	return(dispatch) => {
		dispatch({
			type: CLEAR_PASSENGER,
			payload: true
		})
	}
}

export const setWheelchair = (props, buttonValue) => {

	const {
		runType, 
		numPassengers, 
		passenger1Wheelchair, 
		passenger2Wheelchair, 
		passenger1FirstName, 
		passenger1LastName, 
		passenger2FirstName, 
		passenger2LastName, 
		airline, 
		flightNumber
	} = props;

	if (numPassengers === 1) {
		if(runType === 'departure' || runType == 'preboard' || runType == 'transfer') {
			Actions.scanBoardingPass({ title: "Scan Boarding Pass" });
		} else if (runType === 'arrival') {
			Actions.baggageClaim({ type: 'reset'});
		} 
		return(dispatch) => {
			dispatch({
				type: SELECT_WHEELCHAIR_1,
				payload: buttonValue
			})
		}
	}

	if (numPassengers === 2) {
		//if first wheelchair is empty, set it and navigate to select wheelchair
		if(passenger1Wheelchair == '') {
			Actions.selectWheelchair({ title: "Select Wheelchair #2" });
				return(dispatch) => {
					dispatch({
						type: SELECT_WHEELCHAIR_1,
						payload: buttonValue
					})
				}
		}
		//if 2nd wheelchair is empty 
		else if(runType === 'departure') {
			Actions.scanBoardingPass({ title: "Scan Boarding Pass #1" });
		} else if(runType === 'arrival') {
			Actions.baggageClaim({ type: 'reset' })
		}
		
		return(dispatch) => {
			dispatch({
				type: SELECT_WHEELCHAIR_2,
				payload: buttonValue
			})
		}
	}
}

export const addStartingPointArrival = (runType, position) => {

	const { coords, timestamp } = position;
	const { latitude, longitude } = coords;
	const startLocationGPS = {
		latitude: latitude,
		longitude: longitude,
		timestamp: timestamp,
	}
	const payload = {
		startLocationGPS: startLocationGPS,
	}
	
		return(dispatch) => {
			dispatch({ 
				type: ADD_STARTING_POINT_ARRIVAL,
				payload: payload
			});
		}
}

export const startTSA = () => {

	const timeTSAStart = Date.now();
	Actions.tsa({type: 'reset'});
	return(dispatch) => {
		dispatch({
			type: TSA_START,
			payload: timeTSAStart
		})
	}
}

export const addCommentsTSA = (text, timeTSAStart) => {
	const timeTSAEnd = Date.now();
	const commentsTSA = text;

	payload = {
		timeTSAStart: timeTSAStart,
		timeTSAEnd: timeTSAEnd,
		commentsTSA: commentsTSA
	}

	// Actions.selectStopsSterile({ type: 'reset' });
	return(dispatch) => {
		dispatch({
			type: TSA_END,
			payload: payload
		});
	};
};

export const setGateNumber = (props, gateNumber) => {
	const { runType, final } = props

	if (runType === 'arrival') {
		Actions.selectNumberOfWheelchairs();
	} else if (runType === 'departure' && final) {
		Actions.closing();
		return(dispatch) => {
				dispatch({
					type: SET_FINAL_GATE_NUMBER,
					payload: gateNumber
				})
		}
	} else if (runType === 'departure') {
		// Actions.selectStopsNonSterile();
		startTSA()
	} else if (runType === 'preboard') {
		Actions.preboard();
	} else if (runType === 'transfer') {
		if (props.destinationGate === '') {
			Actions.selectGate({ title: "Select Destination Gate"})
		} else {
			Actions.closing()
			return(dispatch) => {
				dispatch({
					type: SET_FINAL_GATE_NUMBER,
					payload: gateNumber
				})
			}
		}
	}

	return(dispatch) => {
		dispatch({
			type: SELECT_GATE_NUMBER,
			payload: gateNumber
		})
	}
}

export const setFinalGateNumber = (text) => {
	
	Actions.closing({reset: true});
	return(dispatch) => {
		dispatch({
			type:SET_FINAL_GATE_NUMBER,
			payload: text
		})
	}
}

export const addStop = (currentGPS, stopLocation) => {
	
	const { latitude, longitude, timestamp } = currentGPS

	const payload = {
		latitude,
		longitude,
		timestamp,
		stopLocation
	}

	return(dispatch) => {
		dispatch({
			type: ADD_STOP,
			payload: payload
		})
	}
}

export const addDestination = (text) => {
	Actions.scanBoardingPass({ type: 'reset' })
	return(dispatch) => {
		dispatch({ 
			type: ADD_DESTINATION,
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

export const setPreboardType = (runType, preboardType) => {
	Actions.closing({ type: 'reset' })
	return(dispatch) => {
		dispatch({
			type: SET_PREBOARD_TYPE,
			payload: preboardType
		})
	}
}

export const returnToStart = () => {
	Actions.main({ type: 'reset' })
	return(dispatch) => {
		dispatch({
			type: RETURN_TO_START
		})
	}
}

export const scanBoardingPass = (props, boardingPassData, clearPax, returnTo) => {

	const {
		runType, 
		timeStart, 
		numPassengers, 
		passenger1Wheelchair, 
		passenger2Wheelchair, 
		passenger1FirstName, 
		passenger1LastName, 
		passenger2FirstName, 
		passenger2LastName, 
		airline, 
		flightNumber
	} = props

	if(clearPax) {
		if(returnTo === 'SSS') {
			Actions.selectStopsSterile({type: 'reset'});
		}  else {
			Actions.selectStopsNonSterile({type: 'reset'})
		}
		return(dispatch) => {
			dispatch({
				type: SCAN_BOARDING_PASS_1,
				payload: boardingPassData
			})
		}
	}
	else if(runType === 'preboard') {
		Actions.selectGate({type: 'reset'});
		return(dispatch) => {
			dispatch({
				type: SCAN_BOARDING_PASS_1,
				payload: boardingPassData
			})
		}
	} 
	else if(runType === 'transfer') {
		Actions.selectGate({type: 'reset', title: "Select Starting Gate"});
		return(dispatch) => {
			dispatch({
				type: SCAN_BOARDING_PASS_1,
				payload: boardingPassData
			})
		}
	}
	else if (numPassengers === 1) {
		if (runType === 'departure') {
			Actions.selectGate({type: 'reset'});
		} else if (runType === 'arrival') {
			Actions.closing({ runType: runType, timeStart: timeStart, p1FirstName: boardingPassData.firstName, p1LastName: boardingPassData.lastName, al: boardingPassData.airline, fn: boardingPassData.flightNumber, type: 'reset'})
		}
		return(dispatch) => {
			dispatch({
				type: SCAN_BOARDING_PASS_1,
				payload: boardingPassData
			})
		}
	}	
	else if (numPassengers === 2) {
		if(runType === 'departure') {
			if(passenger1FirstName == '' || passenger1LastName == '') {
				Actions.move({type: 'reset'});
				return(dispatch) => {
					dispatch({
						type: SCAN_BOARDING_PASS_1,
						payload: boardingPassData
					})
				}
			}	else {
					Actions.selectGate({type: 'reset'});
					return(dispatch) => {
						dispatch({
							type: SCAN_BOARDING_PASS_2,
							payload: boardingPassData
						})
					}
				}
			} else if (runType === 'arrival') {
					if(passenger1FirstName == '' || passenger1LastName == '') {
						Actions.move({type: 'reset'});
						return(dispatch) => {
							dispatch({
								type: SCAN_BOARDING_PASS_1,
								payload: boardingPassData
							})
						}
					}
					else {
						Actions.closing({ type: 'reset' });
						return(dispatch) => {
							dispatch({
								type: SCAN_BOARDING_PASS_2,
								payload: boardingPassData
							})
						}
					}
			}
		}
};

export const addStartingLocationArrival = (text) => {
	
	return(dispatch) => {
		dispatch({
			type: ADD_STARTING_LOCATION_ARRIVAL,
			payload: text
		})
	}

}

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
 