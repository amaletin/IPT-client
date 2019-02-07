import { EProductType } from '../lib/enums';
import { getFromAPI, getOneFromAPI } from './api';

export const fetchProduct = (id: number) => {
  return getOneFromAPI('products', id);
};

export const fetchProducts = (type: EProductType) => {
  return getFromAPI('products',
    {
      'depth': 1,
      'filters%5Btype%5D%5B%3D%5D': type,
    },
  );
};

export const fetchCategories = (type: EProductType) => {
  return getFromAPI('product_categories',
    {
      'depth': 1,
      'filters%5Btype%5D%5B%3D%5D': type,
    },
  );
};

export const fetchPosts = () => {
  return getFromAPI('posts');
};

export const fetchPost = (id) => {
  return getFromAPI(`posts`, { id });
};
