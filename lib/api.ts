import { RemoteInstance } from 'directus-sdk-javascript';
import { API_HOST, API_TOKEN } from '../configuration/app.config';

export const client = new RemoteInstance({
  url: API_HOST,
  accessToken: [API_TOKEN]
});

export const getFromAPI = async (collection: any, options?: any) => await client.getItems(collection, options);
