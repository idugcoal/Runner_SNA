import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, CardSection, ImageButton } from './common';
import Style from './Style';
import { cnbc, cnn, latapenade, octravelmart, starbucks, zovs, phone, restroom } from '../../assets';
import { Actions } from 'react-native-router-flux';


class SelectStopsNonSterile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			wheelchairNumber: this.props.wheelchairNumber,
			boardingPass: this.props.boardingPass,
			gateNumber: this.props.gateNumber
		}
	}

	onButtonPress() {
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
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this)}>
							TSA Start
						</Button>
					</View>
				</View>
				<View style={Style.footer}>
					<Text>Wheelchair #: {this.state.wheelchairNumber}</Text>
        	<Text>Boarding Pass Info: {this.state.boardingPass}</Text>
        	<Text>Name: {this.state.firstName + ' ' + this.state.lastName}</Text>
        	<Text>Airline: {this.state.airline}</Text>
        	<Text>Flight #: {this.state.flightNumber}</Text>
        </View>
			</View>
		);
	}


}

export default SelectStopsNonSterile;