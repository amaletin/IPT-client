import keyBy from 'lodash/keyBy';
import { Reducer } from 'redux';
import {
  GET_PRINTERS_START,
  GET_PRINTERS_SUCCESS,
  GET_PRINTERS_FAIL,
  SET_PRICE_FILTER,
  SET_SORT_ORDER,
} from '../actions/printerActions';
import { EState } from '../lib/enums';
import { IPrinterState } from '../lib/models';
import {
  filterPrinters,
  processProducts,
  updatePriceFilters,
  updatePrintersSorting,
} from './utils';

const initialState:IPrinterState = {
  currentProductId: null,
  filters: {
    price: {
      value: { max: null, min: null },
      range: { max: null, min: null },
    },
  },
  filtered: [],
  list: [],
  sortOrder: null,
  state: EState.IDLE,
};

const printerReducer: Reducer<IPrinterState> = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRINTERS_START:
      return { ...state, state: EState.FETCHING };
    case GET_PRINTERS_SUCCESS:
      const processedPrinters = processProducts(action.data);
      const updatedFilter = { ...state.filtered, price: updatePriceFilters(state.filters.price, processedPrinters) };
      const filteredPrinters = filterPrinters(updatedFilter, processedPrinters);
      const printers = keyBy(updatePrintersSorting(processedPrinters, state.sortOrder), 'id');

      return {
        ...state,
        filters: updatedFilter,
        filtered: filteredPrinters,
        list: { ...state.list, ...printers },
        state: EState.SUCCESS,
      };
    // case GET_PRINTER_SUCCESS:
    //   const processedPrinter = processProduct(action.data.data)
    //   const printer = keyBy([processedPrinter], 'id');
    //   return {
    //     ...state,
    //     currentProductId: processedPrinter.id,
    //     printers: { ...state.list, ...printer },
    //     state: EState.SUCCESS,
    //   };
    case GET_PRINTERS_FAIL:
      console.log(action.error);
      return { ...state, state: EState.FAIL };
    case SET_PRICE_FILTER:
      const price = { ...state.filters.price, value: action.data };
      const filters = { ...state.filters, price };
      const filtered = updatePrintersSorting(filterPrinters(filters, state.list), state.sortOrder);
      return { ...state, filters, filtered };
    case SET_SORT_ORDER:
    const prevOrder = state.sortOrder;
      const newOrder = prevOrder === 'ASC' ? 'DESC' : 'ASC'; 
      return {
        ...state,
        filtered: updatePrintersSorting(state.filtered, newOrder),
        sortOrder: newOrder,
      }
    default: return state;
  }
};

export default printerReducer;
