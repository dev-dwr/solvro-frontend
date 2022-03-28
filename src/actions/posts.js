import {
  FETCH_ALL,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  FETCH_POSTS_COUNT,
  ADD_POST_TO_FAVOURITES
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsCount = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPostsCount();
    dispatch({ type: FETCH_POSTS_COUNT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};


export const addPostToFavourites = (post) => async (dispatch) => {
  console.log(post)
  dispatch({type: ADD_POST_TO_FAVOURITES, payload: post});
}
