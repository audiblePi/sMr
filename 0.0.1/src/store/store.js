import { createStore, applyMiddleware, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import searchReducer from '../routes/Search/reducer.js'
import searchResultsReducer from '../routes/SearchResults/reducer.js'
import browseReducer from '../routes/Browse/reducer.js'

const store = createStore(
	combineReducers({ 
		searchReducer, 
		searchResultsReducer, 
		browseReducer,
		routing: routerReducer 
	}), 
	applyMiddleware(thunk, promise, createLogger())
);

//export const history = syncHistoryWithStore(browserHistory, store);

export default store;