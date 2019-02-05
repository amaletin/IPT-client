import { Reducer } from 'redux';
import {
  SET_PRINTERS_SORTING,
  SET_PENS_SORTING,
  SET_SCANNERS_SORTING,
  SET_CONSUMABLES_SORTING
} from '../actions/sortingActions';
import { ISortingState } from '../lib/models';

const initialState:ISortingState = {
  printers: null,
  pens: null,
  scanners: null,
  consumables: null,
};

const newOrder = (curOrder: string): string => curOrder === 'ASC' ? 'DESC' : 'ASC';

const sortingReducer: Reducer<ISortingState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRINTERS_SORTING:
      return { ...state, printers: newOrder(state.printers) };
    case SET_PENS_SORTING:
      return { ...state, pens: newOrder(state.pens) };
    case SET_SCANNERS_SORTING:
      return { ...state, scanners: newOrder(state.scanners) };
    case SET_CONSUMABLES_SORTING:
      return { ...state, consumables: newOrder(state.consumables) };
    default: return state;
  }
};

export default sortingReducer;
