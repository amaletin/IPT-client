import keyBy from 'lodash/keyBy';
import isEmpty from 'lodash/isEmpty';
import { Reducer } from 'redux';
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from '../actions/postsActions';
import { EState } from '../lib/enums';
import { IPostsState } from '../lib/models';
import { processPosts, processPost } from './utils';

const initialState:IPostsState = {
  current: {},
  data: [],
};

const postsReducer: Reducer<IPostsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START:
    case GET_POST_START:
      return { ...state, state: EState.FETCHING };
    case GET_POSTS_SUCCESS:
      const posts = keyBy(processPosts(action.data), 'id');
      return {
        ...state,
        data: { ...state.data, ...posts },
        state: EState.SUCCESS,
      };
    case GET_POST_SUCCESS:
    const post = action.data;
      return {
        ...state,
        current: !isEmpty(post) && processPost(post),
        state: EState.SUCCESS,
      }
    case GET_POSTS_FAIL:
    case GET_POST_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default postsReducer;
