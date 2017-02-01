import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Provider } from 'react-redux';
import store from "../store/store.js";

import Layout from "../components/Layout.js";
import Index from "../routes/Index/Index.js";
import Search from "../routes/Search/Search.js";
import SearchResults from "../routes/SearchResults/SearchResults.js";
import Browse from "../routes/Browse/Browse.js";
import Discover from "../routes/Discover/Discover.js";

const app = document.getElementById('app');

ReactDOM.render(
	<Provider store={ store }>
		<MuiThemeProvider>
		  <Router history={hashHistory}>
		    <Route path="/" component={Layout}>
		      <IndexRoute component={Search}></IndexRoute>
		      <Route path="searchResults/:id" name="searchResults" component={SearchResults}></Route>}
		      <Route path="browse" name="browse" component={Browse}></Route>
		      <Route path="discover" name="discover" component={Discover}></Route>
		    </Route>
		  </Router>
		</MuiThemeProvider>
	</Provider>,
app);