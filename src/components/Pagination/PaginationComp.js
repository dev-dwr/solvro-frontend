import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import useStyles from "./styles.js";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useQuery } from "../../utils/useQuery";

const PaginationComp = ({ currentPage }) => {
  const classes = useStyles();
  const query = useQuery();
  const favourites = query.get("favourites") || 0;
  const dispatch = useDispatch();
  const postCount = useSelector(state => state.postCount);

  useEffect(() => {
    if (currentPage) {
      dispatch(getPosts(currentPage));
    }
  }, [currentPage]);

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={postCount}
      page={Number(currentPage) || 1} //current page
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?_start=${item.page}&favourites=${favourites}`}
        />
      )}
    />
  );
};

export default PaginationComp;
