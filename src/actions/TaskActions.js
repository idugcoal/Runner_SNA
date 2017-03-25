import { Actions } from 'react-native-router-flux';
import { 
	WHEELCHAIR_SELECTED
} from './types';

export const wheelchairSelected = (wheelchairNumber) => {
	return {
		type: WHEELCHAIR_SELECTED,
		payload: wheelchairNumber
	};
};