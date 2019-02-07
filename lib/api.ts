import { RemoteInstance } from 'directus-sdk-javascript';
import { API_HOST, API_TOKEN } from '../configuration/app.config';

export const client = new RemoteInstance({
  accessToken: [API_TOKEN],
  url: API_HOST,
});

export const getFromAPI = async (collection: string, options?: any) => await client.getItems(collection, options);
export const getOneFromAPI = async (collection: string, id: number, options?: any) => {
  return await client.getItem(collection, id, options);
};
