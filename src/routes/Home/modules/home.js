// contiene acciones y handlers
import update from 'react-addons-update';
import constants from './actionConstants';
import {Dimensions,Alert} from 'react-native'
// llave google
// import key from '../../../../key'
// import axios from 'axios';
// fetch con timeout
// import 'whatwg-fetch-timeout'
import RNGooglePlaces from 'react-native-google-places'
// import { request } from 'https';
import keys from '../../../../key'
import request from '../../../util/request'
import calculateFare from '../../../util/calculateFare'
// ------------------------
// constants
// ------------------------

const 
	{
		GET_CURRENT_LOCATION,
		GET_INPUT,
		TOGGLE_SEARCH_RESULT,
		GET_ADDRESS_PREDICTIONS,
		GET_SELECTED_ADDRESS,
		GET_DISTANCE_MATRIX,
		GET_FARE

	}=constants;

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA



// ------------------------
// actions
// ------------------------

export function getCurrentLocation(){
	console.log('getCurrent location')
    return (dispatch)=>{
        navigator.geolocation.getCurrentPosition(
			
            (position)=>{
                // redux
                console.log(position.coords.latitude,"asdasd")
                dispatch({
                    type:GET_CURRENT_LOCATION,
					payload:position
                });
            },
            (error)=>console.log(error.message),
			// {enableHighAccuracy: true, timeout: 20000, maximumAge:1000}
			{enableHighAccuracy: true, timeout: 20000}
        )
    }
}

// get user input
export function getInputData(payload){
	return{
		type:GET_INPUT,
		payload
	}
}
// handler modal de busquedas
export function toggleSearchResultModal(payload){
	console.log("accion toogle")
	return{
		type:TOGGLE_SEARCH_RESULT,
		payload
	}
}
// OBTENER DIRECCIONES DE API de prediccion
export function getAddressPredictions(){
	console.log("accion adress")
	return((dispatch, store)=>{
		let userInput = store().home.resultTypes.pickUp ? store().home.inputData.pickUp : store().home.inputData.dropOff;
		RNGooglePlaces.getAutocompletePredictions(userInput,
			{
				country:"CO"
			}
		)
		.then((results)=>
			dispatch({
				type:GET_ADDRESS_PREDICTIONS,
				payload:results
			})
		)
		.catch((error)=> console.log(error.message));
	}
	)
	
}
//obtener direccion
export function getSelectedAddress(payload){
	console.log(keys,"keyyyy")
	const numbers={
		baseFare:0.2,
		timeRate:0.14,
		distanceRate:0.97,
		surge:1000
	}
	return(dispatch,store)=>{
		RNGooglePlaces.lookUpPlaceByID(payload)
		.then((results)=>{
			dispatch({
				type:GET_SELECTED_ADDRESS,
				payload:results
			})
		})
		.then(()=>{
			console.log(store().home.selectedAddress.selectedPickUp ,store().home.selectedAddress.selectedDropOff)
			console.log(store().home.selectedAddress.selectedPickUp.location ,store().home.selectedAddress.selectedDropOff.location)
			
			if(store().home.selectedAddress.selectedPickUp && store().home.selectedAddress.selectedDropOff){
				request.get("https://maps.googleapis.com/maps/api/distancematrix/json")
				.query({
					origins:store().home.selectedAddress.selectedPickUp.location.latitude + "," + store().home.selectedAddress.selectedPickUp.location.longitude,
					destinations:store().home.selectedAddress.selectedDropOff.location.latitude + "," + store().home.selectedAddress.selectedDropOff.location.longitude,
					mode:"driving",
					key:"AIzaSyDUYbTR-3PDWPhgxjENs4yf35g2eHc641s"
				})
				.finish((error, res)=>{
					console.log(res.body,"cuerpo retorno")
					dispatch({
						type:GET_DISTANCE_MATRIX,
						payload:res.body
					});
				})
			}
			setTimeout(function(){
				if(store().home.selectedAddress.selectedPickUp && store().home.selectedAddress.selectedDropOff){
					console.log(store().home,"home")
					console.log(store().home.distanceMatrix)
					const fare=calculateFare(
						numbers.baseFare,
						numbers.timeRate,
						store().home.distanceMatrix.rows[0].elements[0].duration.value,
						numbers.distanceRate,
						store().home.distanceMatrix.rows[0].elements[0].distance.value,
						numbers.surge
						);
						dispatch({
							type:GET_FARE,
							payload:fare
						})
				}
			},2000)
		})
		.catch((error)=>console.log(error.message))
	}
}
	

// ------------------------
// Action Handlers
// ------------------------
function handleGetCurrentLocation(state, action){
	console.log(action.payload.coords.latitude,"------");
	return update(state, {
		region:{
			latitude:{
				$set:action.payload.coords.latitude
			},
			longitude:{
				$set:action.payload.coords.longitude
			},
			latitudeDelta:{
				$set:LATITUDE_DELTA
			},
			longitudeDelta:{
				$set:LONGITUDE_DELTA
			}
		}
	})
}
function handleGetInputDate(state, action){
	const { key, value } = action.payload;
	return update(state, {
		inputData:{
			[key]:{
				$set:value
			}
		}
	});
}
// handler modal de busquedas
function handleToggleSearchResult(state,action){
	// bindear
	if(action.payload==="pickUp"){
		return update(state,{
			resultTypes:{
				pickUp:{
					$set:true
				},
				dropOff:{
					$set:false
				}				
			},
			predictions:{
				$set:{}
			}
		})
	}
	if(action.payload==="dropOff"){
		return update(state,{
			resultTypes:{
				pickUp:{
					$set:false
				},
				dropOff:{
					$set:true
				},
				
			},
			predictions:{
				$set:{}
			}
		})
	}
}
// handler prediccion de direcciones
function handleGetAddressPredictions(state,action){
	return update(state, {
		predictions:{
			$set:action.payload
		}
	})
}
// handler get selected addres
function handleGetSelectedAddress(state,action){
	let selectedTitle=state.resultTypes.pickUp?"selectedPickUp":"selectedDropOff"
	return update(state, {
		selectedAddress:{
			[selectedTitle]:{
				$set:action.payload
			}
		},
		resultTypes:{
			pickUp:{
				$set:false
			},
			dropOff:{
				$set:false
			}
		}
	})
}

function handleGetDistanceMatrix(state,action){
	return update(state,{
		distanceMatrix:{
			$set:action.payload
		}
	})
}
function handleGetFare(state,action){
	return update(state,{
		fare:{
			$set:action.payload
		}
	})
}


const ACTION_HANDLERS={
	GET_CURRENT_LOCATION:handleGetCurrentLocation,
	GET_INPUT:handleGetInputDate,
	TOGGLE_SEARCH_RESULT:handleToggleSearchResult,
	GET_ADDRESS_PREDICTIONS:handleGetAddressPredictions,
	GET_SELECTED_ADDRESS:handleGetSelectedAddress,
	GET_DISTANCE_MATRIX:handleGetDistanceMatrix,
	GET_FARE:handleGetFare
}

const initialState={
	region:{},
	inputData:{},
	resultTypes:{},
	predictions:{},
	selectedAddress:{},
};

export function HomeReducer (state = initialState, action){
	const handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}