import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { scanBoardingPass, alternateBoardingPassInput } from '../actions'
import Camera from 'react-native-camera'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import { Button, CardSection } from './common'
import Footer from './Footer'
import Style from './Style'

class ScanBoardingPass extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    // 	cameraStatus: 'on'
    // }
  }

  onReadSuccess(boardingPassString) {
    // this.setState({cameraStatus: 'off'})
    // this.refs.camera.stopCapture()
    switch (boardingPassString.data.substring(36, 38)) {
      case 'AS':
        var airline = 'Alaska'
        break
      case 'AA':
        var airline = 'American'
        break
      case 'DL':
        var airline = 'Delta'
        break
      case 'F9':
        var airline = 'Frontier'
        break
      case 'UA':
        var airline = 'United'
        break
      case 'WN':
        var airline = 'Southwest'
        break
      case 'WS':
        var airline = 'WestJet'
        break
      default:
        var airline = 'Unrecognized Airline'
        break
    }

    const slash = boardingPassString.data.indexOf('/')
    const boardingPassData = {
      firstName: boardingPassString.data.substring(slash + 1, 21).trim(),
      lastName: boardingPassString.data.substring(2, slash),
      airline: airline,
      flightNumber: boardingPassString.data.substring(36, 43),
    }

    this.props.scanBoardingPass(this.props, boardingPassData)
  }

  renderCamera() {
    // if(this.state.cameraStatus == 'on') {
    // 	return(
    // 		<Camera
    // 			style={{ flex: 1 }}
    // 			barCodeTypes={[ 'pdf417' ]}
    // 			onBarCodeRead={this.onReadSuccess.bind(this)}
    // 			// torchMode={Camera.constants.TorchMode.on}
    // 		/>
    // 	)
    // } else {
    // 	return <View />;
    // }

    return (
      <Camera
        ref={(cam) => {
          this.camera = cam
        }}
        style={{ flex: 1 }}
        barCodeTypes={['pdf417']}
        onBarCodeRead={this.onReadSuccess.bind(this)}
        captureTarget={Camera.constants.CaptureTarget.disk}
        torchMode={Camera.constants.TorchMode.on}
      />
    )
  }

  render() {
    return (
      <View style={Style.container}>
        <View style={Style.content}>
          {this.renderCamera()}

          <CardSection>
            <Button
              style={Style.alternate}
              onPress={() => Actions.alternateBoardingPassInput()}>
              Manual Input
            </Button>
          </CardSection>
        </View>
        <Footer />
      </View>
    )
  }
}

const mapStateToProps = ({ departure }) => {
  const {
    runType,
    timeStart,
    numPassengers,
    passenger1Wheelchair,
    passenger2Wheelchair,
    passenger1FirstName,
    passenger1LastName,
    passenger2FirstName,
    passenger2LastName,
    airline,
    flightNumber,
  } = departure

  return {
    runType,
    timeStart,
    numPassengers,
    passenger1Wheelchair,
    passenger2Wheelchair,
    passenger1FirstName,
    passenger1LastName,
    passenger2FirstName,
    passenger2LastName,
    airline,
    flightNumber,
  }
}

export default connect(mapStateToProps, {
  scanBoardingPass,
  alternateBoardingPassInput,
})(ScanBoardingPass)
