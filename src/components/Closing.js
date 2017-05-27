import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { closeDeparture, returnToStart } from '../actions';
import { writeDepartureEnd, writeArrivalEnd } from '../utils/firebaseService';
import { writeDepartureToAsyncStorage, writeArrivalToAsyncStorage } from '../utils/AsyncStorageService';
import { Button, CardSection, ImageButton, NumberButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';


class Closing extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '',
			arrivalTime: Date.now(),
		}
	}

	onButtonPress() {
		if(this.props.runType === 'departure') {
			// writeDepartureEnd(this.props, this.state.text, this.state.arrivalTime)
			writeDepartureToAsyncStorage(this.props, this.state.text, this.state.arrivalTime);
		}
		if(this.props.runType === 'arrival') {
			// writeArrivalEnd(this.props, this.state.text, this.state.arrivalTime)
			console.log('in Closing', this.props.deviceID)
			writeArrivalToAsyncStorage(this.props, this.state.text, this.state.arrivalTime);
		}
		this.props.returnToStart();
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<TextInput
		        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
		        editable = {true}
		        multiline = {true}
		        numberOfLines = {10}
		        value={this.state.text}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'Add comment...'}
		      />
		      <CardSection>
			      <Button onPress={this.onButtonPress.bind(this)}>
			      	Submit Comment and Begin New Task
			      </Button>
			    </CardSection>
				</View>
		   </View>
		);
	}
}

const mapStateToProps = ({ auth, departure }) => {
  const { 
    airline, 
    commentsTSA,
    destination,
    destinationGate,
    deviceID, 
    finalGate,
    flightNumber,
    numPassengers, 
  	runType, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    startLocation,
    startLocationGPS,
    stops,
    timeStart, 
    timeTSAEnd,
    timeTSAStart
  } = departure;

  const { user } = auth;

  return { 
  	airline, 
    commentsTSA,
    destination,
    destinationGate,
    deviceID,
    finalGate,
    flightNumber,
    numPassengers, 
  	runType, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    startLocation,
    startLocationGPS,
    stops,
    timeStart, 
    timeTSAEnd,
    timeTSAStart,
    user
  };
};

export default connect(mapStateToProps, {
	closeDeparture, returnToStart
})(Closing);