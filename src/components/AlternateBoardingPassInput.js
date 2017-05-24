import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux'
import { scanBoardingPass, passenger1FirstNameChanged, passenger1LastNameChanged, passenger2FirstNameChanged, passenger2LastNameChanged, airlineChanged, flightNumberChanged, alternateBoardingPassInput } from '../actions';
import { writePassengerData, writeFlightData } from '../utils/firebaseService';
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
    const {
      runType,
      numPassengers,
      passenger1FirstName, 
      passenger1LastName,
      passenger2FirstName,
      passenger2LastName,
      passenger1Wheelchair,
      passenger2Wheelchair,
      airline,
      flightNumber
    } = this.props

    if(numPassengers === 1) {
      console.log('ABPI #0')
      if(passenger1FirstName == '' || passenger1LastName == '' || airline == '' || flightNumber == '') {
        console.log('ABPI #1')
        alert('Please fill out all passenger info');
      } else if(runType === 'departure') {
        console.log('ABPI #2')
        Actions.selectGate();
      } else if(runType === 'arrival') {
        console.log('ABPI #3')
        Actions.selectStopsSterile({al: this.props.airline, fn: this.props.flightNumber})
      }
    }
    if(numPassengers === 2) {
      console.log('ABPI #4')
      //if passenger2Wheelchair is blank, we're only checking for passenger 1's info 
      if(passenger2Wheelchair == '') {
        console.log('ABPI #5')
        if(passenger1FirstName == '' || passenger1LastName == '') {
          console.log('ABPI #6')
          alert('Please fill out passenger 1 info');
        } 
        else {
          console.log('ABPI #7')
          Actions.selectWheelchair({ type: 'reset', title: 'Select Wheelchair #2'});
        }
      }
      //if passenger2Wheelchair has been chosen, we're checking info for passengers 1 and 2
      else if(passenger1FirstName == '' || 
              passenger1LastName == '' || 
              passenger2FirstName == '' || 
              passenger2LastName == '' || 
              airline == '' || 
              flightNumber == '') 
      {
        console.log('ABPI #8')
        alert('Please fill out all passenger info');
      }
      else if(runType === 'departure') {
          console.log('ABPI #10', runType)
          Actions.selectGate();
        }
      else if(runType === 'arrival') {
          console.log('ABPI #11', runType)
          Actions.selectStopsSterile({al: this.props.airline, fn: this.props.flightNumber})
        
      }
      
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
        	<Button onPress={() => this.navigateToNext()}> Next </Button>
        </CardSection>
				</View>
    			<Footer />
			</View>
		);
	}
}

const mapStateToProps = ({ departure, auth }) => {
  const { 
    runType, 
    timeStart, 
    numPassengers, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    airline, 
    flightNumber,
    deviceID
  } = departure;

  const { user } = auth;
  return {
    runType, 
    timeStart, 
    numPassengers, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    airline, 
    flightNumber,
    deviceID, 
    user
  };
};

export default connect(mapStateToProps, {
  scanBoardingPass, passenger1FirstNameChanged, passenger1LastNameChanged, passenger2FirstNameChanged, passenger2LastNameChanged, airlineChanged, flightNumberChanged, alternateBoardingPassInput
})(AlternateBoardingPassInput);