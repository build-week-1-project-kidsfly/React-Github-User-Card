import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
      backgroundColor: '#EEE5FF',
    maxWidth: 440,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: '#AF98DB',
    width: 150
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            variant="rounded"
            className={classes.avatar}
          >
            {props.login}
          </Avatar>
        }
        title={`${props.name}`}
        subheader={`${props.location}`}
      />
      <CardMedia
        className={classes.media}
        image={`${props.pic}`}
        title="my-image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}
