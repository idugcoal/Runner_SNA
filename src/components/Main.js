import React, { Component } from 'react';
import { Keyboard, View } from 'react-native';
import firebase from 'firebase';
import { updateWheelchair } from '../utils/firebaseService';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info'
import { updateCurrentPosition, logoutUser, setRunType } from '../actions';
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

  onButtonPress(runType) {
    this.props.setRunType(runType, DeviceInfo.getUniqueID());
  }

  onLogout() {
    logoutUser();
  }

	render() {
		return (
			<Card>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this, 'departure')}>Departure</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this, 'arrival')}>Arrival</Button>
				</CardSection>
          <CardSection>
          <Button onPress={this.onButtonPress.bind(this, 'preboard')}>Preboard</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this, 'transfer')}>Transfer</Button>
        </CardSection>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this, 'checkin')}>Wheelchair Check-In</Button>
				</CardSection>
        <CardSection>
          <Button onPress={this.onLogout.bind(this)}>Log Out</Button>
        </CardSection>
			</Card>
		);
	}
}

const mapStateToProps = ({ departure, auth, arrival }) => {
  const { currentGPS, numPassengers, passenger1Wheelchair, passenger2Wheelchair } = departure;
  const { email } = auth;

  return { currentGPS, email, numPassengers, passenger1Wheelchair, passenger2Wheelchair};
};

export default connect(mapStateToProps, { updateCurrentPosition, setRunType })(Main);