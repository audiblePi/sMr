import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    maxWidth:"70%",
    margin:"auto",
    padding:"2rem 0"
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit = () => console.log("searching");

  render() {
    return (
      <div style={style}>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Search" fullWidth={true}/>
        <br/><RaisedButton label="Submit" primary={true} fullWidth={true} onTouchTap={this.handleSubmit}/>
      </div>
    );
  }
}