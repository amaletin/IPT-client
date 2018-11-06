import { generateProductMock } from '../utils';
import productReducer from '../../reducers/productReducer';
import { processProducts } from '../../reducers/utils';

const initialState = {
  data: [],
  state: 'IDLE',
};

const productsResponse = {
  data: [generateProductMock()],
}

describe('productReducer', () => {
  it('returns initial state', () => {
    const result = productReducer(undefined, { type: 'ACTION' });
    return expect(result).toEqual(initialState);
  });

  it('takes GET_PRODUCTS_START action', () => {
    const result = productReducer(undefined, { type: 'GET_PRODUCTS_START' });
    return expect(result).toEqual({ ...initialState, state: 'FETCHING' });
  })

  it('takes GET_PRODUCTS_SUCCESS action', () => {
    const result = productReducer(undefined, { type: 'GET_PRODUCTS_SUCCESS', data: productsResponse });
    return expect(result).toEqual({ state: 'SUCCESS', data: processProducts(productsResponse) });
  })

  it('takes GET_PRODUCTS_FAIL action', () => {
    const result = productReducer(undefined, { type: 'GET_PRODUCTS_FAIL' });
    return expect(result).toEqual({ ...initialState, state: 'FAIL' });
  })
});