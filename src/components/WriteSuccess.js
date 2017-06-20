import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './common';
import Style from './Style';

class WriteSuccess extends Component {
	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<Text>Write Successful!</Text>
		      <CardSection>
			      <Button onPress={() => Actions.main({type: "reset"})}>
			      	Return to Main Screen
			      </Button>
			    </CardSection>
				</View>
		   </View>
		);
	}
}

export default WriteSuccess;