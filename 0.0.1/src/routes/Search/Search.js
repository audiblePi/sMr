import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import * as Actions from "./actions"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {miList, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';

const style = {
    formStyle : {
        maxWidth:"70%",
        margin:"auto",
        padding:"2rem 0"
    },
    loaderStyle : {
        margin:"auto"
    }
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    componentWillMount(){
        //console.log("componentWillMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdaate");
        console.log(this.props.state);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.dispatch( Actions.fetchMovies(this.state.value) );
    }

    handleSubmit = (event) => {
        //this.props.dispatch( Actions.fetchMovies(this.state.value) );
    }

    renderResult = () => {
        //this.props.dispatch( Actions.fetchMovies(this.state.value) );
        console.log("renderResults");
    }

    render() {
        return (
            <div style={style.formStyle}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Search" fullWidth={true} className="search" value={this.state.value} onChange={this.handleChange}/>
                    <br/><RaisedButton label="Submit" primary={true} type="submit" fullWidth={true}/>
                </form>
                {/* !this.props.state.fetching ? " " : <p>'fetching'</p> */}
                {/* this.props.state.fetched ? <p>'fetched'</p> : " " */ }
                <miList>
                    { this.props.state.movieMatches.map( (row, index) => (
                        <ListItem key={index} primaryText={row.original_title} rightIcon={<ActionInfo />} />
                    ))}
                </miList>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        state: state.searchReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps)(Search);
