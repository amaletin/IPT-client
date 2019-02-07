import { Reducer } from 'redux';
import {
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
} from '../actions/postsActions';
import { EState } from '../lib/enums';
import { IPostsState } from '../lib/models';

const initialState: IPostsState = {
  allIds: [],
  byId: {},
};

const postsReducer: Reducer<IPostsState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
    case GET_POST_SUCCESS:
      return {
        allIds: { ...state.allIds, ...action.data.allIds},
        byId: { ...state.byId, ...action.data.byId },
      };
    case GET_POSTS_FAIL:
    case GET_POST_FAIL:
      console.log(action.error); // tslint:disable-line no-console
      return { ...state, state: EState.FAIL };
    default: return state;
  }
};

export default postsReducer;
