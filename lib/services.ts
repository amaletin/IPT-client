import { getFromAPI } from './api';
import { EProductType } from '../lib/enums';

export const fetchProducts = (type: EProductType) => {
  return getFromAPI('products',
    {
      depth: 1,
      'filters%5Btype%5D%5B%3D%5D': type,
    }
  );
}

export const fetchBrands = () => {
  return getFromAPI('brands');
}

export const fetchPosts = () => {
  return getFromAPI('posts');
}

export const fetchPost = (id) => {
  return getFromAPI(`posts`, { id });
}
