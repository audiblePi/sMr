import * as Actions from "./actions";
//import { List, fromJS } from 'immutable';

const initialState = {
	fetching:false,
	fetched:false,
	movieMatches: []
}

export default function reducer ( state=initialState, action){
	switch ( action.type ){
		case Actions.FETCHING : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching,
 				fetched: action.fetched 
 			} );
 			break;
 		case Actions.FETCH_MOVIES_DONE : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching, 
 				fetched: action.fetched, 
 				movieMatches: action.data.results 
 			} );
 			break;
 		case Actions.FETCH_FAILED : 
 			return Object.assign( {}, state, { 
 				fetching: action.fetching,
 				fetched: action.fetched, 
 			} );
 			break;
 		default:
 			return state;
	}
}
