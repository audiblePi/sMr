import * as Actions from "./actions";
//import { List, fromJS } from 'immutable';

const initialState = {
	fetching:false,
	fetched:false,
	movieMatches: []
}

export default function reducer ( state=initialState, action){
	switch ( action.type ){
		case Actions.SEARCH_FETCHING : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching,
 				fetched: action.fetched 
 			} );
 			break;
 		case Actions.SEARCH_FETCH_MOVIES_DONE : 
 			console.log("SEARCH_FETCH_MOVIES_DONE");
 			console.log(Actions);
 			return Object.assign( {}, state, { 
 				fetching: action.fetching, 
 				fetched: action.fetched, 
 				movieMatches: action.data.results 
 			} );
 			break;
 		case Actions.SEARCH_FETCH_FAILED : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching,
 				fetched: action.fetched, 
 			} );
 			break;
 		default:
 			return state;
	}
}
