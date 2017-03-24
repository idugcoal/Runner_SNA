import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Camera from 'react-native-camera';
import Style from './Style';
import { Actions } from 'react-native-router-flux';

class ScanBoardingPass extends Component {
	
	constructor(props) {
		
		super(props);
		this.state = {
			boardingPass: '', 
			wheelchairNumber: this.props.wheelchairNumber
		};
	} 

	onReadSuccess(boardingPassData) {

		Actions.inputGateNumber({ wheelchairNumber: this.props.wheelchairNumber, boardingPass: boardingPassData.data });
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
				</View>
				<View style={Style.footer}>
					<Text>Wheelchair #: {this.state.wheelchairNumber}</Text>
				</View>
			</View>
		);
	}
}

export default ScanBoardingPass;
