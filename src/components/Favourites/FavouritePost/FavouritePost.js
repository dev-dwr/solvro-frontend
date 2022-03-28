import React from "react";
import { Card, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

function FavouritePost({ item }) {
  const history = useHistory();
  const classes = useStyles();
  function openPostHandler() {
    history.push(`/posts/${item.id}`)
  }
  return (
    <Card
      onClick={openPostHandler}
      className={classes.card}
      raised
      elevation={6}
    >
      <Typography className={classes.title} variant="body1">
        {item.title}
      </Typography>
    </Card>
  );
}

export default FavouritePost;
