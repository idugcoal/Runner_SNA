import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TaskReducer from './TaskReducer';
import DepartureReducer from './DepartureReducer';

export default combineReducers({
  auth: AuthReducer,
  task: TaskReducer,
  departure: DepartureReducer
});