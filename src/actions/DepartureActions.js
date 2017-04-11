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
	SET_TIME_END
} from './types';

export const setNumberOfPassengers = (number) => {
	Actions.selectWheelchair({title: "Select Wheelchair"});
	return(dispatch) => {
		dispatch({
			type: SET_NUMBER_OF_PASSENGERS,
			payload: number
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

	Actions.selectNumberOfWheelchairs();
	return(dispatch) => {
		dispatch({ 
			type: ADD_STARTING_POINT,
			payload: payload
		});
	}
}

export const selectWheelchair = (wheelchairNumber, passenger1Wheelchair) => {

  //if there's one passenger, set wheelchair1 to wheelchairNumber, route to scan boarding pass
  Actions.scanBoardingPass({title: "Scan Boarding Pass"});
 
  //if there are two passengers, 
  //if wheelchair1 is empty, set wheelchair1 to wheelchairNumber, route to select wheelchair
  if(passenger1Wheelchair === '') {
  	return(dispatch) => {
  		dispatch({
  			type: SELECT_WHEELCHAIR_1,
  			payload: wheelchairNumber
  		})
  	}
  //if wheelchair1 is not empty, set wheelchair2 to wheelchairNumber, route to scan boarding pass
  } else {
  	return(dispatch) => {
  		dispatch({
  			type: SELECT_WHEELCHAIR_2,
  			payload: wheelchairNumber
  		})
  	}
  }
};

export const scanBoardingPass = (boardingPassData, numPassengers, passenger1FirstName) => {

	//if there's one passenger, set boardingPass1 to boardingPassData, route to selectGate
	if(numPassengers === 1) {
		Actions.selectGate();
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
		Actions.selectWheelchair({type: 'reset'});
		return(dispatch) => {
			dispatch({
				type: SCAN_BOARDING_PASS_1,
				payload: boardingPassData
			})
		}
	//if passenger1FirstName is not empty, set boardingPass2 to boardingPassData, route to selectGate
	}	else {
		Actions.selectGate();
		return(dispatch) => {
			dispatch({
				type: SCAN_BOARDING_PASS_2,
				payload: boardingPassData
			})
		}	
	}
};

export const alternateBoardingPassInput = () => {
	Actions.alternateBoardingPassInput();
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
export const selectGateNumber = (text) => {
	
	Actions.selectStopsNonSterile();
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
 
