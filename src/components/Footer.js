import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import Style from './Style';

class Footer extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={Style.footer}>
        	<Text>Wheelchair #: {this.props.wheelchairNumber}</Text>
        	<Text>Name: {this.props.firstName + ' ' + this.props.lastName}</Text>
        	<Text>Airline: {this.props.airline}</Text>
        	<Text>Flight #: {this.props.flightNumber}</Text>
        	<Text>Destination Gate #: {this.props.destinationGate}</Text>
        	<Text>Current GPS: {this.props.currentGPS.timestamp}</Text>
       </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { firstName, lastName, airline, flightNumber, wheelchairNumber, destinationGate, currentGPS } = departure;


  return { firstName, lastName, airline, flightNumber, wheelchairNumber, destinationGate, currentGPS };
};

export default connect(mapStateToProps, {})(Footer);