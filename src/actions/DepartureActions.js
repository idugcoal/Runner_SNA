import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SELECT_WHEELCHAIR
} from './types';

export const selectWheelchair = (dispatch, value) => {
  dispatch({
    type: SELECT_WHEELCHAIR,
    payload: value
  });

  Actions.scanBoardingPass();
};