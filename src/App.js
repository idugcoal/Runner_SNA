import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { config } from '../config';
import LoginForm from './components/LoginForm';

class App extends Component {

	render() {
		console.log(config);

		return (
			<View>
				<LoginForm />
			</View>
		);

	}
}

export default App;