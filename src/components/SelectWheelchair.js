import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectWheelchair } from '../actions';
import { CardSection, Button } from './common';
import NumberButton from './common/NumberButton';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';

const wheelchairs = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

class SelectWheelchair extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }

  onButtonPress(buttonValue) {
      this.setState({open: true})
      this.props.selectWheelchair(
        this.props.runType,
        this.props.numPassengers, 
        this.props.passenger1Wheelchair,
        this.props.passenger2Wheelchair,
        this.props.passenger1FirstName,
        this.props.passenger1LastName,
        this.props.passenger2FirstName,
        this.props.passenger2LastName,
        this.props.airline,
        this.props.flightNumber,
        buttonValue
       )
  }

  renderButtons() {
    let views = wheelchairs.map((row, index) => {
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
        <Footer />
      </View>
    );
  }
};

const mapStateToProps = ({ departure }) => {
  const { passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, flightNumber, numPassengers, airline, runType } = departure;

  return { passenger1Wheelchair, passenger2Wheelchair, passenger1FirstName, passenger1LastName, passenger2FirstName, passenger2LastName, flightNumber, numPassengers, airline, runType };
};

export default connect(mapStateToProps, { selectWheelchair })(SelectWheelchair);
