import * as Actions from "./actions";
//import { List, fromJS } from 'immutable';

const initialState = {
	fetching:false,
	fetched:false,
}

export default function reducer ( state=initialState, action){
	switch ( action.type ){
		case Actions.FETCHING : 
 			return Object.assign( {}, state, { fetching: action.fetching } );
 			break;
 		case Actions.FETCH_DONE : 
 			return Object.assign( {}, state, { fetched: action.fetched, fetching: action.fetching } );
 			break;
 		case Actions.FETCH_FAILED : 
 			return Object.assign( {}, state, { fetched: action.fetched, fetching: action.fetching } );
 			break;
 		default:
 			return state;
	}
}
