import {
  SELECT_DEPARTURE,
  SELECT_ARRIVAL,
  SELECT_CHECKIN
} from '../actions/types';

const INITIAL_STATE = {
  task: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_DEPARTURE:
      return { ...state, task: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
    	return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
    	return { ...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
    	return { ...state, error: 'Login Failed. Please Try Again.', password: '', loading: false };
    default:
      return state;
  }
};