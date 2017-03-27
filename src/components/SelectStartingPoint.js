import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './common';
import { Actions } from 'react-native-router-flux'
import Footer from './Footer';

import Style from './Style';

class SelectStartingPoint extends Component {

	constructor(props) {
		super(props);

	}

	onButtonPress(startLocation) {
		Actions.selectStopsNonSterile();
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
				<Footer />
        </View>
			</View>
		);
	}


}

export default SelectStartingPoint;