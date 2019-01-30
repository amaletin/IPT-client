import keyBy from 'lodash/keyBy';
import map from 'lodash/map';
import { Reducer } from 'redux';
import {
  GET_PRINTERS_START,
  GET_PRINTERS_SUCCESS,
  GET_PRINTERS_FAIL,
  SET_PRICE_FILTER,
  SET_SORT_ORDER,
  SET_BRAND_FILTER,
} from '../actions/printerActions';
import { EState } from '../lib/enums';
import { IPrinterState } from '../lib/models';
import {
  filterPrinters,
  processProducts,
  updateBrandFilters,
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
    brands: {},
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
      const updatedFilter = {
        ...state.filtered,
        brands: updateBrandFilters(state.filters.brands, processedPrinters),
        price: updatePriceFilters(state.filters.price, processedPrinters)
      };
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
    case SET_BRAND_FILTER:
      const brands = map(state.filters.brands, (b) => {
        if(b.id === action.data) {
          b.selected = !b.selected;
        }
        return b;
      });
      const updatedFilters = { ...state.filters, brands: keyBy(brands, 'id') };
      const updatedFiltered = updatePrintersSorting(filterPrinters(updatedFilters, state.list), state.sortOrder);
      return { ...state, filters: updatedFilters, filtered: updatedFiltered };
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
