import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux'
import { addStop, startTSA } from '../actions';
import { Actions } from 'react-native-router-flux'
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
// import { cnbc, cnn, latapenade, octravelmart, starbucks, zovs, phone, restroom } from '../../assets';
import { nonSterile } from '../../assets';
import chunk from 'lodash/chunk';

class SelectStopsNonSterile extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(stopLocation) {
		console.log('e in SelectStopsNonSterile:', stopLocation)
		// this.props.addStop(stopLocation);
	}

	renderEndingButton() {
		if(this.props.runType === 'departure') {
			return (
				<Button onPress={() => this.props.startTSA()}>
					TSA Start
				</Button>
			);
		} else if(this.props.runType === 'arrival') {
			return (
				<Button onPress={() => Actions.baggageClaim()}>
					Go to Baggage Claim
				</Button>
			);
		}
	}

	renderButtons() {
		return chunk(nonSterile, 4).map(row => (
					<View style={Style.row}>
						{row.map(item => <ImageButton source={item.image} onPress={this.onButtonPress.bind(this, item.name)} key={item.name}/>)}
					</View>
				))
	}

	render() {
		return (
			<View style={Style.container}>
				<View style={Style.content}>
					{this.renderButtons()}
					<CardSection>
						{this.renderEndingButton()}
					</CardSection>
				</View>
				<Footer />
			</View>
		);
	}


}

const mapStateToProps = ({ departure }) => {
  const { stops } = departure;

  return { stops };
};

export default connect(mapStateToProps, { 
	addStop, startTSA
})(SelectStopsNonSterile);