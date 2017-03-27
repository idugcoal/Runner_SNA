import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DepartureReducer from './DepartureReducer';

export default combineReducers({
  auth: AuthReducer,
  departure: DepartureReducer
});