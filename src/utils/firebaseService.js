import { AsyncStorage } from 'react-native'; 
import firebase from 'firebase';
import Storage from 'react-native-storage';
import { getDeparturesFromAsyncStorage, clearAllFromAsyncStorage } from './AsyncStorageService';	

export const updateWheelchair = (wheelchairNumber, gps) => {
	const path = 'wheelchairs/' + wheelchairNumber;
	firebase.database().ref(`${path}`)
		.update({
			latitude: gps.latitude,
			longitude: gps.longitude,
			gpsTimestamp: gps.timestamp,
			timestamp: Date.now()
		})
}

export const writeDepartureEnd = (props, commentsEnd, arrivalTime) => {
	const path = 'departures/' + props.timeStart
	firebase.database().ref(`${path}`)
		.set({
			airline: props.airline,
			commentsEnd: commentsEnd,
			commentsTSA: props.commentsTSA,
			destinationGate: props.destinationGate,
			deviceID: props.deviceID,
			employeeLogin: props.user.email,
			finalGate: props.finalGate || props.destinationGate,
			flightNumber: props.flightNumber,
			passenger1FirstName: props.passenger1FirstName,
			passenger1LastName: props.passenger1LastName,
			passenger2FirstName: props.passenger2FirstName,
			passenger2LastName: props.passenger2LastName,
			passenger1Wheelchair: props.passenger1Wheelchair,
			passenger2Wheelchair: props.passenger2Wheelchair,
			startLocation: props.startLocation,
			startLocationGPS: props.startLocationGPS,
			stops: props.stops,
			timeGateArrival: arrivalTime,
			timeStart: props.timeStart,
			timeTSAEnd: props.timeTSAEnd,
			timeTSAStart: props.timeTSAStart

		})
}

export const writeArrivalEnd = (props, commentsEnd, arrivalTime) => {
	const path = 'arrivals/' + props.timeStart
	firebase.database().ref(`${path}`)
		.set({
			airline: props.airline,
			commentsEnd: commentsEnd,
			destination: props.destination,
			deviceID: props.deviceID,
			employeeLogin: props.user.email,
			flightNumber: props.flightNumber,
			passenger1FirstName: props.passenger1FirstName,
			passenger1LastName: props.passenger1LastName,
			passenger2FirstName: props.passenger2FirstName,
			passenger2LastName: props.passenger2LastName,
			passenger1Wheelchair: props.passenger1Wheelchair,
			passenger2Wheelchair: props.passenger2Wheelchair,
			startLocation: props.startLocation,
			startLocationGPS: props.startLocationGPS,
			stops: props.stops,
			timeDestinationArrival: arrivalTime,
			timeStart: props.timeStart

		})
}

export const writePreboardEnd = (props, commentsEnd, arrivalTime) => {
	const path = 'preboards/' + props.timeStart
	// console.log(props)
	firebase.database().ref(`${path}`)
		.set({
			airline: props.airline,
			commentsEnd: commentsEnd,
			deviceID: props.deviceID,
			employeeLogin: props.user.email,
			flightNumber: props.flightNumber,
			passenger1FirstName: props.passenger1FirstName,
			passenger1LastName: props.passenger1LastName,
			passenger1Wheelchair: props.passenger1Wheelchair,
			preboardType: props.preboardType,
			// startingGate: props.startingGate,
			timeDestinationArrival: arrivalTime,
			timeStart: props.timeStart

		})
}


// export const office = () => {

// 	// clearAllFromAsyncStorage();
// 	var storage = new Storage({
// 		size: 1000,
// 		storageBackend: AsyncStorage,
// 		defaultExpires: 1000 * 3600 * 24,
// 		enableCache: true,
// 		sync: {

// 		}
// 	});

// 	storage.getAllDataForKey('departures')
// 		.then((departures) => {
// 			departures.forEach((departure, index, array) => {
// 				d = JSON.parse(departure)
// 				const path = 'departures/' + d.timeStart
// 				firebase.database().ref(`${path}`)
// 					.set({
// 						airline: d.airline,
// 						commentsEnd: d.commentsEnd,
// 						commentsTSA: d.commentsTSA,
// 						destinationGate: d.destinationGate,
// 						deviceID: d.deviceID,
// 						employeeLogin: d.employeeLogin,
// 						finalGate: d.finalGate,
// 						flightNumber: d.flightNumber,
// 						passenger1FirstName: d.passenger1FirstName,
// 						passenger1LastName: d.passenger1LastName,
// 						passenger2FirstName: d.passenger2FirstName,
// 						passenger2LastName: d.passenger2LastName,
// 						passenger1Wheelchair: d.passenger1Wheelchair,
// 						passenger2Wheelchair: d.passenger2Wheelchair,
// 						startLocation: d.startLocation,
// 						startLocationGPS: d.startLocationGPS,
// 						stops: d.stops,
// 						timeGateArrival: d.timeGateArrival,
// 						timeStart: d.timeStart,
// 						timeTSAEnd: d.timeTSAEnd,
// 						timeTSAStart: d.timeTSAStart
// 					})
// 						.then(() => storage.clearMapForKey('departures'))
// 			})
// 		})

// 	storage.getAllDataForKey('arrivals')
// 		.then((arrivals) => {
// 			arrivals.forEach((arrival, index, array) => {
// 				a = JSON.parse(arrival)
// 				const path = 'arrivals/' + a.timeStart
// 				firebase.database().ref(`${path}`)
// 					.set({
// 						airline: a.airline,
// 						commentsEnd: a.commentsEnd,
// 						destination: a.destination,
// 						deviceID: a.deviceID,
// 						employeeLogin: a.employeeLogin,
// 						flightNumber: a.flightNumber,
// 						passenger1FirstName: a.passenger1FirstName,
// 						passenger1LastName: a.passenger1LastName,
// 						passenger2FirstName: a.passenger2FirstName,
// 						passenger2LastName: a.passenger2LastName,
// 						passenger1Wheelchair: a.passenger1Wheelchair,
// 						passenger2Wheelchair: a.passenger2Wheelchair,
// 						startLocation: a.startLocation,
// 						startLocationGPS: a.startLocationGPS,
// 						stops: a.stops,
// 						timeDestinationArrival: a.timeDestinationArrival,
// 						timeStart: a.timeStart
// 					})
// 						.then(() => storage.clearMapForKey('arrivals'))
// 			})
// 		})

// 	storage.getAllDataForKey('preboards')
// 		.then((preboards) => {
// 			preboards.forEach((preboard, index, array) => {
// 				p = JSON.parse(preboard)
// 				const path = 'preboards/' + p.timeStart
// 				firebase.database().ref(`${path}`)
// 					.set({
// 						airline: p.airline,
// 						commentsEnd: p.commentsEnd,
// 						deviceID: p.deviceID,
// 						employeeLogin: p.employeeLogin,
// 						flightNumber: p.flightNumber,
// 						passenger1FirstName: p.passenger1FirstName,
// 						passenger1LastName: p.passenger1LastName,
// 						passenger1Wheelchair: p.passenger1Wheelchair,
// 						preboardType: p.preboardType,
// 						startingGate: p.startingGate,
// 						timeDestinationArrival: p.timeDestinationArrival,
// 						timeStart: p.timeStart
// 					})
// 						.then(() => storage.clearMapForKey('preboards'))
// 						// .then(() => alert('Written to database!'));
// 			})
// 		})



// 	// storage.getAllDataForKey('departures').then(data => console.log('departures', data))
// 	// storage.getAllDataForKey('arrival').then(data => console.log('arrival', data))
	
// }


