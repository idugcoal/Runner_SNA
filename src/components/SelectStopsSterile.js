import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard } from 'react-native';
import { connect } from 'react-redux'
import Modal from 'react-native-simple-modal'
import { setTimeEnd, addStop, clearPassenger } from '../actions';
// import { writeArrivalData, writeDepartureData } from '../utils/firebaseService';
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

		this.onGateArrival = this.onGateArrival.bind(this)
	}

	componentWillMount() {
		Keyboard.dismiss();
		// if(this.props.runType === 'arrival') {
		// 	writeArrivalData(this.props)
		// }
		// if(this.props.runType === 'departure') {
		// 	writeDepartureData(this.props)
		// }
	}


	onButtonPress(stopLocation) {
		this.props.addStop(this.props.currentGPS, stopLocation)
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

	clearPassenger() {
		this.props.clearPassenger(this.props.runType, 'SSS')
	}

	renderButtons() {
		return chunk(this.state.terminal, 4).map((row, index) => (
					<View style={Style.row} key={index}>
						{row.map((item) => (
							<ImageButton source={item.image} onPress={this.onButtonPress.bind(this, item.name)} key={item.name}/>)
						)}
					</View>
				))
	}

	renderEndingButtons() {
			if(this.props.numPassengers == 1 || this.props.clearPax ) {
				if(this.props.runType === 'departure') {
					return (
							<Button onPress={() => this.onGateArrival()}>
								Gate Arrival
							</Button>
					);
				} 
				else if(this.props.runType === 'arrival') {
					return (
						<Button onPress={() => Actions.selectStopsNonSterile()}>
							Go Downstairs
						</Button>
					);
				}
			}
			else if(this.props.numPassengers == 2) {
				if(this.props.runType === 'departure') {
					return (
						<View style={Style.row}>
							<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger1Wheelchair}</Button>
							<Button onPress={() => this.onGateArrival()}>
								Gate Arrival
							</Button>
							<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger2Wheelchair}</Button>
						</View>
					);
				} 
				else if(this.props.runType === 'arrival') {
					return (
						<View style={Style.row}>
							<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger1Wheelchair}</Button>
							<Button onPress={() => Actions.selectStopsNonSterile()}>
								Go Downstairs
							</Button>
							<Button onPress={this.clearPassenger.bind(this)}>Clear Wheelchair #{this.props.passenger2Wheelchair}</Button>
						</View>
					);
				}
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
					{this.renderEndingButtons()}
				</CardSection>
				<Footer />
				<Modal
	        open={this.state.open}
	        modalDidClose={() => this.setState({open: false})}
	        style={{alignItems: 'center'}}>
	        <View>
	          <Text style={{fontSize: 20, marginBottom: 10}}>Are you at {this.props.destinationGate}?</Text>
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
   //  timeStart,
   //  startLocation,
   //  startLocationGPS, 
    numPassengers, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
   //  passenger1FirstName, 
   //  passenger1LastName, 
   //  passenger2FirstName, 
   //  passenger2LastName, 
   //  airline, 
   //  flightNumber,
    destinationGate,
    currentGPS,
   //  timeTSAStart,
   //  timeTSAEnd,
   //  commentsTSA,
   //  deviceID, 
   clearPax
  } = departure;

  // const { user } = auth

  return { 
  	runType, 
   //  timeStart,
   //  startLocation,
   //  startLocationGPS, 
    numPassengers, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
   //  passenger1FirstName, 
   //  passenger1LastName, 
   //  passenger2FirstName, 
   //  passenger2LastName, 
   //  airline, 
   //  flightNumber,
    destinationGate,
    currentGPS,
   //  timeTSAStart,
   //  timeTSAEnd,
   //  commentsTSA,
   //  deviceID,
   //  user,
   clearPax
  };
};

export default connect(mapStateToProps, { setTimeEnd, addStop, clearPassenger })(SelectStopsSterile);