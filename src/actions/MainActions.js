import { Actions } from 'react-native-router-flux';
import {
	SELECT_ARRIVAL,
	SELECT_DEPARTURE,
	SELECT_CHECKIN
} from './types';

export const selectArrival = () => {
	Actions.arrival();
}

export const selectDeparture = () => {
	Actions.departure();
}

export const selectCheckin = () => {
	Actions.checkIn()
}