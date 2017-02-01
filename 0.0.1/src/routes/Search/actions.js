import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCH_MOVIES_DONE = "FETCH_DONE";
export const FETCH_FAILED = "FETCH_FAILED";

const api_key = "3ef2bb526e94e670db03c86dc84b4b79";
const api_key2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWYyYmI1MjZlOTRlNjcwZGIwM2M4NmRjODRiNGI3OSIsInN1YiI6IjU4ODUzOTRlOTI1MTQxMDQ2MDAyNjI4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DD5ZmEv6B-HBthVjWDzBoIoz-Upqa7v4-CyvlIMw_ao";

export function fetching(){
	return {
		type: FETCHING,
		fetching: true
	}
}
export function fetchMoviesDone(status, data){
	return {
		type: FETCH_MOVIES_DONE,
		fetched: true,
		fetching: false,
		data: data
	}
}
export function fetchFailed(error){
	return {
		type: FETCH_FAILED,
		fetched: false,
		fetching: false
	}
}
export function fetchMovies(query){
	return function (dispatch) {		
		//var endpoint = "http://localhost:3000/contacts";
		//var endpoint = "/js/data/contacts.js";
		var endpoint = "https://api.themoviedb.org/3/search/movie?api_key="+api_key+"&query="+query;
		
		dispatch( fetching() );
		
		return axios.get(endpoint)
			.then( function (response){
				dispatch( fetchMoviesDone(response.status, response.data) );
			})
			.catch( function (error){
				console.log(error.message);
				console.log(error.code);
				dispatch( fetchFailed(error) );
			});
	}
}
