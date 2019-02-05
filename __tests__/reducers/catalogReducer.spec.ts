import { generateProductMock } from '../utils';
import categoriesReducer from '../../reducers/categoriesReducer';
import { processProduct } from '../../reducers/utils';

const initialState = {
  categories: [],
  currentProductId: null,
  products: [],
  state: 'IDLE',
};

const mockProduct = generateProductMock()
const productsResponse = {
  data: [mockProduct],
}

describe('catalogReducer', () => {
  it('returns initial state', () => {
    const result = categoriesReducer(undefined, { type: 'ACTION' });
    return expect(result).toEqual(initialState);
  });

  it('takes GET_PRODUCTS_START action', () => {
    const result = categoriesReducer(undefined, { type: 'GET_PRODUCTS_START' });
    return expect(result).toEqual({ ...initialState, state: 'FETCHING' });
  })

  it('takes GET_PRODUCTS_SUCCESS action', () => {
    const result = categoriesReducer(undefined, { type: 'GET_PRODUCTS_SUCCESS', data: productsResponse });
    return expect(result).toEqual({
      ...initialState,
      state: 'SUCCESS',
      products: { 1: processProduct(mockProduct)}
    });
  })

  it('takes GET_PRODUCTS_FAIL action', () => {
    const result = categoriesReducer(undefined, { type: 'GET_PRODUCTS_FAIL' });
    return expect(result).toEqual({ ...initialState, state: 'FAIL' });
  })
});