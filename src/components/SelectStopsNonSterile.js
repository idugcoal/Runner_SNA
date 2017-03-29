import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux'
import { addStop } from '../actions';
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { cnbc, cnn, latapenade, octravelmart, starbucks, zovs, phone, restroom } from '../../assets';
import { Actions } from 'react-native-router-flux';


class SelectStopsNonSterile extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(stopLocation) {
		console.log('e in SelectStopsNonSterile:', stopLocation)
		// this.props.addStop(stopLocation);
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
						<Button onPress={() => Actions.tsa()}>
							TSA Start
						</Button>
					</CardSection>
				</View>
				<Footer />
			</View>
		);
	}


}

const mapStateToProps = ({ departure }) => {
  const { wheelchairNumber, flightNumber, airline, firstName, lastName, stops } = departure;

  return { wheelchairNumber, flightNumber, airline, firstName, lastName, stops };
};

export default connect(mapStateToProps, { 
	addStop
})(SelectStopsNonSterile);