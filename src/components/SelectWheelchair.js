import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, CardSection } from './common';

const WHEELCHAIRS = 100;
const COLUMNS = 10;
const MARGIN = vw(1);
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

function vh(percentageHeight) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}

const grid = {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start'
};

const cell= {
    marginLeft: MARGIN,
    marginTop: MARGIN,
    width: vw(100) / COLUMNS - SPACING
};

class SelectWheelchair extends Component {


  render() {
    let buttons = [];
    
    for(var r = 1; r <= WHEELCHAIRS; r++) {
      buttons.push(r);
    }

    return (
      <View style={grid}>
        {buttons.map(item => <View style={cell} />)}
      </View>
    );
  }


    
};




export default SelectWheelchair;