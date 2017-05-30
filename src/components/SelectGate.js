import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { selectGateNumber, setFinalGateNumber, addStartingPointArrival, addStartingLocationArrival } from '../actions';
import { writePassengerData } from '../utils/firebaseService';
import NumberButton from './common/NumberButton';
import Footer from './Footer';
import Style from './Style';

const gates = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22]
];

class SelectGate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      final: this.props.final
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
    // const { destinationGate } = this.props;
    if(this.state.final) {
      this.props.setFinalGateNumber(gateNumber);
    } 
    else {
      //write to database: numPassengers, wheelchair # (x2), passenger info (x2), airline, flight #, destination gate
      // if(this.props.runType === 'departure') {
      //   writePassengerData(this.props, gateNumber);
      // }
      if(this.props.runType === 'arrival') {
        // writePassengerData(this.props, gateNumber);
        this.props.addStartingLocationArrival(gateNumber);
      }
      // if(this.props.runType === 'preboard') {
      //   alert('made it')
      // }
      this.props.selectGateNumber(this.props.runType, gateNumber);
    }
  }

  renderButtons() {
    let views = gates.map((row, index) => {
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
  selectGateNumber, setFinalGateNumber, addStartingPointArrival, addStartingLocationArrival
})(SelectGate);