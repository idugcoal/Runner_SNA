import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button } from './common';

class Main extends Component {
	
	onDeparture() {
    // Actions.main();
    Actions.departure();
  }

  onArrival() {
  	// Actions.main();
  	Actions.arrival();
  }

  onCheckIn() {
  	Actions.checkIn();
  }
	

	render() {
		return (
			<Card>
				<CardSection>
					<Button onPress={this.onDeparture.bind(this)}>Departure</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onArrival.bind(this)}>Arrival</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onCheckIn.bind(this)}>Check-In</Button>
				</CardSection>
				
			</Card>
		);
	}
}

export default Main;