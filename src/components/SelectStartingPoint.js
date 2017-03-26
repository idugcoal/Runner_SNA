import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';
import { Actions } from 'react-native-router-flux'

import Style from './Style';

class SelectStartingPoint extends Component {

	constructor(props) {
		super(props);

		this.state = {
			runType: this.props.runType,
			wheelchairNumber: this.props.wheelchairNumber,
			boardingPass: this.props.boardingPass,
			firstName: this.props.firstName,
			lastName: this.props.lastName,
			airline: this.props.airline,
			flightNumber: this.props.flightNumber,
			gateNumber: this.props.gateNumber,
			startLocation: ''
		}
	}

	onButtonPress(startLocation) {
		Actions.selectStopsNonSterile({
			runType: this.state.runType,
    	wheelchairNumber: this.state.wheelchairNumber,
    	boardingPass: this.state.boardingPass,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      airline: this.state.airline,
      flightNumber: this.state.flightNumber,
    	gateNumber: this.state.gateNumber,
    	startLocation: startLocation
    });
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						<Button 
							onPress={this.onButtonPress.bind(this, 'aCurb')}>
								A Curb
						</Button>
						<Button 
							onPress={this.onButtonPress.bind(this, 'bCurb')}>
								B Curb
						</Button>
						<Button 
							onPress={this.onButtonPress.bind(this, 'cCurb')}>
								C Curb
						</Button>
					</View>
					<View style={Style.row}>
						<Button>Alaska</Button>
						<Button>American</Button>
						<Button>Delta</Button>
						<Button>Frontier</Button>
					</View>
					<View style={Style.row}>
						<Button>Southwest</Button>
						<Button>United</Button>
						<Button>WestJet</Button>
					</View>
				</View>
				<View style={Style.footer}>
					<Text>Wheelchair #: {this.state.wheelchairNumber}</Text>
        	<Text>Boarding Pass Info: {this.state.boardingPass}</Text>
          <Text>Destination Gate #: {this.state.gateNumber}</Text>
        </View>
			</View>
		);
	}


}

export default SelectStartingPoint;