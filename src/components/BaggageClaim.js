import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import NumberButton from './common/NumberButton';
import { addDestination } from '../actions';
import Footer from './Footer';
import Style from './Style';

class BaggageClaim extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(destination) {
		// const locationFirstContactGPS = navigator.geolocation.getCurrentPosition((position) => {
		// 	this.props.addStartingPoint(this.props.runType, startLocation, position);
		// });
		this.props.addDestination(destination);
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'Baggage Claim 1')}>1</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Baggage Claim 2')}>2</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Baggage Claim 3')}>3</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Baggage Claim 4')}>4</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Baggage Claim 5')}>5</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Baggage Claim 6')}>6</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Baggage Claim 7')}>7</Button>
					</View>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'Curb')}>Curb</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Taxi')}>Taxi</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Rental Cars')}>Rental Cars</Button>
						<Button onPress={this.onButtonPress.bind(this, 'Ground Transportation')}>Ground Transportation</Button>
					</View>
				</View>
				<View style={Style.footer}>
				<Footer />
        </View>
			</View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { wheelchairNumber, runType } = departure;

  return { wheelchairNumber, runType };
};

export default connect(mapStateToProps, { 
	addDestination
})(BaggageClaim);
