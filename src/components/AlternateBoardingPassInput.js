import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux'
import { scanBoardingPass, passenger1FirstNameChanged, passenger1LastNameChanged, passenger2FirstNameChanged, passenger2LastNameChanged, airlineChanged, flightNumberChanged, alternateBoardingPassInput } from '../actions';
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

  navigateToNext() {
    // if there's one passenger and no fields are empty
    if(this.props.runType === 'arrival') {
      Actions.selectStopsSterile();
    }
    else if (this.props.numPassengers === 1 && this.props.passenger1FirstName != '' && this.props.passenger1LastName != '' && this.props.airline != '' && this.props.flightNumber != '') {
      Actions.selectGate();
    }
    // if there's one passenger and any field is emtpy
    else if (this.props.numPassengers === 1) {
      alert("Please fill out passenger information");
    }
    // if there are two passengers and no fields are empty
    else if (this.props.numPassengers == 2 && this.props.passenger1FirstName != '' && this.props.passenger1LastName != '' && this.props.passenger2FirstName != '' && this.props.passenger2LastName != '' && this.props.airline != '' && this.props.flightNumber != '') {
      Actions.selectGate();
    }
    // if there are two passengers and the only empty field is wheelchair #2
    else if (this.props.passenger2Wheelchair == '') {
      Actions.selectWheelchair({ type: "reset", title: "Select Wheelchair #2" })
    }
    // if there are two passengers and fields are empty
    else if (this.props.numPassengers === 2) {
      // console.log('1', this.props.numPassengers, '2', this.props.passenger1FirstName, '3', this.props.passenger1LastName, '4', this.props.passenger2FirstName, '5', this.props.passenger2LastName, '6', this.props.airline, '7', this.props.flightNumber)
      alert("Please fill out passenger information")
    }
  }

  renderSecondPassengerInput() {
    if(this.props.numPassengers === 2) {
      return [
        <CardSection key="1">
            <Input
              label="First Name"
              placeholder="Passenger 2 First Name"
              onChangeText={this.p2FirstNameChanged.bind(this)}
              value={this.props.passenger2FirstName}
            />
          </CardSection>,
          <CardSection key="2">
            <Input
              label="Last Name"
              placeholder="Passenger 2 Last Name"
              onChangeText={this.p2LastNameChanged.bind(this)}
              value={this.props.passenger2LastName}
            />
          </CardSection>
      ];
    } else {
      return <View></View>;
    }
  }

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
				<CardSection>
          <Input
            label="First Name"
            placeholder="Passenger 1 First Name"
            onChangeText={this.p1FirstNameChanged.bind(this)}
            value={this.props.passenger1FirstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Last Name"
            placeholder="Passenger 1 Last Name"
            onChangeText={this.p1LastNameChanged.bind(this)}
            value={this.props.passenger1LastName}
          />
       	</CardSection>
        {this.renderSecondPassengerInput()}
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
            <Picker.Item label="Please select an airline" value="" />
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
        		onPress={() => this.navigateToNext()}>
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
  const { runType, passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, airline, flightNumber, numPassengers } = departure;

  return { runType, passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, airline, flightNumber, numPassengers };
};

export default connect(mapStateToProps, {
  scanBoardingPass, passenger1FirstNameChanged, passenger1LastNameChanged, passenger2FirstNameChanged, passenger2LastNameChanged, airlineChanged, flightNumberChanged, alternateBoardingPassInput
})(AlternateBoardingPassInput);