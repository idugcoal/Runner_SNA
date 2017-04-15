import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DepartureReducer from './DepartureReducer';
// import CheckInReducer from './CheckInReducer';

export default combineReducers({
  auth: AuthReducer,
  departure: DepartureReducer,
  // checkin: CheckInReducer
});