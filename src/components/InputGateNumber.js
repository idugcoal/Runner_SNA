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

    this.state = { gate: '' };
  }

  onButtonPress(value) {
    this.setState({ gate: value });
    Actions.scanBoardingPass();
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
          <Text>Gate #: {this.state.gate}</Text>
        </View>
      </View>
    );
  }
};

export default InputGateNumber;