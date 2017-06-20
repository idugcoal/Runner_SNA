import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './common';
import { office } from '../utils/firebaseService';
import Style from './Style';

class WriteFail extends Component {

	onButtonPress() {
		office();
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<Text>Write Failed! Press the button below to try again</Text>
		      <CardSection>
			      <Button onPress={() => this.onButtonPress}>
			      	Try Again
			      </Button>
			    </CardSection>
				</View>
		   </View>
		);
	}
}

export default WriteFail;