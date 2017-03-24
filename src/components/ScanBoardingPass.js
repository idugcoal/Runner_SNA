import React, { Component } from 'react';
import {
	Dimensions,
	Text,
	TouchableHighlight,
	View
} from 'react-native';
import Camera from 'react-native-camera';
import Style from './Style';

class ScanBoardingPass extends Component {
	
	constructor(props) {
		
		super(props);
		this.state = { boardingPass: '' };
	} 

	onReadSuccess(boardingPassData) {

		this.setState({ boardingPass: boardingPassData.data });
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
					<Text>{this.state.boardingPass}</Text>
				</View>
			</View>
		);
	}
}

export default ScanBoardingPass;

// onBarCodeRead={(e) => this.onReadSuccess.bind(this, e)}