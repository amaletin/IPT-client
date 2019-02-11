import { Reducer } from 'redux';
import {
  SET_FILTER_SUCCESS,
  TOGGLE_FILTER_OPEN,
} from '../actions/filterActions';
import { GET_PRODUCTS_SUCCESS } from '../actions/productsActions';
import { updateProductFilters } from '../lib/filterUtils';
import { IChamberSizeFilterBlock, IFilterBlock, IFiltersState, IPriceFilterBlock, IRange } from '../lib/models';

const initialRange: IRange = { max: null, min: null };

const initialPrice: IFilterBlock<IPriceFilterBlock> = {
  filter: {
    range: initialRange,
    value: initialRange,
  },
  isOpen: true,
};

const initialArray = {
  filter: {
    all: [],
    selected: [],
  },
  isOpen: false,
};

const initialBoolean = {
  filter: false,
  isOpen: false,
};

const initialSize: IFilterBlock<IChamberSizeFilterBlock> = {
  filter: {
    height: initialRange,
    length: initialRange,
    width: initialRange,
  },
  isOpen: false,
};

const initialState: IFiltersState = {
  consumables: {
    price: initialPrice,
  },
  pens: {
    price: initialPrice,
  },
  printers: {
    brands: initialArray,
    chamberSize: initialSize,
    chamberType: initialArray,
    extruders: initialArray,
    heatedBed: initialBoolean,
    layerResolution: initialArray,
    price: initialPrice,
    technology: initialArray,
  },
  scanners: {
    price: initialPrice,
  },
};

const filtersReducer: Reducer<IFiltersState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_SUCCESS:
      return {
        ...state,
        [action.productType]: {
          ...state[action.productType],
          [action.filterType]: action.data,
        },
      };
    case GET_PRODUCTS_SUCCESS:
      return updateProductFilters(state, action.data.byId);
    case TOGGLE_FILTER_OPEN:
      return {
        ...state,
        [action.productType]: {
          ...state[action.productType],
          [action.filterType]: {
            ...state[action.productType][action.filterType],
            isOpen: !state[action.productType][action.filterType].isOpen,
          },
        },
      };
    default: return state;
  }
};

export default filtersReducer;
