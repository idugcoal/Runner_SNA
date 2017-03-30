import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { selectGateNumber, setFinalGateNumber } from '../actions';
import NumberButton from './common/NumberButton';
import Footer from './Footer';
import Style from './Style';

const gates = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

class SelectGate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      final: this.props.final
    }
  }

  onButtonPress(gateNumber) {
    const { destinationGate } = this.props;
    if(this.state.final) {
      this.props.setFinalGateNumber(gateNumber);
    } else {
      this.props.selectGateNumber(gateNumber);
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


const mapStateToProps = ({ departure }) => {
  const { destinationGate } = departure;

  return { destinationGate };
};

export default connect(mapStateToProps, {
  selectGateNumber, setFinalGateNumber
})(SelectGate);