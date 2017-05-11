import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import firebase from 'firebase';
import { updateWheelchair } from '../utils/firebaseService';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info'
import { updateCurrentPosition, setRunType } from '../actions';
import { Card, CardSection, Button } from './common';

class Main extends Component {
	
	componentWillMount() {

		Keyboard.dismiss();

    navigator.geolocation.getCurrentPosition((position) => {
    	// TODO: replace this with a firebase function?
    	this.props.updateCurrentPosition(position);
    });

    navigator.geolocation.watchPosition((position) => {
    	// TODO: replace this with a firebase function?
    	if(this.props.numPassengers != '') {
    		if(this.props.numPassengers === '1') {
    			if(this.props.passenger1Wheelchair != '') {
    				updateWheelchair(this.props.passenger1Wheelchair, position);
    			}
    		}
    		else if(this.props.numPassengers === '2') {
    			if(this.props.passenger1Wheelchair != '' && this.props.passenger2Wheelchair != '') {
    				updateWheelchair(this.props.passenger1Wheelchair, position);
    				updateWheelchair(this.props.passenger2Wheelchair, position);
    			}
    		}
    	}
    	this.props.updateCurrentPosition(position);
    });
	}

	onDeparture() {
    this.props.setRunType('departure', DeviceInfo.getUniqueID());
  }

  onArrival() {
  	this.props.setRunType('arrival', DeviceInfo.getUniqueID());
  }

  onCheckIn() {
  	Actions.checkIn();
  }

	render() {
		return (
			<Card>
				<CardSection>
					<Button onPress={this.onDeparture.bind(this)}>Departure</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onArrival.bind(this)}>Arrival</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onCheckIn.bind(this)}>Check-In</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = ({ departure, auth }) => {
  const { currentGPS, numPassengers, passenger1Wheelchair, passenger2Wheelchair } = departure;
  const { email } = auth;

  return { currentGPS, email, numPassengers, passenger1Wheelchair, passenger2Wheelchair };
};

export default connect(mapStateToProps, { updateCurrentPosition, setRunType })(Main);