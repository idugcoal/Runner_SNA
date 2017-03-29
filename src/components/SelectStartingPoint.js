import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';
import { Actions } from 'react-native-router-flux'
import { addStartingPoint } from '../actions';
import Footer from './Footer';

import Style from './Style';

class SelectStartingPoint extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(startLocation) {

		const locationFirstContactButton = startLocation;
		const locationFirstContactGPS = navigator.geolocation.getCurrentPosition((position) => console.log(position));

		Actions.selectStopsNonSterile();
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'aCurb')}>A Curb</Button>
						<Button onPress={this.onButtonPress.bind(this, 'bCurb')}>B Curb</Button>
						<Button onPress={this.onButtonPress.bind(this, 'cCurb')}>C Curb</Button>
					</View>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'alaska')}>Alaska</Button>
						<Button onPress={this.onButtonPress.bind(this, 'american')}>American</Button>
						<Button onPress={this.onButtonPress.bind(this, 'delta')}>Delta</Button>
						<Button onPress={this.onButtonPress.bind(this, 'frontier')}>Frontier</Button>
					</View>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'southwest')}>Southwest</Button>
						<Button onPress={this.onButtonPress.bind(this, 'united')}>United</Button>
						<Button onPress={this.onButtonPress.bind(this, 'westJet')}>WestJet</Button>
					</View>
				</View>
				<View style={Style.footer}>
				<Footer />
        </View>
			</View>
		);
	}


}

export default SelectStartingPoint;