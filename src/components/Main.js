import React, { Component } from 'react';
import { Keyboard, View } from 'react-native';
import firebase from 'firebase';
import { updateWheelchair } from '../utils/firebaseService';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info'
import { updateCurrentPosition, setRunType, logoutUser } from '../actions';
import { Card, CardSection, Button } from './common';

class Main extends Component {
	
	componentWillMount() {

		Keyboard.dismiss();

    navigator.geolocation.getCurrentPosition((position) => {
    	this.props.updateCurrentPosition(position);
    });


    navigator.geolocation.watchPosition((position) => {
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

  onPreboard() {
    this.props.setRunType('preboard', DeviceInfo.getUniqueID())
  }

  onCheckIn() {
  	this.props.setRunType('checkin', DeviceInfo.getUniqueID());
  }
  onLogout() {
    logoutUser();
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
          <Button onPress={this.onPreboard.bind(this)}>Preboard</Button>
        </CardSection>
				<CardSection>
					<Button onPress={this.onCheckIn.bind(this)}>Wheelchair Check-In</Button>
				</CardSection>
        <CardSection>
          <Button onPress={this.onLogout.bind(this)}>Log Out</Button>
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