import firebase from 'firebase';

export const writePassengerData = (props, gateNumber) => {
	// console.log('firebase services: ', runType, timeStart, numPassengers, p1Wheelchair, p2Wheelchair, p1FirstName, p1LastName, p2FirstName, p2LastName)
	const {
		runType, 
    timeStart,
    startLocation,
    startLocationGPS, 
    numPassengers, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    airline, 
    flightNumber, 
    user
	} = props;
	const path = runType + '/' + timeStart; 

	firebase.database().ref(`${path}`)
		// .push({
		.set({
			timeStart: timeStart, 
			numPassengers: numPassengers,
			startLocation: startLocation,
			startLocationGPS: startLocationGPS,
			passenger1Wheelchair: passenger1Wheelchair,
			passenger2Wheelchair: passenger2Wheelchair,
			passenger1FirstName: passenger1FirstName,
			passenger1LastName: passenger1LastName,
			passenger2FirstName: passenger2FirstName || '',
			passenger2LastName: passenger2LastName || '',
			airline: airline,
			flightNumber: flightNumber,
			destinationGate: gateNumber,
			employeeLogin: user.email
		});
}

export const writeArrivalData = (props) => {
	// console.log('firebase services: ', runType, timeStart, numPassengers, p1Wheelchair, p2Wheelchair, p1FirstName, p1LastName, p2FirstName, p2LastName)
	const {
		runType, 
    timeStart,
    startLocation,
    startLocationGPS, 
    numPassengers,
    passenger1FirstName,
    passenger1LastName,
    p1FirstName,
    p1LastName,
    p2FirstName,
    p2LastName, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    // destinationGate, 
    user
	} = props;
	const path = runType + '/' + timeStart; 
	console.log('FUCKING PROPS JESUS', props)
	firebase.database().ref(`${path}`)
		// .push({
		.set({
			timeStart: timeStart, 
			numPassengers: numPassengers,
			startLocation: startLocation,
			startLocationGPS: startLocationGPS,
			passenger1FirstName: passenger1FirstName || p1FirstName,
			passenger1LastName: passenger1LastName || p1LastName,
			passenger2FirstName: p2FirstName || '',
			passenger2LastName: p2LastName || '',
			passenger1Wheelchair: passenger1Wheelchair,
			passenger2Wheelchair: passenger2Wheelchair,
			// destinationGate: destinationGate,
			employeeLogin: user.email
		});
}

// export const writePassengerArrivalData = (runType, timeStart, p1FirstName, p1LastName, p2FirstName, p2LastName) => {
	
// 	const path = runType + '/' + timeStart; 
// 	firebase.database().ref(`${path}`)
// 		.update({
// 			passenger1FirstName: p1FirstName,
// 			passenger1LastName: p1LastName
// 			passenger2FirstName: p2FirstName,
// 			passenger2LastName: p2LastName
// 		});
// }

export const addStop = (runType, timeStart, currentGPS, stopLocation) => {
	// console.log('firebase services: ', runType, timeStart, numPassengers, p1Wheelchair, p2Wheelchair, p1FirstName, p1LastName, p2FirstName, p2LastName)
	const path = runType + '/' + timeStart + '/stops/'; 
	firebase.database().ref(`${path}`)
		.push({
		// .set({ 
		// .update({
			stopTime: Date.now(), 
			stopLocation: stopLocation,
			stopLocationGPS: currentGPS,
		});
}