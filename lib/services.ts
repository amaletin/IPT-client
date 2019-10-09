import { EProductType } from '../lib/enums';
import { getFromAPI, getOneFromAPI, postToAPI, uploadToAPI } from './api';

export const fetchProduct = (id: number) => {
  return getOneFromAPI('products', id, {
    fields: '*.*,pictures.directus_files_id.filename',
  });
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

export const uploadFile = async (fileData: FormData) => {
  function onUploadProgress(progressEvent) {
    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);

    console.log(percentCompleted + "% Done");
  }
  return uploadToAPI(fileData, onUploadProgress);
};

export const postOrder = async (data: any) => {
  try {
    return postToAPI('orders', {...data, status: 'published'});
  } catch (error) {
    console.log(error);
  }
};
