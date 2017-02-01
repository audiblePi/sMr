import * as Actions from "./actions";
//import { List, fromJS } from 'immutable';

const initialState = {
	fetching:false,
	fetched:false
}

export default function reducer ( state=initialState, action){
	switch ( action.type ){
		case Actions.SEARCH_RESULTS_FETCHING : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching,
 				fetched: action.fetched 
 			} );
 			break;
 		case Actions.SEARCH_RESULTS_FETCH_MOVIES_DONE : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching, 
 				fetched: action.fetched, 
 				movieMatches: action.data.results 
 			} );
 			break;
 		case Actions.SEARCH_RESULTS_FETCH_FAILED : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching,
 				fetched: action.fetched, 
 			} );
 			break;
 		default:
 			return state;
	}
}
