import { Reducer } from 'redux';
import {
  CLOSE_ORDER_MODAL,
  OPEN_ORDER_MODAL,
} from '../actions/uiActions';
import { EStatus } from '../lib/enums';
import { IUIState } from '../lib/models';

const initialState: IUIState = {
  orderModal: {
    open: false,
    status: EStatus.IDLE,
  },
};

const uiReducer: Reducer<IUIState> = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_ORDER_MODAL:
      return { ...state, orderModal: { ...state.orderModal, open: false } };
    case OPEN_ORDER_MODAL:
      return { ...state, orderModal: { ...state.orderModal, open: true } };
    default: return state;
  }
};

export default uiReducer;
