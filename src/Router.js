import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import SelectWheelchair from './components/SelectWheelchair';
import ScanBoardingPass from './components/ScanBoardingPass';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 50 }}>
			<Scene key="auth" >
				<Scene key="login" component={LoginForm} title="Please Log In" />
			</Scene>
			<Scene key="home" initial>
				<Scene key="main" component={Main} title="Select Task" initial />
				<Scene key="departure" component={SelectWheelchair} title="Departure - Select Wheelchair" />
					<Scene key="scanBoardingPass" component={ScanBoardingPass} title="Scan Boarding Pass" />
				<Scene key="arrival" component={SelectWheelchair} title="Arrival - Select Wheelchair" />	
				<Scene key="checkIn" component={SelectWheelchair} title="Check-In" />					
			</Scene>
		</Router>
	);
};

export default RouterComponent;