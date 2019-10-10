import { Reducer } from 'redux';
import {
  CLOSE_ORDER_MODAL,
  GET_CONFIGURATION_FAIL,
  GET_CONFIGURATION_SUCCESS,
  OPEN_ORDER_MODAL,
} from '../actions/uiActions';
import { EStatus } from '../lib/enums';
import { IUIState } from '../lib/models';

const initialState: IUIState = {
  configuration: {
    address: '',
    email: '',
    facebook_link: '',
    instagram_link: '',
    phone: '',
    phone2: '',
    vk_link: '',
  },
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

    case GET_CONFIGURATION_SUCCESS:
      return {
        ...state,
        configuration: action.data,
      };
    case GET_CONFIGURATION_FAIL:
      console.log(action.error); // tslint:disable-line no-console
      return state;

    default: return state;
  }
};

export default uiReducer;
