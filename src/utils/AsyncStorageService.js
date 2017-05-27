import { AsyncStorage } from 'react-native'; 
import Storage from 'react-native-storage';

export const clearDeparturesAndArrivalsFromAsyncStorage = () => {
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
	storage.getAllDataForKey('departures').then(data => console.log('departures', data))
	storage.getAllDataForKey('arrival').then(data => console.log('arrival', data))

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

	// storage.getAllDataForKey('arrival').then(data => console.log('woooot', data))

}