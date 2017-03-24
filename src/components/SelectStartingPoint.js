import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Style from './Style';

class SelectStartingPoint extends Component {

	constructor(props) {
		super(props);

		this.state = {
			wheelchairNumber: this.props.wheelchairNumber,
			boardingPass: this.props.boardingPass,
			gateNumber: this.props.gateNumber
		}
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<Text>Select Starting Point</Text>
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