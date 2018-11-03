import { Dispatch } from 'redux';
import { fetchPosts } from '../lib/services';

export const GET_POSTS_START = 'GET_POST_START';
export const GET_POSTS_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POST_FAIL';

export const getPostsStart = () => {
  return { type: GET_POSTS_START };
}
export const getPostsSuccess = (data) => {
  return { type: GET_POSTS_SUCCESS, data };
}
export const getPostsFail = (error) => {
  return { type: GET_POSTS_FAIL, error };
}

export const loadPosts = () => (dispatch: Dispatch) => {
  dispatch(getPostsStart());
  return fetchPosts().then(
    (response) => {
      dispatch(getPostsSuccess(response))
    },
    error => dispatch(getPostsFail(error)),
  );
};
