import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import * as Actions from "./actions"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

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
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdaate");
        console.log(this.props.state);
    }

    handleSubmit = () => {
        this.props.dispatch( Actions.fetch("123") );
        console.log("searching");
    }

    render() {
        return (
            <div style={style.formStyle}>
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Search" fullWidth={true}/>
                <br/><RaisedButton label="Submit" primary={true} fullWidth={true} onTouchTap={this.handleSubmit}/>
                { !this.props.state.fetching ? " " : <CircularProgress />}
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
