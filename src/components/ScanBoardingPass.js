import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { scanBoardingPass, firstNameChanged, lastNameChanged, airlineChanged, flightNumberChanged, alternateBoardingPassInput, setTimeStart } from '../actions';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { Button, CardSection } from './common'
import Footer from './Footer';
import Style from './Style';

class ScanBoardingPass extends Component {
	
	constructor(props) {
		super(props);
		this.props.setTimeStart();
	} 

	onReadSuccess(boardingPassString) {
		
		switch(boardingPassString.data.substring(36, 38)) {
			case 'AS':
				var airline = 'Alaska';
			case 'AA':
				var airline = 'American';
			case 'DL':
				var airline = 'Delta';
			case 'F9':
				var airline = 'Frontier';
			case 'UA':
				var airline = 'United';
			case 'WN':
				var airline = 'Southwest';
			case 'WS':
				var airline = 'WestJet';

		}

		const slash = boardingPassString.data.indexOf('/');
		const boardingPassData = {
			firstName: boardingPassString.data.substring(slash + 1, 21).trim(),
			lastName: boardingPassString.data.substring(2, slash),
			airline: airline,
			flightNumber: boardingPassString.data.substring(36, 43)
		}
		this.props.scanBoardingPass(
			this.props.runType,
			this.props.numPassengers,
			this.props.passenger1Wheelchair,
			this.props.passenger2Wheelchair,
			this.props.passenger1FirstName,
			this.props.passenger1LastName,
			this.props.passenger2FirstName,
			this.props.passenger2LastName,
			this.props.airline,
			this.props.flightNumber,
			boardingPassData
			);
	
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<Camera 
						style={{ flex: 1}}
						barCodeTypes={[ 'pdf417' ]}
						onBarCodeRead={this.onReadSuccess.bind(this)}
					/>
					<CardSection>
						<Button style={Style.alternate} onPress={() => Actions.alternateBoardingPassInput()}>Manual Input</Button> 
					</CardSection>
				</View>
				<Footer />
			</View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, flightNumber, numPassengers, airline, runType } = departure;

  return { passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, flightNumber, numPassengers, airline, runType };
};

export default connect(mapStateToProps, {
  scanBoardingPass, alternateBoardingPassInput, setTimeStart
})(ScanBoardingPass);
