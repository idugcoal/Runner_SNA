import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import reducers from './reducers';
import { config } from '../config';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount() {

		firebase.initializeApp(config);
	}

	render() {
		
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

		// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));		
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);

	}
}

export default App;