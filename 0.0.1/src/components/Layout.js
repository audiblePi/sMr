import React from "react";
import { Link, browserHistory, hashHistory } from "react-router";

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionExplore from 'material-ui/svg-icons/action/explore';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';

const style = {
	bottomNav : {
		position:"fixed",
		bottom:0,
		width:"100%"
	}
}

export default class Layout extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	selectedIndex: 0,
	    	open: false
	    };
	}

	handleToggle = () => this.setState({open: !this.state.open});

	select = (index, route) => {
		this.setState({selectedIndex: index});
  		hashHistory.push('/'+route);
  	}

  	render() {
    	return (
	      	<div>
	      		<AppBar title={<span>smr</span>} onTouchTap={this.handleToggle}/>
	      		<Drawer open={this.state.open}>
		        	<MenuItem containerElement={<Link to="/"/>} onTouchTap={this.handleToggle}>Home</MenuItem>
		        	<MenuItem containerElement={<Link to="/search"/>} onTouchTap={this.handleToggle}>Search</MenuItem>
		        	<MenuItem containerElement={<Link to="/browse"/>} onTouchTap={this.handleToggle}>Browse</MenuItem>
		        	<MenuItem containerElement={<Link to="/discover"/>} onTouchTap={this.handleToggle}>Discover</MenuItem>
		        </Drawer>
	        	{this.props.children}
	        	<Paper zDepth={1} style={style.bottomNav}>
			        <BottomNavigation selectedIndex={this.state.selectedIndex}>
			          	<BottomNavigationItem
			            	label="Search"
			            	icon={<ActionSearch/>}
			            	onTouchTap={() => this.select(0, "")}/>
			          	<BottomNavigationItem
			            	label="Browse"
			            	icon={<ActionExplore/>}
			            	onTouchTap={() => this.select(1, "browse")}/>
			          	<BottomNavigationItem
			            	label="Discover"
			            	icon={<ActionVisibility/>}
			            	onTouchTap={() => this.select(2, "discover")}/>
			        </BottomNavigation>
			    </Paper>
	      	</div>
    	);
  	}
}