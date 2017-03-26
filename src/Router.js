import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import SelectWheelchair from './components/SelectWheelchair';
import ScanBoardingPass from './components/ScanBoardingPass';
import AlternateBoardingPassInput from './components/AlternateBoardingPassInput';
import InputGateNumber from './components/InputGateNumber';
import SelectStartingPoint from './components/SelectStartingPoint';
import SelectStopsNonSterile from './components/SelectStopsNonSterile';

// const RouterComponent = () => {
// 	return (
// 		<Router sceneStyle={{ paddingTop: 50 }}>
// 			<Scene key="auth" >
// 				<Scene key="login" component={LoginForm} title="Please Log In" />
// 			</Scene>
// 			<Scene key="home" initial>
// 				<Scene key="main" component={Main} title="Select Task"  />
// 				<Scene key="departure" component={SelectWheelchair} title="Departure - Select Wheelchair" />
// 					<Scene key="scanBoardingPass"	component={ScanBoardingPass} title="Scan Boarding Pass" />
// 					<Scene key="alternateBoardingPassInput" component={AlternateBoardingPassInput} title="Boarding Pass Input" />
// 					<Scene key="inputGateNumber" component={InputGateNumber} title="Input Gate Number" />
// 					<Scene key="selectStartingPoint" component={SelectStartingPoint} input="Starting Point" />
// 					<Scene key="selectStopsNonSterile" component={SelectStopsNonSterile} input="Select Stops" />

					
// 				<Scene key="arrival" component={SelectWheelchair} title="Arrival - Select Wheelchair" />
// 					<Scene
// 						onRight={() => Actions.alternateBoardingPassInput()}
// 						rightTitle="Keyboard" 
// 						key="scanBoardingPass" 
// 						component={ScanBoardingPass} 
// 						title="Scan Boarding Pass" 
// 						/>	
// 				<Scene key="checkIn" component={SelectWheelchair} title="Check-In" />					
// 			</Scene>
// 		</Router>
// 	);
// };

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 50 }}>
			<Scene key="auth" >
				<Scene key="login" component={LoginForm} title={"Please Log In"}/>
			</Scene>
			<Scene key="home" initial>
				<Scene key="main" component={Main} title={"Select Task"} />
				<Scene key="selectWheelchair" component={SelectWheelchair} title={"Departure - Select Wheelchair"}/>
				<Scene key="scanBoardingPass" component={ScanBoardingPass} title={"Scan Boarding Pass"} />
				<Scene key="alternateBoardingPassInput" component={AlternateBoardingPassInput} title={"Enter Customer Info"} />
				<Scene key="inputGateNumber" component={InputGateNumber} title={"Select Gate Number"} />
				<Scene key="selectStartingPoint" component={SelectStartingPoint} title={"Select Staring Point"} />
				<Scene key="selectStopsNonSterile" component={SelectStopsNonSterile} title={"Select Stops"} />
		
			</Scene>
		</Router>
	);
};


export default RouterComponent;