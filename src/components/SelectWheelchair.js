import React, { Component } from 'react'
import { View, Keyboard, TextInput, Button as RNButton } from 'react-native'
import { connect } from 'react-redux'
import { selectWheelchair } from '../actions'
import { updateWheelchair } from '../utils/firebaseService'
import { CardSection, Button } from './common'
import NumberButton from './common/NumberButton'
import Footer from './Footer'
import Style from './Style'
import { Actions } from 'react-native-router-flux'

class SelectWheelchair extends Component {
  constructor(props) {
    super(props)
    Keyboard.dismiss()
    this.onButtonPress = this.onButtonPress.bind(this)
    this.setText = this.setText.bind(this)
    this.renderExit = this.renderExit.bind(this)
    this.state = {
      text: '',
    }
  }

  onButtonPress(buttonValue) {
    updateWheelchair(buttonValue, this.props.currentGPS)
    if (this.props.runType != 'checkin') {
      this.props.selectWheelchair(this.props, buttonValue)
    }
  }

  setText(text) {
    this.setState({ text: text })
  }

  renderExit() {
    if (this.props.runType === 'checkin') {
      return (
        <Button onPress={() => Actions.main({ type: 'reset' })}>
          Finish Wheelchair Check-In
        </Button>
      )
    }
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.content}>
          <TextInput
            style={{ fontSize: 32 }}
            keyboardType={'phone-pad'}
            onChangeText={(text) => this.setText(text)}
            onEndEditing={(text) => this.onButtonPress(this.state.text)}
          />
          <RNButton
            onPress={() => this.onButtonPress(this.state.text)}
            title={'Enter wheelchair number'}
          />
          {/* <CardSection>{this.renderExit()}</CardSection> */}
        </View>
        <Footer />
      </View>
    )
  }
}

const mapStateToProps = ({ departure }) => {
  const {
    currentGPS,
    passenger1Wheelchair,
    passenger2Wheelchair,
    passenger1FirstName,
    passenger1LastName,
    passenger2FirstName,
    passenger2LastName,
    flightNumber,
    numPassengers,
    airline,
    runType,
  } = departure

  return {
    currentGPS,
    passenger1Wheelchair,
    passenger2Wheelchair,
    passenger1FirstName,
    passenger1LastName,
    passenger2FirstName,
    passenger2LastName,
    flightNumber,
    numPassengers,
    airline,
    runType,
  }
}

export default connect(mapStateToProps, { selectWheelchair })(SelectWheelchair)
