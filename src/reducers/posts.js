import {
  FETCH_ALL,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  FETCH_POSTS_COUNT,
  ADD_POST_TO_FAVOURITES
} from "../constants/actionTypes";

export const postReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false
      }
    case ADD_POST_TO_FAVOURITES:
      return{
        ...state,
        posts: state.posts.map(post => {
          if(post.id === action.payload.id){
            localStorage.setItem('favourites', JSON.stringify({ ...action?.payload }));
            return action.payload
          }
          return post;
        })
      }
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_POSTS_COUNT:
      return {
        ...state,
        postCount: action.payload
      } 
      
    default:
      return state;
  }
};
