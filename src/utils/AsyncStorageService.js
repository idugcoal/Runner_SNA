import { AsyncStorage } from 'react-native'; 
import Storage from 'react-native-storage';

export const clearAllFromAsyncStorage = () => {
	var storage = new Storage({
		size: 1000,
		storageBackend: AsyncStorage,
		defaultExpires: 1000 * 3600 * 24,
		enableCache: true,
		sync: {

		}
	});

	storage.clearMapForKey('departures');
	storage.clearMapForKey('arrivals');
	storage.clearMapForKey('preboards');
	storage.getAllDataForKey('departures').then(data => console.log('departures', data))
	storage.getAllDataForKey('arrivals').then(data => console.log('arrivals', data))
	storage.getAllDataForKey('preboards').then(data => console.log('preboards', data))

}

export const writeDepartureToAsyncStorage = async (departure, commentsEnd, timeGateArrival) => {
	
	var storage = new Storage({
		size: 1000,
		storageBackend: AsyncStorage,
		defaultExpires: 1000 * 3600 * 24,
		enableCache: true,
		sync: {

		}
	});

	const {
		airline, 
    commentsTSA,
    destinationGate,
    deviceID,
    finalGate,
    flightNumber,
    numPassengers, 
  	runType, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    startLocation,
    startLocationGPS,
    stops,
    timeStart, 
    timeTSAEnd,
    timeTSAStart,
    user
	} = departure;

	const departureData = {
		airline,
		commentsEnd,
    commentsTSA,
    destinationGate,
    deviceID,
    finalGate: finalGate || destinationGate,
    flightNumber,
    numPassengers, 
  	runType, 
    passenger1Wheelchair, 
    passenger2Wheelchair, 
    passenger1FirstName, 
    passenger1LastName, 
    passenger2FirstName, 
    passenger2LastName, 
    startLocation,
    startLocationGPS,
    stops,
    timeGateArrival,
    timeStart, 
    timeTSAEnd,
    timeTSAStart,
    employeeLogin: user.email
	}

	storage.save({
		key: 'departures',
		id: timeStart.toString(), 
		data: JSON.stringify(departureData)
	})

	// storage.getAllDataForKey('departure').then(data => console.log('woooot', data))

}

export const writeArrivalToAsyncStorage = async (arrival, commentsEnd, timeDestinationArrival) => {
	var storage = new Storage({
		size: 1000,
		storageBackend: AsyncStorage,
		defaultExpires: 1000 * 3600 * 24,
		enableCache: true,
		sync: {

		}
	});

	const {
		airline,
		destination,
		deviceID,
		flightNumber,
		numPassengers,
		passenger1Wheelchair,
		passenger2Wheelchair,
		passenger1FirstName,
		passenger1LastName,
		passenger2FirstName,
		passenger2LastName,
		startLocation,
		startLocationGPS,
		stops,
		timeStart,
		user 
	} = arrival

	console.log('in writeArrivalToAsyncStorage', deviceID)
	const arrivalData = {
		airline,
		commentsEnd,
		destination,
		deviceID,
		employeeLogin: user.email,
		flightNumber,
		numPassengers,
		passenger1Wheelchair,
		passenger2Wheelchair,
		passenger1FirstName,
		passenger1LastName,
		passenger2FirstName,
		passenger2LastName,
		startLocation,
		startLocationGPS,
		stops,
		timeDestinationArrival,
		timeStart 
	}
	console.log('in writeArrivalToAsyncStorage', arrivalData)
	storage.save({
		key: 'arrivals',
		id: timeStart.toString(), 
		data: JSON.stringify(arrivalData)
	})

	storage.getAllDataForKey('arrivals').then(data => console.log('woooot', data))

}

export const writePreboardToAsyncStorage = async (preboard, commentsEnd, timeDestinationArrival) => {
	var storage = new Storage({
		size: 1000,
		storageBackend: AsyncStorage,
		defaultExpires: 1000 * 3600 * 24,
		enableCache: true,
		sync: {

		}
	});

	const {
		airline,
		destinationGate,
		deviceID,
		flightNumber,
		passenger1Wheelchair,
		passenger1FirstName,
		passenger1LastName,
		preboardType,
		timeStart,
		user 
	} = preboard

	const preboardData = {
		airline,
		commentsEnd,
		startingGate: destinationGate,
		deviceID,
		employeeLogin: user.email,
		flightNumber,
		passenger1Wheelchair,
		passenger1FirstName,
		passenger1LastName,
		preboardType,
		timeDestinationArrival,
		timeStart 
	}
	console.log('in writePreboardToAsyncStorage', preboardData)
	storage.save({
		key: 'preboards',
		id: timeStart.toString(), 
		data: JSON.stringify(preboardData)
	})

	storage.getAllDataForKey('preboards').then(data => console.log('woooot', data))

}

