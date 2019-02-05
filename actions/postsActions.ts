import { Dispatch } from 'redux';
import { fetchPosts, fetchPost } from '../lib/services';
import { processPosts } from '../lib/dataUtils';
import { IPostsState } from '../lib/models';

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';
export const GET_POST_START = 'GET_POST_START';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAIL = 'GET_POST_FAIL';

export const getPostsStart = () => {
  return { type: GET_POSTS_START };
}
export const getPostsSuccess = (data) => {
  return { type: GET_POSTS_SUCCESS, data };
}
export const getPostsFail = (error) => {
  return { type: GET_POSTS_FAIL, error };
}
export const getPostStart = () => {
  return { type: GET_POST_START };
}
export const getPostSuccess = (data) => {
  return { type: GET_POST_SUCCESS, data };
}
export const getPostFail = (error) => {
  return { type: GET_POST_FAIL, error };
}

export const loadPosts = () => (dispatch: Dispatch) => {
  dispatch(getPostsStart());
  return fetchPosts().then(
    (response) => {
      const data: IPostsState = processPosts(response.data);
      dispatch(getPostsSuccess(data))
    },
    error => dispatch(getPostsFail(error)),
  );
};

export const loadPost = (id: number) => (dispatch: Dispatch) => {
  dispatch(getPostStart());
  return fetchPost(id).then(
    (response) => {
      const data: IPostsState = processPosts([response.data]);
      dispatch(getPostSuccess(data))
    },
    error => dispatch(getPostFail(error))
  );
}
