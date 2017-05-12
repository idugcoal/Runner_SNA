import firebase from 'firebase';

export const writePassengerData = (props, gateNumber) => {
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
    user,
    deviceID
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
			deviceID: deviceID,
			employeeLogin: user.email
		});
}

export const writeArrivalData = (props) => {
	const {
		runType, 
    timeStart,
    startLocation,
    startLocationGPS, 
    numPassengers,
    passenger1FirstName,
    passenger1LastName,
    passenger2FirstName,
    passenger2LastName,
    p1FirstName,
    p1LastName,
    p2FirstName,
    p2LastName, 
    passenger1Wheelchair, 
    passenger2Wheelchair,
    deviceID,
    airline,
    flightNumber,
    al,
    fn, 
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
			passenger2FirstName: p2FirstName || passenger2FirstName || '',
			passenger2LastName: p2LastName || passenger2LastName || '',
			passenger1Wheelchair: passenger1Wheelchair,
			passenger2Wheelchair: passenger2Wheelchair,
			airline: al,
			flightNumber: fn,
			// destinationGate: destinationGate,
			deviceID: deviceID,
			employeeLogin: user.email
		});
}

export const writeDepartureData = ({ runType, timeStart, timeTSAStart, timeTSAEnd, commentsTSA }) => {
	const path = runType + '/' + timeStart; 
	firebase.database().ref(`${path}`)
		// .push({
		.update({
			timeTSAStart: timeTSAStart,
			timeTSAEnd: timeTSAEnd,
			commentsTSA: commentsTSA
		});
}

export const writeDepartureEnd = ({runType, timeStart, destinationGate, finalGate}, commentsEnd, timeGateArrival ) => {
	const path = runType + '/' + timeStart; 
	firebase.database().ref(`${path}`)
		// .push({
		.update({
			finalGate: finalGate || destinationGate,
			timeGateArrival: timeGateArrival,
			commentsEnd: commentsEnd
		});
}
export const writeArrivalEnd = ({runType, timeStart, destination}, commentsEnd, timeGateArrival ) => {
	const path = runType + '/' + timeStart; 
	firebase.database().ref(`${path}`)
		// .push({
		.update({
			destination: destination,
			timeDestinationArrival: timeGateArrival,
			commentsEnd: commentsEnd
		});
}

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

export const updateWheelchair = (wheelchairNumber, gps) => {

	const path = 'wheelchairs/' + wheelchairNumber;
	console.log(wheelchairNumber, gps, path);
	firebase.database().ref(`${path}`)
		.update({
			latitude: gps.latitude,
			longitude: gps.longitude,
			gpsTimestamp: gps.timestamp,
			timestamp: Date.now()
		})
}


