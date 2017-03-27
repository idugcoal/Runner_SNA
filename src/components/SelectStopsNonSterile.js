import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux'
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { cnbc, cnn, latapenade, octravelmart, starbucks, zovs, phone, restroom } from '../../assets';
import { Actions } from 'react-native-router-flux';


class SelectStopsNonSterile extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress() {
		console.log('this.props in SelectStopsNonSterile:', this.props)
		Actions.tsa();
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						
						<ImageButton 
							source={cnbc} 
							onPress={this.onButtonPress.bind(this)}
						/>
						<ImageButton 
							source={cnn} 
							onPress={this.onButtonPress.bind(this)}
						/>
						

					</View>
					<View style={Style.row}>
							<ImageButton 
							source={latapenade} 
							onPress={this.onButtonPress.bind(this)}
						/>
						<ImageButton 
							source={octravelmart} 
							onPress={this.onButtonPress.bind(this)}
						/>
						
					</View>
					<View style={Style.row}>
							<ImageButton 
							source={starbucks} 
							onPress={this.onButtonPress.bind(this)}
						/>
						<ImageButton 
							source={zovs} 
							onPress={this.onButtonPress.bind(this)}
						/>
						
					</View>
						<View style={Style.row}>
							<ImageButton 
							source={phone} 
							onPress={this.onButtonPress.bind(this)}
						/>
						<ImageButton 
							source={restroom} 
							onPress={this.onButtonPress.bind(this)}
						/>
						
					</View>
					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>
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
  const { wheelchairNumber, flightNumber, airline, firstName, lastName } = departure;

  return { wheelchairNumber, flightNumber, airline, firstName, lastName };
};

export default connect(mapStateToProps, { })(SelectStopsNonSterile);