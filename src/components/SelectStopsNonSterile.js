import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux'
import { addStop, startTSA } from '../actions';
import { Actions } from 'react-native-router-flux'
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { cnbc, cnn, latapenade, octravelmart, starbucks, zovs, phone, restroom } from '../../assets';

class SelectStopsNonSterile extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(stopLocation) {
		console.log('e in SelectStopsNonSterile:', stopLocation)
		// this.props.addStop(stopLocation);
	}

	renderEndingButton() {
		if(this.props.runType === 'departure') {
			return (
				<Button onPress={() => this.props.startTSA()}>
					TSA Start
				</Button>
			);
		} else if(this.props.runType === 'arrival') {
			return (
				<Button onPress={() => Actions.baggageClaim()}>
					Go to Baggage Claim
				</Button>
			);
		}
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						
						<ImageButton 
							source={cnbc}
							onPress={this.onButtonPress.bind(this, 'cnbc')}
						/>
						<ImageButton 
							source={cnn}
							onPress={this.onButtonPress.bind(this, 'cnn')}
						/>
						

					</View>
					<View style={Style.row}>
							<ImageButton 
							source={latapenade} 
							onPress={this.onButtonPress.bind(this, 'laTapenade')}
						/>
						<ImageButton 
							source={octravelmart}
							onPress={this.onButtonPress.bind(this, 'ocTravelMart')}
						/>
						
					</View>
					<View style={Style.row}>
							<ImageButton 
							source={starbucks} 
							onPress={this.onButtonPress.bind(this, 'starbucks')}
						/>
						<ImageButton 
							source={zovs}
							onPress={this.onButtonPress.bind(this, 'zovs')}
						/>
						
					</View>
						<View style={Style.row}>
							<ImageButton 
							source={phone}
							onPress={this.onButtonPress.bind(this, 'phone')}
						/>
						<ImageButton 
							source={restroom} 
							onPress={this.onButtonPress.bind(this, 'restroom')}
						/>
						
					</View>
					<CardSection>
						{this.renderEndingButton()}
					</CardSection>
				</View>
				<Footer />
			</View>
		);
	}


}

const mapStateToProps = ({ departure }) => {
  const { wheelchairNumber, flightNumber, airline, passenger1FirstName, passenger1LastName, stops, runType } = departure;

  return { wheelchairNumber, flightNumber, airline, passenger1FirstName, passenger1LastName, stops, runType };
};

export default connect(mapStateToProps, { 
	addStop, startTSA
})(SelectStopsNonSterile);