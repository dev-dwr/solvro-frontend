import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import moment from "moment";

import Likes from "./Likes";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useQuery } from "../../../utils/useQuery";

const Post = ({ post }) => {
  const classes = useStyles();
  const query = useQuery();
  const _start = query.get("_start") || 1;
  const history = useHistory();

  const [likes, setLikes] = useState([]);
  const favouritesPosts = JSON.parse(localStorage.getItem("posts"));

  const addToFavourites = () => {
    setLikes(() => {
      if (!favouritesPosts.find((el) => post.id === el.id)) {
        const favouritesPosts = JSON.parse(localStorage.getItem("posts")) || [];
        const posts = [...favouritesPosts, post];
        localStorage.setItem("posts", JSON.stringify(posts));
        history.push(`?favourites=${posts.length}&_start=${_start}`);
        return posts;
      } else {
        const favouritesPosts = JSON.parse(localStorage.getItem("posts")) || [];
        const filtredPosts = favouritesPosts.filter(
          (postEl) => postEl.id !== post.id
        );
        localStorage.setItem("posts", JSON.stringify(filtredPosts));
        history.push(`?favourites=${filtredPosts.length}&_start=${_start}`);
        return filtredPosts;
      }
    });
  };
  const openPost = () => {
    history.push(`/posts/${post.id}`);
  };
  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        className={classes.media}
        image={
          post.imageUrl ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
        onClick={openPost}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          published {moment(post.publishedAt).fromNow()}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
        onClick={openPost}
      >
        {post.title}
      </Typography>
      <CardContent onClick={openPost}>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.summary.substring(0, 100) + "..."}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button onClick={addToFavourites} size="small" color="secondary">
          <Likes likes={likes} post={post} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
