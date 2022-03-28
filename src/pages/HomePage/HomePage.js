import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Posts from "../../components/Posts/Posts";
import { useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { Paper } from "@mui/material";
import useStyles from "./styles.js";
import PaginationComp from "../../components/Pagination/PaginationComp";
import { getPostsCount } from "../../actions/posts";

import FavouritesPosts from "../../components/Favourites/FavouritesPosts";
import { useQuery } from "../../utils/useQuery";

const Home = () => {
  const query = useQuery();
  const dispatch = useDispatch();
  const classes = useStyles();
  const currentPage = query.get("_start") || 1;

  useEffect(() => {
    dispatch(getPostsCount());
  }, []);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Navbar />
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FavouritesPosts />
            <Paper elevation={6} className={classes.pagination}>
              <PaginationComp currentPage={currentPage} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
