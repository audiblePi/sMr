import axios from 'axios';

export const SEARCH_FETCHING = "SEARCH_FETCHING";
export const SEARCH_FETCH_MOVIES_DONE = "SEARCH_FETCH_DONE";
export const SEARCH_FETCH_FAILED = "SEARCH_FETCH_FAILED";

const api_key = "3ef2bb526e94e670db03c86dc84b4b79";
const api_key2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWYyYmI1MjZlOTRlNjcwZGIwM2M4NmRjODRiNGI3OSIsInN1YiI6IjU4ODUzOTRlOTI1MTQxMDQ2MDAyNjI4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DD5ZmEv6B-HBthVjWDzBoIoz-Upqa7v4-CyvlIMw_ao";

export function fetching(){
	return {
		type: SEARCH_FETCHING,
		fetching: true
	}
}
export function fetchMoviesDone(status, data){
	return {
		type: SEARCH_FETCH_MOVIES_DONE,
		fetched: true,
		fetching: false,
		data: data
	}
}
export function fetchFailed(error){
	return {
		type: SEARCH_FETCH_FAILED,
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
