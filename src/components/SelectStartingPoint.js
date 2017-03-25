import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';
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
					<View style={Style.row}>
						<Button>A Curb</Button>
						<Button>B Curb</Button>
						<Button>C Curb</Button>
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