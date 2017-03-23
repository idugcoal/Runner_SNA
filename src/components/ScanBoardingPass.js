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
	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<Camera
						style={{ flex: 1}}
						barCodeTypes={[ 'pdf417' ]}
						onBarCodeRead={(e) => console.log(e)}
					/>
				</View>
				<View style={Style.footer}>
				</View>
			</View>
		);
	}
}

export default ScanBoardingPass;