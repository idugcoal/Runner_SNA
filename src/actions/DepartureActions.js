import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  SELECT_WHEELCHAIR
} from './types';

export const selectWheelchair = ({ wheelchairNumber }) => {
  
  Actions.scanBoardingPass();

  return(dispatch) => {
  	dispatch({
    type: SELECT_WHEELCHAIR,
    payload: wheelchairNumber
  })};

};