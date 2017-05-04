import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard } from 'react-native';
import { connect } from 'react-redux'
import Modal from 'react-native-simple-modal'
import { setTimeEnd } from '../actions';
import { addStop, writeArrivalData } from '../utils/firebaseService';
import { Button, CardSection, ImageButton, TerminalA, TerminalB, TerminalC } from './common';
import Footer from './Footer';
import Style from './Style';
import { terminalA, terminalB, terminalC } from '../../assets';
import { Actions } from 'react-native-router-flux';
import chunk from 'lodash/chunk';

class SelectStopsSterile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			terminal: terminalA,
			open: false
		}
	}

	componentWillMount() {
		Keyboard.dismiss();
		if(this.props.runType === 'arrival') {
			writeArrivalData(this.props)
		}
		console.log(this.props)
	}


	onButtonPress(stopLocation) {
		console.log('stopLocation in SelectStopsSterile:', stopLocation);
		addStop(this.props.runType, this.props.timeStart, this.props.currentGPS, stopLocation)
	}

	onGateArrival() {
		this.setState({ open: true });
		this.props.setTimeEnd();
	}

	onGateSuccess() {
		this.setState({open: false})
		Actions.closing({reset: true});
	}

	onGateFail() {
		this.setState({open: false})
		Actions.selectGate({final: true});
	}

	renderButtons() {
		return chunk(this.state.terminal, 4).map(row => (
					<View style={Style.row}>
						{row.map(item => <ImageButton source={item.image} onPress={this.onButtonPress.bind(this, item.name)} key={item.name}/>)}
					</View>
				))
	}

	renderEndingButton() {
		if(this.props.runType === 'departure') {
			return (
				<Button onPress={this.onGateArrival.bind(this)}>
						Gate Arrival
					</Button>
			);
		} else if(this.props.runType === 'arrival') {
			return (
				<Button onPress={() => Actions.selectStopsNonSterile()}>
						Go Downstairs
				</Button>
			);
		}
	}

	render() {
		return (
			<View style={Style.container}>
				<CardSection>
					<View style={Style.row}>
						<Button onPress={() => this.setState({terminal: terminalA})}>Terminal A</Button>
						<Button onPress={() => this.setState({terminal: terminalB})}>Terminal B</Button>
						<Button onPress={() => this.setState({terminal: terminalC})}>Terminal C</Button>
					</View>
				</CardSection>
				<View style={Style.content}>
					{this.renderButtons()}
				</View>
				<CardSection>
					{this.renderEndingButton()}
				</CardSection>
				<Footer />
				<Modal
	        open={this.state.open}
	        modalDidOpen={() => console.log('modal did open')}
	        modalDidClose={() => this.setState({open: false})}
	        style={{alignItems: 'center'}}>
	        <View>
	          <Text style={{fontSize: 20, marginBottom: 10}}>Are you at Gate #{this.props.destinationGate}?</Text>
	          <CardSection>
							<View style={Style.row}>
								<Button onPress={ this.onGateSuccess.bind(this) }>
									Yes
								</Button>
								<Button onPress={ this.onGateFail.bind(this) }>
									No
								</Button>
							</View>
						</CardSection>
	        </View>
	      </Modal>
			</View>
		);
	}
}

const mapStateToProps = ({ departure, auth }) => {
  const { 
  	runType, 
    timeStart,
    startLocation,
    startLocationGPS, 
    numPassengers, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    airline, 
    flightNumber,
    destinationGate, 
  } = departure;

  const { user } = auth

  return { 
  	runType, 
    timeStart,
    startLocation,
    startLocationGPS, 
    numPassengers, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    airline, 
    flightNumber,
    destinationGate,
    user
  };
};

export default connect(mapStateToProps, { setTimeEnd })(SelectStopsSterile);