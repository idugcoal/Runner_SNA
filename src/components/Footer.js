import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import Style from './Style';

class Footer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		// return(
		// 	<View style={Style.footer}>
  //       	<Text>Wheelchair #: {this.props.passenger1Wheelchair}</Text>
  //       	<Text>Name: {this.props.passenger1FirstName + ' ' + this.props.passenger1LastName}</Text>
  //       	<Text>Airline: {this.props.airline}</Text>
  //       	<Text>Flight #: {this.props.flightNumber}</Text>
  //         <Text>Destination Gate #: {this.props.destinationGate}</Text>
  //       	<Text>Current GPS: {this.props.currentGPS.latitude + ' ' + this.props.currentGPS.longitude}</Text>
  //         <Text>Time Start: {this.props.timeStart}</Text>
  //      </View>
		// );
    return(
      <View style={Style.footer}>
          <Text>Wheelchair #: {this.props.passenger1Wheelchair}</Text>
          <Text>Name: {this.props.passenger1FirstName + ' ' + this.props.passenger1LastName}</Text>
          <Text>Airline: {this.props.airline}</Text>
          <Text>Flight #: {this.props.flightNumber}</Text>
       </View>
    )
	}
}

const mapStateToProps = ({ departure }) => {
  const { passenger1FirstName, passenger1LastName, airline, flightNumber, passenger1Wheelchair, destinationGate, currentGPS, timeStart } = departure;

  return { passenger1FirstName, passenger1LastName, airline, flightNumber, passenger1Wheelchair, destinationGate, currentGPS, timeStart };
};

export default connect(mapStateToProps, {})(Footer);