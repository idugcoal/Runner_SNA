import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import NumberButton from './common/NumberButton';
import { addStartingPoint } from '../actions';
import Footer from './Footer';
import Style from './Style';

class BaggageClaim extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(startLocation) {
		const locationFirstContactGPS = navigator.geolocation.getCurrentPosition((position) => {
			this.props.addStartingPoint(this.props.runType, startLocation, position);
		});
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, '1')}>1</Button>
						<Button onPress={this.onButtonPress.bind(this, '2')}>2</Button>
						<Button onPress={this.onButtonPress.bind(this, '3')}>3</Button>
						<Button onPress={this.onButtonPress.bind(this, '4')}>4</Button>
						<Button onPress={this.onButtonPress.bind(this, '5')}>5</Button>
						<Button onPress={this.onButtonPress.bind(this, '6')}>6</Button>
						<Button onPress={this.onButtonPress.bind(this, '7')}>7</Button>
					</View>
					<View style={Style.row}>
						<Button onPress={this.onButtonPress.bind(this, 'curb')}>Curb</Button>
						<Button onPress={this.onButtonPress.bind(this, 'taxi')}>Taxi</Button>
						<Button onPress={this.onButtonPress.bind(this, 'rentalCars')}>Rental Cars</Button>
						<Button onPress={this.onButtonPress.bind(this, 'groundTransportation')}>Ground Transportation</Button>
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
	addStartingPoint
})(BaggageClaim);
