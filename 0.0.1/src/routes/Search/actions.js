import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCH_DONE = "FETCH_DONE";
export const FETCH_FAILED = "FETCH_FAILED";

export function fetching(){
	return {
		type: FETCHING,
		fetching: true
	}
}
export function fetchDone(status, data){
	return {
		type: FETCH_DONE,
		fetching: false,
		data: data
	}
}
export function fetchFailed(error){
	return {
		type: FETCH_FAILED,
		fetching: false,
		fetched: true,
	}
}
export function fetch(endpoint){
	return function (dispatch) {		
		//var endpoint = "http://localhost:3000/contacts";
		//var endpoint = "/js/data/contacts.js";
		
		dispatch( fetching() );
		
		return axios.get(endpoint)
			.then( function (response){
				dispatch( fetchDone(response.status, response.data) );
			})
			.catch( function (error){
				console.log(error.message);
				console.log(error.code);
				dispatch( fetchFailed(error) );
			});
	}
}