import DirectusSDK from '@directus/sdk-js';
import { API_HOST } from '../configuration/app.config';

const client = new DirectusSDK({
  project: '_',
  url: API_HOST,
});

export const getFromAPI = async (collection: string, options?: any) => await client.getItems(collection, options);
export const getOneFromAPI = async (collection: string, id: number, options?: any) => {
  return await client.getItem(collection, id, options);
};
export const postToAPI = async (collection: string, data: any) => await client.createItem(collection, data);
