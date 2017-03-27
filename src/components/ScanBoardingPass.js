import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { scanBoardingPass } from '../actions';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { Button } from './common'
import Footer from './Footer';
import Style from './Style';

class ScanBoardingPass extends Component {
	
	constructor(props) {
		
		super(props);
	} 

	parseBoardingPass(boardingPassData) {
		

		// return boardingPass;
	}

	onReadSuccess(boardingPassData) {

		const boardingPass = {
			firstName: 'John',
			lastName: 'Smith',
			airline: 'Delta',
			flightNumber: '6Y4Z38'
		}
		// const boardingPass = this.parseBoardingPass.bind(this, boardingPassData);
		this.props.scanBoardingPass({ boardingPass: boardingPass })

	}
	onReadFail() {
		Actions.alternateBoardingPassInput();
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
					<Button style={Style.alternate} onPress={this.onReadFail.bind(this)}>Manual Input</Button> 
				</View>
				<Footer />
			</View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { boardingPass } = departure;


  return { boardingPass };
};

export default connect(mapStateToProps, {
  scanBoardingPass
})(ScanBoardingPass);
