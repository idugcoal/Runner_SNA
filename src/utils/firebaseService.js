import { AsyncStorage } from 'react-native'; 
import firebase from 'firebase';
import Storage from 'react-native-storage';
import { getDeparturesFromAsyncStorage, clearDeparturesAndArrivalsFromAsyncStorage } from './AsyncStorageService';	

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

export const office = () => {
	var storage = new Storage({
		size: 1000,
		storageBackend: AsyncStorage,
		defaultExpires: 1000 * 3600 * 24,
		enableCache: true,
		sync: {

		}
	});

	
	

	storage.getAllDataForKey('departures')
		.then((departures) => {
			console.log('departures', departures)
			departures.forEach((departure, index, array) => {
				console.log(JSON.parse(departure))
				d = JSON.parse(departure)
				const path = 'departures/' + d.timeStart
				firebase.database().ref(`${path}`)
					.set({
						airline: d.airline,
						commentsEnd: d.commentsEnd,
						commentsTSA: d.commentsTSA,
						destinationGate: d.destinationGate,
						deviceID: d.deviceID,
						employeeLogin: d.employeeLogin,
						finalGate: d.finalGate,
						flightNumber: d.flightNumber,
						passenger1FirstName: d.passenger1FirstName,
						passenger1LastName: d.passenger1LastName,
						passenger2FirstName: d.passenger2FirstName,
						passenger2LastName: d.passenger2LastName,
						passenger1Wheelchair: d.passenger1Wheelchair,
						passenger2Wheelchair: d.passenger2Wheelchair,
						startLocation: d.startLocation,
						startLocationGPS: d.startLocationGPS,
						stops: d.stops,
						timeGateArrival: d.timeGateArrival,
						timeStart: d.timeStart,
						timeTSAEnd: d.timeTSAEnd,
						timeTSAStart: d.timeTSAStart
					})
						.then(() => storage.clearMapForKey('departures'))
			})
		})

	storage.getAllDataForKey('arrivals')
		.then((arrivals) => {
			console.log('arrivals', arrivals)
			arrivals.forEach((arrival, index, array) => {
				console.log('is it here?', JSON.parse(arrival))
				a = JSON.parse(arrival)
				const path = 'arrivals/' + a.timeStart
				firebase.database().ref(`${path}`)
					.set({
						airline: a.airline,
						commentsEnd: a.commentsEnd,
						destination: a.destination,
						deviceID: a.deviceID,
						employeeLogin: a.employeeLogin,
						flightNumber: a.flightNumber,
						passenger1FirstName: a.passenger1FirstName,
						passenger1LastName: a.passenger1LastName,
						passenger2FirstName: a.passenger2FirstName,
						passenger2LastName: a.passenger2LastName,
						passenger1Wheelchair: a.passenger1Wheelchair,
						passenger2Wheelchair: a.passenger2Wheelchair,
						startLocation: a.startLocation,
						startLocationGPS: a.startLocationGPS,
						stops: a.stops,
						timeDestinationArrival: a.timeDestinationArrival,
						timeStart: a.timeStart
					})
						.then(() => storage.clearMapForKey('arrivals'))
			})
		})

	// storage.getAllDataForKey('departures').then(data => console.log('departures', data))
	// storage.getAllDataForKey('arrival').then(data => console.log('arrival', data))
	
}


