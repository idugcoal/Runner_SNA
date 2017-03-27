import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { Button } from './common'
import Style from './Style';

class ScanBoardingPass extends Component {
	
	constructor(props) {
		
		super(props);
		this.state = {
			runType: this.props.runType,
			wheelchairNumber: this.props.wheelchairNumber,
			boardingPass: '',
			firstName: '',
			lastName: '',
			airline: '',
			flightNumber: ''
		};
	} 

	onReadSuccess(boardingPassData) {

		//PARSE BOARDING PASS DATA

		Actions.selectGate({ 
			runType: this.state.runType,
			wheelchairNumber: this.state.wheelchairNumber,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			airline: this.state.airline,
			flightNumber: this.state.flightNumber,
			boardingPass: boardingPassData.data, 
			type: 'reset'});
	}

	onReadFail() {
		Actions.alternateBoardingPassInput({ 
			runType: this.state.runType,
			wheelchairNumber: this.state.wheelchairNumber
		});
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
					<Button style={Style.alternate} onPress={this.onReadFail.bind(this)}>[Manual Input]</Button> 
				</View>
				<View style={Style.footer}>
					<Text>Wheelchair #: {this.state.wheelchairNumber}</Text>
				</View>
			</View>
		);
	}
}

export default ScanBoardingPass;
