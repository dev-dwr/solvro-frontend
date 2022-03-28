import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Button, Typography, Paper } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import FavouritePost from "./FavouritePost/FavouritePost";
import { useQuery } from "../../utils/useQuery";

function FavouritesPosts() {
  const classes = useStyles();
  const history = useHistory();
  const query = useQuery();
  const _start = query.get("_start") || 1;  

  const savedItems = JSON.parse(localStorage.getItem("posts"));
  const [items, setItems] = useState(savedItems || []);
  const location = useLocation();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("posts"));
    if (items) {
      setItems(items);
    }
  }, [location]);

  const clear = () => {
    localStorage.clear();
    history.push(`/posts?favourites=0&_start=${_start}`);
    setItems([]);
  };

  if (items.length === 0) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Add Your Favourites Posts
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper className={classes.paper} elevation={6}>
      {items.map((item) => (
        <FavouritePost key={item.id} item={item} />
      ))}
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={clear}
        className={classes.btn}
        fullWidth
      >
        Clear
      </Button>
    </Paper>
  );
}

export default FavouritesPosts;
