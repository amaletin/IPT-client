import DirectusSDK from '@directus/sdk-js';
import { API_HOST } from '../configuration/app.config';

const client = new DirectusSDK({
  project: '_',
  url: API_HOST,
});

const uploadClient = new DirectusSDK({
  project: '_',
  url: API_HOST,
});

uploadClient.login({
  email: 'info@3dipt.ru',
  password: '123',
});

export const getFromAPI = async (collection: string, options?: any) => await client.getItems(collection, options);
export const getOneFromAPI = async (collection: string, id: number, options?: any) => {
  return await client.getItem(collection, id, options);
};
export const postToAPI = async (collection: string, data: any) => await client.createItem(collection, data);
export const uploadToAPI = async (fileData: FormData, onProgress: any) => await uploadClient.uploadFiles(fileData, onProgress);