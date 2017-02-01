import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import * as Actions from "./actions"

import {miList, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';

const movieCategories = [
    {
        name:"Movies In Theaters",
    },
    { 
        name:"Movies Streaming tv/premium",
    },
    {
        name:"Movies At Redbox"
    },
    {
        name:"Moves On TV Now"
    }
]

const musicCategories = [
    {
        name:"New Music Releases",
    },
    { 
        name:"Live Shows Near You",
    }
]
const api_key = "3ef2bb526e94e670db03c86dc84b4b79";
const api_key2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWYyYmI1MjZlOTRlNjcwZGIwM2M4NmRjODRiNGI3OSIsInN1YiI6IjU4ODUzOTRlOTI1MTQxMDQ2MDAyNjI4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DD5ZmEv6B-HBthVjWDzBoIoz-Upqa7v4-CyvlIMw_ao";

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        //this.props.fetch();
        //https://api.themoviedb.org/3/movie/550?api_key=3ef2bb526e94e670db03c86dc84b4b79
        //this.props.dispatch( Actions.fetch("https://www.themoviedb.org/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22") );
        this.props.dispatch( Actions.fetch("https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key="+api_key) );
    }

    componentDidUpdate(){
        console.log("componentDidUpdaate");
        console.log( this.props);
    }

    render() {
        return (
            <div>
                <div>
                    <miList>
                        { movieCategories.map( (row, index) => (
                            <ListItem key={index} primaryText={row.name} rightIcon={<ActionInfo />} />
                        ))}
                    </miList>
                    <Divider />
                    <miList>
                        { musicCategories.map( (row, index) => (
                            <ListItem key={index} primaryText={row.name} rightIcon={<ActionInfo />} />
                        ))}
                    </miList>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        new_releases: state.browseReducer.new_releases
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps)(Browse);
