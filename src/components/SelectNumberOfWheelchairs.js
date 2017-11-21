import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setNumberOfPassengers } from '../actions';
import { Button, CardSection } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';


class SelectNumberOfWheelchairs extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(numWheelchairs) {
		
		this.props.setNumberOfPassengers(numWheelchairs);
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<CardSection>
						<Text> Do you need one or two wheelchairs?	</Text>
					</CardSection>
					<CardSection>
						<View style={Style.row}>
							<Button onPress={() => this.onButtonPress(1) }>
								One
							</Button>
							<Button onPress={() => this.onButtonPress(2) }>
								Two
							</Button>
						</View>
					</CardSection>
		    </View>
		    <Footer />
      </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { runType } = departure;

  return { runType };
};

export default connect(mapStateToProps, {
	setNumberOfPassengers
})(SelectNumberOfWheelchairs);