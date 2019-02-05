import { Reducer } from 'redux';
import { IFiltersState, IPriceFilterBlock, IFilterBlock } from '../lib/models';
import {
  SET_PRINTERS_PRICE_FILTER,
  SET_PRINTERS_BRAND_FILTER,
  SET_PENS_PRICE_FILTER,
  SET_SCANNERS_PRICE_FILTER,
  SET_CONSUMABLES_PRICE_FILTER,
  SET_PRINTERS_BRAND_OPEN
} from '../actions/filterActions';
import { GET_PRODUCTS_SUCCESS } from '../actions/productsActions';
import { updateFilters, setPriceFilter, setBrandsFilter } from '../lib/filterUtils';

const initialPrice: IFilterBlock<IPriceFilterBlock> = {
  filter: {
    value: { max: null, min: null },
    range: { max: null, min: null },
  },
  isOpen: true,
}

const initialState:IFiltersState = {
  printers: {
    brands: {
      filter: {},
      isOpen: false,
    },
    price: initialPrice,
  },
  pens: {
    price: initialPrice,
  },
  scanners: {
    price: initialPrice,
  },
  consumables: {
    price: initialPrice,
  }
};

const filtersReducer: Reducer<IFiltersState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRINTERS_PRICE_FILTER:
      return {
        ...state,
        printers: {
          ...state.printers,
          price: setPriceFilter(state.printers.price, action.data),
        }
      }            
    case SET_PRINTERS_BRAND_FILTER:
      return {
        ...state,
        printers: {
          ...state.printers,
          brands: setBrandsFilter(state.printers.brands, action.data),
        }
      }    
    case SET_PENS_PRICE_FILTER:
      return {
        ...state,
        pens: {
          ...state.pens,
          price: setPriceFilter(state.pens.price, action.data),
        }
      }
    case SET_SCANNERS_PRICE_FILTER:
      return {
        ...state,
        scanners: {
          ...state.scanners,
          price: setPriceFilter(state.scanners.price, action.data),
        }
      }
    case SET_CONSUMABLES_PRICE_FILTER:
      return {
        ...state,
        consumables: {
          ...state.consumables,
          price: setPriceFilter(state.consumables.price, action.data),
        }
      }
    case SET_PRINTERS_BRAND_OPEN:
      return {
        ...state,
        printers: {
          ...state.printers,
          brands: {
            ...state.printers.brands,
            isOpen: !state.printers.brands.isOpen,
          }
        }
      }
    case GET_PRODUCTS_SUCCESS:
      return updateFilters(state, action.data.byId);
    default: return state;
  }
};

export default filtersReducer;
