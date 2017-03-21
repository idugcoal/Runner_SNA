import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import SelectWheelchair from './components/SelectWheelchair';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 50 }}>
			<Scene key="auth" initial>
				<Scene key="login" component={LoginForm} title="Please Log In" />
			</Scene>
			<Scene key="home">
				<Scene key="main" component={Main} title="Select Task" initial />
				<Scene key="departure" component={SelectWheelchair} title="Departure - Select Wheelchair" />
				<Scene key="arrival" component={SelectWheelchair} title="Arrival - Select Wheelchair" />	
				<Scene key="checkIn" component={SelectWheelchair} title="Check-In" />					
			</Scene>
		</Router>
	);
};

export default RouterComponent;