import { Reducer } from 'redux';
import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from '../actions/postsActions';
import { EState } from '../lib/enums';
import { IPostsState } from '../lib/models';

const initialState:IPostsState = {
  byId: {},
  allIds: [],
};

const postsReducer: Reducer<IPostsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
    case GET_POST_SUCCESS:
      return {
        byId: { ...state.byId, ...action.data.byId },
        allIds: { ...state.allIds, ...action.data.allIds}
      };
    case GET_POSTS_FAIL:
    case GET_POST_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default postsReducer;
