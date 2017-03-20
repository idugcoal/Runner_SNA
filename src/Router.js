import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 50 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Log In" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;