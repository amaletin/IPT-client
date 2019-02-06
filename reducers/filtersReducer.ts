import { Reducer } from 'redux';
import {
  SET_FILTER_SUCCESS,
  SET_PRINTERS_BRAND_OPEN,
} from '../actions/filterActions';
import { GET_PRODUCTS_SUCCESS } from '../actions/productsActions';
import { updateFilters } from '../lib/filterUtils';
import { IFilterBlock, IFiltersState, IPriceFilterBlock } from '../lib/models';

const initialPrice: IFilterBlock<IPriceFilterBlock> = {
  filter: {
    range: { max: null, min: null },
    value: { max: null, min: null },
  },
  isOpen: true,
};

const initialState: IFiltersState = {
  consumables: {
    price: initialPrice,
  },
  pens: {
    price: initialPrice,
  },
  printers: {
    brands: {
      filter: {},
      isOpen: false,
    },
    price: initialPrice,
  },
  scanners: {
    price: initialPrice,
  },
};

const filtersReducer: Reducer<IFiltersState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRINTERS_BRAND_OPEN:
      return {
        ...state,
        printers: {
          ...state.printers,
          brands: {
            ...state.printers.brands,
            isOpen: !state.printers.brands.isOpen,
          },
        },
      };
    case SET_FILTER_SUCCESS:
      return {
        ...state,
        [action.productType]: {
          ...state.printers,
          [action.filterType]: action.data,
        },
      };
    case GET_PRODUCTS_SUCCESS:
      return updateFilters(state, action.data.byId);
    default: return state;
  }
};

export default filtersReducer;
