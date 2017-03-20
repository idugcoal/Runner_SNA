import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { config } from '../config';

class App extends Component {

	render() {
		console.log(config);

		return (
			<View>
				<Text>App</Text>
			</View>
		);

	}
}

export default App;