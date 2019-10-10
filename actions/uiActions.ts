import { Dispatch } from 'redux';
import { IConfiguration } from '../lib/models';
import { fetchConfiguration } from '../lib/services';

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export const GET_CONFIGURATION_START = 'GET_CONFIGURATION_START';
export const GET_CONFIGURATION_SUCCESS = 'GET_CONFIGURATION_SUCCESS';
export const GET_CONFIGURATION_FAIL = 'GET_CONFIGURATION_FAIL';

export const openOrderModal = () => ({ type: OPEN_ORDER_MODAL });
export const closeOrderModal = () => ({ type: CLOSE_ORDER_MODAL });

export const getConfigurationStart = () => {
  return { type: GET_CONFIGURATION_START };
};
export const getConfigurationSuccess = (data: IConfiguration) => {
  return { type: GET_CONFIGURATION_SUCCESS, data };
};
export const getConfigurationFail = (error) => {
  return { type: GET_CONFIGURATION_FAIL, error };
};

export const loadConfiguration = () => (dispatch: Dispatch) => {
  console.log('action');
  dispatch(getConfigurationStart());
  return fetchConfiguration().then(
    (response) => {
      console.log('response');
      const data: IConfiguration = response.data;
      console.log('data');
      console.log(data);
      dispatch(getConfigurationSuccess(data));
    },
    (error) => dispatch(getConfigurationFail(error)),
  );
};
