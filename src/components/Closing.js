import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import { Button, CardSection, ImageButton, NumberButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';


class Closing extends Component {

	constructor(props) {
		super(props);
	
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<CardSection>
						<Text>Run completed. Tap below to begin next task.</Text>
					</CardSection>
					<CardSection>
						<Button onPress={() => Actions.main({ type: 'reset' }) }>
							New Task
						</Button>
					</CardSection>
				</View>
		   	<Footer />
		   </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { destinationGate, finalGate } = departure;

  return { destinationGate, finalGate };
};

export default connect(mapStateToProps, {
	
})(Closing);