import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import { setStartingPoint } from '../actions';
import { locations } from '../../config'
import Footer from './Footer';
import Style from './Style';

class SelectStartingPoint extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(startLocation) {
		this.props.setStartingPoint(this.props, startLocation)
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'A Curb')}>A Curb</Button>
						<Button onPress={this.onButtonPress.bind(this, 'B Curb')}>B Curb</Button>
						<Button onPress={this.onButtonPress.bind(this, 'C Curb')}>C Curb</Button>
						<Button onPress={this.onButtonPress.bind(this, 'other')}>Other</Button>
					</View>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'Alaska')}>Alaska</Button>
						<Button onPress={this.onButtonPress.bind(this, 'American')}>American</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Delta')}>Delta</Button>
					</View>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'Frontier')}>Frontier</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Southwest')}>Southwest</Button>
						<Button onPress={this.onButtonPress.bind(this, 'United')}>United</Button>
						<Button onPress={this.onButtonPress.bind(this, 'WestJet')}>WestJet</Button>
					</View>
				</View>
				<View style={Style.footer}>
				<Footer />
        </View>
			</View>
		);
	}
}

const mapStateToProps = ({ departure, arrival }) => {
  const { wheelchairNumber, currentGPS, runType } = departure;

  return { wheelchairNumber, runType, currentGPS };
};

export default connect(mapStateToProps, { 
	setStartingPoint
})(SelectStartingPoint);
