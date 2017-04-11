import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import SelectNumberOfWheelchairs from './components/SelectNumberOfWheelchairs';
import SelectWheelchair from './components/SelectWheelchair';
import ScanBoardingPass from './components/ScanBoardingPass';
import AlternateBoardingPassInput from './components/AlternateBoardingPassInput';
import SelectGate from './components/SelectGate';
import SelectStartingPoint from './components/SelectStartingPoint';
import SelectStopsNonSterile from './components/SelectStopsNonSterile';
import TSA from './components/TSA';
import SelectStopsSterile from './components/SelectStopsSterile';
import GateArrival from './components/GateArrival';
import Closing from './components/Closing';

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
// 					<Scene key="selectGate" component={SelectGate} title="Input Gate Number" />
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
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title={"Please Log In"}/>
			</Scene>
			<Scene key="home" initial>
				<Scene key="main" component={Main} title={"Select Task"} />
				<Scene key="selectStartingPoint" component={SelectStartingPoint} title={"Select Staring Point"} />
				<Scene key="selectNumberOfWheelchairs" component={SelectNumberOfWheelchairs} title={"Select Number of Wheelchairs"} />
				<Scene key="selectWheelchair" component={SelectWheelchair} />
				<Scene key="scanBoardingPass" component={ScanBoardingPass} />
				<Scene key="alternateBoardingPassInput" component={AlternateBoardingPassInput} title={"Enter Customer Info"} />
				<Scene key="selectGate" component={SelectGate} title={"Select Gate Number"} />
				<Scene key="selectStopsNonSterile" component={SelectStopsNonSterile} title={"Select Stops | Non-Sterile"} />
				<Scene key="tsa" component={TSA} title="TSA" />
				<Scene key="selectStopsSterile" component={SelectStopsSterile} title={"Select Stops | Sterile "} />
				<Scene key="gateArrival" component={GateArrival} title={"Gate Arrival"} />

				<Scene key="closing" component={Closing} title={"Finished!"} />
			</Scene>
		</Router>
	);
};

export default RouterComponent;