import {
  WHEELCHAIR_SELECTED
} from '../actions/types';

const INITIAL_STATE = {
  wheelchairNumber: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WHEELCHAIR_SELECTED:
      return { ...state, wheelchairNumber: action.payload };
    default:
      return state;
  }
};