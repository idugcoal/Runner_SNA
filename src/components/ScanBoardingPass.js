import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import { scanBoardingPass, firstNameChanged, lastNameChanged, airlineChanged, flightNumberChanged, alternateBoardingPassInput, setTimeStart } from '../actions';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './common'
import Footer from './Footer';
import Style from './Style';

class ScanBoardingPass extends Component {
	
	constructor(props) {
		super(props);
		this.props.setTimeStart();
	} 

	parseBoardingPass(boardingPassData) {
		// return boardingPass;
	}

	onReadSuccess(boardingPassString) {
		const boardingPass = {
			firstName: 'John',
			lastName: 'Smith',
			airline: 'Delta',
			flightNumber: '6Y4Z38'
		}
		this.props.scanBoardingPass({ firstName: boardingPass.firstName })
		console.log(boardingPassString);
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
  const { boardingPass } = departure;

  return { boardingPass };
};

export default connect(mapStateToProps, {
  scanBoardingPass, alternateBoardingPassInput, setTimeStart
})(ScanBoardingPass);
