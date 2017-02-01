import axios from 'axios';

export const BROWSE_FETCH_DONE = "BROWSE_FETCH_DONE";
export const BROWSE_FETCH_FAILED = "BROWSE_FETCH_FAILED";
export const BROWSE_ADD_CONTACT = "BROWSE_ADD_CONTACT";
export const BROWSE_EDIT_CONTACT = "BROWSE_EDIT_CONTACT";
export const BROWSE_DELETE_CONTACT = "BROWSE_DELETE_CONTACT";
export const BROWSE_SAVE_CONTACTS = "BROWSE_SAVE_CONTACTS";

export function fetchDone(status, data){
	return {
		type: BROWSE_FETCH_DONE,
		fetching: false,
		data: data
	}
}
export function fetchFailed(error){
	return {
		type: BROWSE_FETCH_FAILED,
		fetching: false
	}
}
export function fetch(endpoint){
	return function (dispatch) {		
		//var endpoint = "http://localhost:3000/contacts";
		//var endpoint = "/js/data/contacts.js";

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
export function addContact(newContact){
	return {
		type: BROWSE_ADD_CONTACT,
		newContact: newContact
	}
}
export function editContact(id, contact){
	return {
		type: BROWSE_EDIT_CONTACT,
		id: id,
		contact: contact
	}
}
export function deleteContact(id){
	return {
		type: BROWSE_DELETE_CONTACT,
		id: id
	}
}
export function saveContacts(contacts){
	axios.post("http://localhost:3000/contacts", contacts)
		.then( function (response){
			console.log(response);
			dispatch( fetchDone(response.status, response.data) );
		})
		.catch( function (error){
			console.log(error.message);
			console.log(error.code);
		});
}
export function sortUp(contacts){
	return function (dispatch) {	
		return axios.get("http://localhost:3000/contacts?sort=ASC")
			.then( function (response){
				console.log(response);
				dispatch( fetchDone(response.status, response.data) );
			})
			.catch( function (error){
				console.log(error.message);
				console.log(error.code);
				dispatch( fetchFailed(error) );
			});
	}
}
export function sortDown(contacts){
	return function (dispatch) {	
		return axios.get("http://localhost:3000/contacts?sort=DSC")
			.then( function (response){
				console.log(response);
				dispatch( fetchDone(response.status, response.data) );
			})
			.catch( function (error){
				console.log(error.message);
				console.log(error.code);
				dispatch( fetchFailed(error) );
			});
	}
}