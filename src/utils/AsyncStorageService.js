import { AsyncStorage } from 'react-native'; 
import Storage from 'react-native-storage';
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

	const test = {
		'airline': airline, 
    'commentsTSA': commentsTSA,
    'destinationGate': destinationGate.toString(),
    'deviceID': deviceID,
    'finalGate': destinationGate.toString() || finalGate.toString(),
    'flightNumber': flightNumber,
    'numPassengers': numPassengers.toString(), 
  	'runType': runType, 
    'passenger1Wheelchair': passenger1Wheelchair.toString(), 
    'passenger2Wheelchair': passenger2Wheelchair.toString(), 
    'passenger1FirstName': passenger1FirstName, 
    'passenger1LastName': passenger1LastName, 
    'passenger2FirstName': passenger2FirstName, 
    'passenger2LastName': passenger2LastName, 
    'startLocation': startLocation,
    // startLocationGPS,
    // stops,
    'timeStart': timeStart.toString(), 
    'timeTSAEnd': timeTSAEnd.toString(),
    'timeTSAStart': timeTSAStart.toString(),
    'email': user.email
	}

	// try {
	// 	await AsyncStorage.multiSet([
	// 		['airline', airline],
	// 		['commentsEnd', commentsEnd],
	// 		['commentsTSA', commentsTSA],
	// 		['destinationGate', destinationGate],
	// 		['deviceID', deviceID],
	// 		['finalGate', finalGate],
	// 		['flightNumber', flightNumber],
	// 		['numPassengers', numPassengers],
	// 		['runType', runType]
	// 		['passenger1Wheelchair', passenger1Wheelchair],
	// 		['passenger2Wheelchair', passenger2Wheelchair],
	// 		['passenger1FirstName', passenger1FirstName],
	// 		['passenger2FirstName', passenger2FirstName],
	// 		['passenger2LastName', passenger2LastName],
	// 		['startLocation', startLocation],
	// 		['startLocationGPS', startLocationGPS],
	// 		['stops', stops],
	// 		['timeGateArrival', timeGateArrival],
	// 		['timeStart', timeStart],
	// 		['timeTSAEnd', timeTSAEnd],
	// 		['timeTSAStart', timeTSAStart],
	// 		['employeeLogin', user.email],
	// 	]);
	// 	alert('success'); 
	// } 
	// try {
	// 	await AsyncStorage.setItem(timeStart, JSON.stringify(departure))
	// 	alert('success')
	// }
	// catch (error) {
	// 	console.log(error.message)
	// 	alert('failure')
	// }
	console.log('inASYNC', test);

	storage.save({
		key: 'departure',
		// id: timeStart, 
		data: test //JSON.stringify(test)
	})

	storage.load({
		key: timeStart
	}).then(data => console.log('woooot', data))

}