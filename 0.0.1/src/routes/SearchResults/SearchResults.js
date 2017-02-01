import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import Subheader from 'material-ui/Subheader';

//import * as Actions from "./actions"

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //console.log("componentWillMount");
    }

    componentDidUpdate(){
        //console.log("componentDidUpdaate");
    }
    
    render() {
        console.log( this.props.params.id );
        console.log( this.props.state );
        return (
            <div>
                <Subheader>Search Results for {this.props.params.id} </Subheader>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps)(SearchResults);

//export default SearchResults;
