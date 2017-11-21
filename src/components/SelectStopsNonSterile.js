import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux'
import { startTSA, addStop, clearPassenger } from '../actions';
import { Actions } from 'react-native-router-flux'
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { nonSterile } from '../../assets';
import chunk from 'lodash/chunk';

class SelectStopsNonSterile extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(stopLocation) {
		this.props.addStop(this.props.currentGPS, stopLocation)
	}

	clearPassenger() {
		this.props.clearPassenger(this.props.runType, 'SSN')
	}

	renderEndingButtons() {
		if(this.props.numPassengers == 1 || this.props.clearPax ) {
			if(this.props.runType === 'departure') {
				return (
						<Button onPress={() => this.props.startTSA()}>
							TSA Start
						</Button>
				);
			} 
			else if(this.props.runType === 'arrival') {
				return (
					<Button onPress={() => Actions.baggageClaim()}>
						Go to Baggage Claim
					</Button>
				);
			}
		}
		else if(this.props.numPassengers == 2) {
			if(this.props.runType === 'departure') {
				return (
					<View style={Style.row}>
						<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger1Wheelchair}</Button>
						<Button onPress={() => this.props.startTSA()}>
							TSA Start
						</Button>
						<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger2Wheelchair}</Button>
					</View>
				);
			} 
			else if(this.props.runType === 'arrival') {
				return (
					<View style={Style.row}>
						<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger1Wheelchair}</Button>
						<Button onPress={() => Actions.baggageClaim()}>
							Go to Baggage Claim
						</Button>
						<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger2Wheelchair}</Button>
					</View>
				);
			}
		}
	}


	renderButtons() {
		return chunk(nonSterile, 4).map((row, index) => (
			<View style={Style.row} key={index}>
				{row.map(item => <ImageButton source={item.image} onPress={this.onButtonPress.bind(this, item.name)} key={item.name}/>)}
			</View>
		))
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					{this.renderButtons()}
					<CardSection>
						{this.renderEndingButtons()}
					</CardSection>
				</View>
				<Footer />
			</View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { runType, timeStart, currentGPS, numPassengers, clearPax, passenger1Wheelchair, passenger2Wheelchair } = departure;

  return { runType, timeStart, currentGPS, numPassengers, clearPax, passenger1Wheelchair, passenger2Wheelchair };
};

export default connect(mapStateToProps, { startTSA, addStop, clearPassenger })(SelectStopsNonSterile);