import keyBy from 'lodash/keyBy';
import { Reducer } from 'redux';
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from '../actions/postsActions';
import { EState } from '../lib/enums';
import { IPostsState } from '../lib/models';
import { processPosts } from './utils';

const initialState:IPostsState = {
  data: [],
  state: EState.IDLE,
};

const postsReducer: Reducer<IPostsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START:
      return { ...state, state: EState.FETCHING };
    case GET_POSTS_SUCCESS:
      const posts = keyBy(processPosts(action.data), 'id');
      return {
        ...state,
        data: { ...state.data, ...posts },
        state: EState.SUCCESS,
      };
    case GET_POSTS_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default postsReducer;
