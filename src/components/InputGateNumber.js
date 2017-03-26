import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
import NumberButton from './common/NumberButton';
import Style from './Style';
import { Actions } from 'react-native-router-flux';

const gates = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

class InputGateNumber extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      runType: this.props.runType,
    	wheelchairNumber: this.props.wheelchairNumber,
    	boardingPass: this.props.boardingPass,
    	firstName: this.props.firstName,
    	lastName: this.props.lastName,
    	airline: this.props.airline,
    	flightNumber: this.props.flightNumber,
    	gateNumber: '' 
    };
  }

  onButtonPress(gateNumber) {
    Actions.selectStartingPoint({
      runType: this.state.runType,
    	wheelchairNumber: this.state.wheelchairNumber,
    	boardingPass: this.state.boardingPass,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      airline: this.state.airline,
      flightNumber: this.state.flightNumber,
    	gateNumber: gateNumber
    })
    // this.setState({ gateNumber: gateNumber });
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
        	<Text>Wheelchair #: {this.state.wheelchairNumber}</Text>
        	<Text>Boarding Pass Info: {this.state.boardingPass}</Text>
        	<Text>Name: {this.state.firstName + ' ' + this.state.lastName}</Text>
        	<Text>Airline: {this.state.airline}</Text>
        	<Text>Flight #: {this.state.flightNumber}</Text>
        </View>
      </View>
    );
  }
};

export default InputGateNumber;