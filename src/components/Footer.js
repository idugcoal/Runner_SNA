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
       </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { firstName, lastName, airline, flightNumber, wheelchairNumber } = departure;


  return { firstName, lastName, airline, flightNumber, wheelchairNumber };
};

export default connect(mapStateToProps, {})(Footer);