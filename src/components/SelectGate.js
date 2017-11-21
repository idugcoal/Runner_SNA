import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { selectGateNumber, setFinalGateNumber, addStartingPointArrival, addStartingLocationArrival, setGateNumber } from '../actions';
import { writePassengerData } from '../utils/firebaseService';
import NumberButton from './common/NumberButton';
import Footer from './Footer';
import Style from './Style';

class SelectGate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      final: this.props.final,
      gates: [
        ['Baggage Claim 1', 'Baggage Claim 2', 'Baggage Claim 3', 'Baggage Claim 4'],
        ['Baggage Claim 5', 'Baggage Claim 6', 'Baggage Claim 7', 'Information Booth'],
        ['Gate 1', 'Gate 2', 'Gate 3', 'Gate 4'],
        ['Gate 5', 'Gate 6', 'Gate 7', 'Gate 8'],
        ['Gate 9', 'Gate 10', 'Gate 11','Gate 12'],
        ['Gate 13', 'Gate 14', 'Gate 15','Gate 16'],
        ['Gate 17', 'Gate 18', 'Gate 19','Gate 20'],
        ['Gate 21', 'Gate 22']
      ]
    }
    if(this.props.runType === 'departure' || this.props.runType === 'transfer') {
      this.state = {
        gates: this.state.gates.splice(2, 6)
      }
    }
  }

  componentWillMount() {

    Keyboard.dismiss();
    if(this.props.runType === 'arrival') {
      const locationFirstContactGPS = navigator.geolocation.getCurrentPosition((position) => {
        this.props.addStartingPointArrival(this.props.runType, position);
      });
    }
  }

  onButtonPress(gateNumber) {
    if(this.state.final) {
      this.props.setFinalGateNumber(gateNumber);
    } 
    else {
      if(this.props.runType === 'arrival') {
        this.props.addStartingLocationArrival(gateNumber);
      }
      this.props.setGateNumber(this.props, gateNumber);
    }
  }

  renderButtons() {
    let views = this.state.gates.map((row, index) => {
      let inputRow = row.map((buttonValue, columnIndex) => {
        return <NumberButton
                  value={buttonValue}
                  onPress={this.onButtonPress.bind(this, buttonValue)}
                  key={'button-' + columnIndex}
                />
      });
      return <View style={Style.row} key={'row-' + index}>{inputRow}</View>
    });
    return views;
  }

  render() {
    return(
      <View style={Style.container}>
        <View style={Style.content}>
          {this.renderButtons()}
        </View>
        <View style={Style.footer}>
        <Footer />
        </View>
      </View>
    );
  }
};


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
    deviceID
  } = departure;

  const { user } = auth;

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
    deviceID,
    user
  };
};

export default connect(mapStateToProps, {
  selectGateNumber, setFinalGateNumber, addStartingPointArrival, addStartingLocationArrival, setGateNumber
})(SelectGate);