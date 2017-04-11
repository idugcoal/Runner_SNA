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
		this.state = {
			callCount: 0
		}
	} 

	onReadSuccess(boardingPassString) {
		
		const slash = boardingPassString.data.indexOf('/');

		const boardingPassData = {
			firstName: boardingPassString.data.substring(slash + 1, 21).trim(),
			lastName: boardingPassString.data.substring(2, slash),
			airline: boardingPassString.data.substring(36, 38),
			flightNumber: boardingPassString.data.substring(36, 43)
		}
		this.props.scanBoardingPass(boardingPassData, this.props.numPassengers, this.props.passenger1FirstName);
		// this.setState({callCount: 1});
	
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
  const { passenger1FirstName, numPassengers } = departure;

  return { passenger1FirstName, numPassengers };
};

export default connect(mapStateToProps, {
  scanBoardingPass, alternateBoardingPassInput, setTimeStart
})(ScanBoardingPass);
