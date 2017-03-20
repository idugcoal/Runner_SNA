import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import SelectWheelchairDeparture from './components/SelectWheelchairDeparture';
import SelectWheelchairArrival from './components/SelectWheelchairArrival';
import SelectWheelchairCheckIn from './components/SelectWheelchairCheckIn';
import SelectWheelchair from './components/SelectWheelchair';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 50 }}>
			<Scene key="auth" initial>
				<Scene key="login" component={LoginForm} title="Please Log In" />
			</Scene>
			<Scene key="home">
				<Scene key="main" component={Main} title="Select Task" initial />
				<Scene key="departure" component={SelectWheelchairDeparture} title="Departure" />
				<Scene key="arrival" component={SelectWheelchairArrival} title="Arrival" />	
				<Scene key="checkIn" component={SelectWheelchairCheckIn} title="Check-In" />					
			</Scene>
		</Router>
	);
};

export default RouterComponent;