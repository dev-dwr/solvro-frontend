import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post.js";

const Posts = () => {
  const { posts, isLoading } = useSelector((state) => state);
 
  if (!posts.length && !isLoading) {
    return "No Posts";
  }
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      alignItems="stretch"
      spacing={1}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={12} md={8} lg={3}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
