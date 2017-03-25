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
			boardingPass: '', 
			wheelchairNumber: this.props.wheelchairNumber
		};
	} 

	onReadSuccess(boardingPassData) {

		//PARSE BOARDING PASS DATA

		Actions.inputGateNumber({ wheelchairNumber: this.props.wheelchairNumber, boardingPass: boardingPassData.data, type: 'reset'});
	}

	onReadFail() {
		Actions.alternateBoardingPassInput({ wheelchairNumber: this.props.wheelchairNumber});
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
