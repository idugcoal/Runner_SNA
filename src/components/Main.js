import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info'
import { updateCurrentPosition, setRunType } from '../actions';
import { Card, CardSection, Button } from './common';

class Main extends Component {
	
	componentWillMount() {
		// const { currentUser } = firebase.auth();
		// const uid = currentUser.uid;
		// console.log(uid, Date.now())
		// console.log(currentUser);

		console.log('uniqueID', DeviceInfo.getUniqueID());
		
		Keyboard.dismiss();

    navigator.geolocation.getCurrentPosition((position) => {
    	// TODO: replace this with a firebase function?
    	this.props.updateCurrentPosition(position);
    });

    navigator.geolocation.watchPosition((position) => {
    	// TODO: replace this with a firebase function?
    	this.props.updateCurrentPosition(position);
    });
	}

	onDeparture() {
    this.props.setRunType('departure', this.props.email);
  }

  onArrival() {
  	this.props.setRunType('arrival', this.props.email);
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
  const { currentGPS } = departure;
  const { email } = auth;
  // console.log('MAIN', currentGPS, 'EMAIL:', email)

  return { currentGPS, email };
};

export default connect(mapStateToProps, { updateCurrentPosition, setRunType })(Main);