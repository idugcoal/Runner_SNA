import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux'
import { scanBoardingPass, passenger1FirstNameChanged, passenger1LastNameChanged, passenger2FirstNameChanged, passenger2LastNameChanged, airlineChanged, flightNumberChanged } from '../actions';
import Footer from './Footer';

import { CardSection, Input, Button } from './common'
import { Actions } from 'react-native-router-flux';
import Style from './Style';

class AlternateBoardingPassInput extends Component {

	constructor(props) {
		super(props);
	}

	p1FirstNameChanged(text) {
	 this.props.passenger1FirstNameChanged(text);
	}

	p1LastNameChanged(text) {
		this.props.passenger1LastNameChanged(text);
	}
  
  p2FirstNameChanged(text) {
   this.props.passenger2FirstNameChanged(text);
  }

  p2LastNameChanged(text) {
    this.props.passenger2LastNameChanged(text);
  }

	onFlightNumberChange(text) {
		this.props.flightNumberChanged(text);
	}

	onAirlineChange(text) {
		this.props.airlineChanged(text);
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
				<CardSection>
          <Input
            label="Passenger 1 First Name"
            placeholder="Passenger 1 First Name"
            onChangeText={this.p1FirstNameChanged.bind(this)}
            value={this.props.passenger1FirstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Passenger 1 Last Name"
            placeholder="Passenger 1 Last Name"
            onChangeText={this.p1LastNameChanged.bind(this)}
            value={this.props.passenger1LastName}
          />
       	</CardSection>
        <CardSection>
          <Input
            label="Passenger 2 First Name"
            placeholder="Passenger 2 First Name"
            onChangeText={this.p2FirstNameChanged.bind(this)}
            value={this.props.passenger2FirstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Passenger 2 Last Name"
            placeholder="Passenger 2 Last Name"
            onChangeText={this.p2LastNameChanged.bind(this)}
            value={this.props.passenger1LastName}
          />
        </CardSection>
       	<CardSection>
          <Input
            label="Flight Number"
            placeholder="Flight Number"
            onChangeText={this.onFlightNumberChange.bind(this)}
            value={this.props.flightNumber}
          />
       </CardSection>
        <View style={{ flexDirection: 'column', height: 70}}>
        	<Text style={{ fontSize: 18, paddingLeft: 25 }}>Airline</Text>
        	<Picker
        		style={{flex: 1}}
        		selectedValue={this.props.airline}
        		onValueChange={this.onAirlineChange.bind(this)}
        	>
        		<Picker.Item label="Alaska" value="Alaska" />
        		<Picker.Item label="American" value="American" />
        		<Picker.Item label="Delta" value="Delta" />
        		<Picker.Item label="Frontier" value="Frontier" />
        		<Picker.Item label="Southwest" value="Southwest" />
        		<Picker.Item label="United" value="United" />
        		<Picker.Item label="WestJet" value="WestJet" /> 
        	</Picker>
        </View>
        <CardSection>
        	<Button 
        		onPress={() => Actions.selectGate({
        			type: 'reset' 
        		})}>
        		Next
        	</Button>
        </CardSection>
				</View>
    			<Footer />
			</View>
		);

	}
}

const mapStateToProps = ({ departure }) => {
  const { passenger1Wheelchair, passenger1FirstName, passenger1LastName, airline, flightNumber } = departure;


  return { passenger1Wheelchair, passenger1FirstName, passenger1LastName, airline, flightNumber };
};

export default connect(mapStateToProps, {
  scanBoardingPass, passenger1FirstNameChanged, passenger1LastNameChanged, passenger2FirstNameChanged, passenger2LastNameChanged, airlineChanged, flightNumberChanged
})(AlternateBoardingPassInput);