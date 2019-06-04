import { EProductType } from '../lib/enums';
import { getFromAPI, getOneFromAPI, postToAPI } from './api';

export const fetchProduct = (id: number) => {
  return getOneFromAPI('products', id);
};

export const fetchProducts = (type: EProductType) => {
  return getFromAPI('products',
    {
      fields: '*.*,pictures.directus_files_id.filename',
      filters: {
        type,
      },
    },
  );
};

export const fetchSearchProducts = (str: string) => {
  return getFromAPI('products', {q: str});
};

export const fetchCategories = (type: EProductType) => {
  return getFromAPI('product_categories',
    {
      'fields': '*.*',
      'filters%5Btype%5D%5B%3D%5D': type,
    },
  );
};

export const fetchPosts = () => {
  return getFromAPI('posts', {fields: '*.*'});
};

export const fetchPost = (id) => {
  return getOneFromAPI(`posts`, id, {fields: '*.*'});
};

export const createFile = async (file) => {
  return postToAPI('', file);
}

export const postOrder = async (data) => {
  const file = await createFile(data.file);
  return postToAPI('orders', {...data, file});
};
