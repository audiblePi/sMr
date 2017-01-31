import React from "react";
import { connect } from "react-redux";

class Discover extends React.Component {
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
        return (
            <div>
                //discover
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        new_releases: state.new_releases
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps)(Discover);
