import { Reducer } from 'redux';
import map from 'lodash/map';
import {
  SET_PRICE_FILTER,
} from '../actions/filterActions';
import {
  GET_PRODUCTS_SUCCESS
} from '../actions/catalogActions';
import { processProducts } from './utils';
import {IFilterState} from '../lib/models';

const getPriceLimits = (products) => {
  const prices = map(products, prod => prod.price).sort((a, b) => a - b);
  return {
    value: {
      min: prices[0],
      max: prices[prices.length - 1],
    },
    minValue: prices[0],
    maxValue: prices[prices.length - 1],
  }
}

const initialState:IFilterState = {
  price: {
    value: {
      min: null,
      max: null,
    },
    range: {
      min: null,
      max: null,
    }
  },
};

const filterReducer: Reducer<IFilterState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICE_FILTER:
      const price = { ...state.price, value: action.data };
      return { ...state, price };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        price: {
          ...state.price,
          ...getPriceLimits(processProducts(action.data))
        }
      }
    default: return state;
  }
};

export default filterReducer;
