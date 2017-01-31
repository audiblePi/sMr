import React from "react";
import { Link } from "react-router";

import {miList, ListItem} from 'material-ui/List';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionExplore from 'material-ui/svg-icons/action/explore';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionInfo from 'material-ui/svg-icons/action/info';

const data = [
    {
        title:"Search",
        link:"search",
        icon:<ActionSearch/>
    },
    {
        title:"Browse",
        link:"browse",
        icon:<ActionExplore/>
    },
    {
        title:"Discover",
        link:"discover",
        icon:<ActionVisibility/>
    },
]
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <miList>
                        {data.map( (row, index) => (
                            <ListItem containerElement={<Link to={`/${row.link}`}/>} key={index} primaryText={row.title} leftIcon={row.icon} />
                        ))}
                    </miList>
                </div>
            </div>
        );
    }
}