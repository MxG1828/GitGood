import React from "react";
import OppositeTimeline from './OppositeTimeline.js'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { classnames } from "@material-ui/data-grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "50px",
  },
}));


export default function Show(props){
  const classes = useStyles();
    return (<div id="show">
              <img src={ props.avatar } alt="nothing"></img>
              <a target="_blank" href={`https://github.com/${props.loginUser}`} id="github-link" className={classes.root}>
                <h4>@{props.loginUser}</h4><ArrowForwardIcon />
              </a>
              <h4>{props.name}'s Timeline</h4>
              <div id="opposite-timeline">
                <OppositeTimeline filterParam={props.filterParam} repositories={props.repositories} avatar={props.avatar}/>
              </div> 
            </div>
    )
  }