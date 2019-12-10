import React, { Component } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from '@material-ui/core/icons/Favorite';
// import ShareIcon from '@material-ui/core/icons/Share';
// import ExpandMoreIcon from '@material-ui/core/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/core/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    const classes = useStyles();
  }

  render() {
    return <div></div>;
  }
}

export default UserCard;
