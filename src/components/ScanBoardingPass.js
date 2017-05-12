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
	} 

	onReadSuccess(boardingPassString) {
		switch(boardingPassString.data.substring(36, 38)) {
			case 'AS':
				var airline = 'Alaska';
				break;
			case 'AA':
				var airline = 'American';
				break;
			case 'DL':
				var airline = 'Delta';
				break;
			case 'F9':
				var airline = 'Frontier';
				break;
			case 'UA':
				var airline = 'United';
				break;
			case 'WN':
				var airline = 'Southwest';
				break;
			case 'WS':
				var airline = 'WestJet';
				break;
			default: 
				var airline = "Scan Failed";
				break;
		}

		const slash = boardingPassString.data.indexOf('/');
		const boardingPassData = {
			firstName: boardingPassString.data.substring(slash + 1, 21).trim(),
			lastName: boardingPassString.data.substring(2, slash),
			airline: airline,
			flightNumber: boardingPassString.data.substring(36, 43)
		}

		this.props.scanBoardingPass(this.props, boardingPassData);
		// 	this.props.runType,
		// 	this.props.timeStart,
		// 	this.props.numPassengers,
		// 	this.props.passenger1Wheelchair,
		// 	this.props.passenger2Wheelchair,
		// 	this.props.passenger1FirstName,
		// 	this.props.passenger1LastName,
		// 	this.props.passenger2FirstName,
		// 	this.props.passenger2LastName,
		// 	this.props.airline,
		// 	this.props.flightNumber,
		// 	boardingPassData
		// );
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
  const { timeStart, passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, flightNumber, numPassengers, airline, runType } = departure;

  return { timeStart, passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, flightNumber, numPassengers, airline, runType };
};

export default connect(mapStateToProps, {
  scanBoardingPass, alternateBoardingPassInput, setTimeStart
})(ScanBoardingPass);
