import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { getPost } from "../../actions/posts";
import useStyles from "./styles.js";

const PostDetails = () => {
  const { post, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) {
    return null;
  }

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <>
      <Navbar />
      <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">
              {post.title}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography  gutterBottom variant="body1" component="p">
              {post.summary}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="body1">
              published {moment(post.publishedAt).fromNow()}
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
            <Typography variant="h6">
              <a href={`${post.url}`}>Click here to see more</a>
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={
                post.imageUrl ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              alt={post.title}
            />
          </div>
        </div>
      </Paper>
    </>
  );
};

export default PostDetails;
