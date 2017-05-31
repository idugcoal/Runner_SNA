import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './common';
import Style from './Style';

class Move extends Component {
	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
		      <CardSection>
			      <Button onPress={() => Actions.scanBoardingPass({type: "reset", title: "Scan Boarding Pass #2"})}>
			      	Scan Boarding Pass #2
			      </Button>
			    </CardSection>
				</View>
		   </View>
		);
	}
}

export default Move;