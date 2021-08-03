import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { scanBoardingPass, alternateBoardingPassInput } from '../actions'
import Camera from 'react-native-camera'
import { Actions } from 'react-native-router-flux'
import { Button, CardSection } from './common'
import Footer from './Footer'
import Style from './Style'

class ScanBoardingPass extends Component {
  constructor(props) {
    super(props)

    // this.toggleTorch = this.toggleTorch.bind(this)
    this.onReadSuccess = this.onReadSuccess.bind(this)
    // this.state = {
    //   torchStatus: Camera.constants.TorchMode.on,
    // }
  }

  // toggleTorch() {
  //   if (this.state.torchStatus === Camera.constants.TorchMode.on) {
  //     this.setState({ torchStatus: Camera.constants.TorchMode.off })
  //   } else {
  //     this.setState({ torchStatus: Camera.constants.TorchMode.on })
  //   }
  // }

  onReadSuccess(boardingPassString) {
    // this.toggleTorch()

    switch (boardingPassString.data.substring(36, 38)) {
      case 'AS':
        var airline = 'Alaska'
        break
      case 'AL':
        var airline = 'Allegiant'
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
      case 'SC':
        var airline = 'Sun Country'
        break
      case 'SP':
        var airline = 'Spirit'
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
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam
        }}
        style={{ flex: 1 }}
        barCodeTypes={['pdf417']}
        onBarCodeRead={this.onReadSuccess}
        captureTarget={Camera.constants.CaptureTarget.disk}
        // torchMode={this.state.torchStatus}
        torchMode={'on'}
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
