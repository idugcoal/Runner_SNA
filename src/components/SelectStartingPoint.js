import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { addStartingPoint } from '../actions';
import Footer from './Footer';
import Style from './Style';

class SelectStartingPoint extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(startLocation) {
		const locationFirstContactGPS = navigator.geolocation.getCurrentPosition((position) => {
			this.props.addStartingPoint(this.props.runType, startLocation, position);
		});
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
						<Button onPress={this.onButtonPress.bind(this, 'westjet')}>WestJet</Button>
					</View>
				</View>
				<View style={Style.footer}>
				<Footer />
        </View>
			</View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { wheelchairNumber, runType } = departure;

  return { wheelchairNumber, runType };
};

export default connect(mapStateToProps, { 
	addStartingPoint
})(SelectStartingPoint);
