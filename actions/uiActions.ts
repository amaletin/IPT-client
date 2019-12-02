import { Dispatch } from 'redux';
import { processPages } from '../lib/dataUtils';
import { IConfiguration, IPagesState } from '../lib/models';
import { fetchConfiguration, fetchPage } from '../lib/services';

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ORDER_MODAL = 'CLOSE_ORDER_MODAL';

export const GET_CONFIGURATION_START = 'GET_CONFIGURATION_START';
export const GET_CONFIGURATION_SUCCESS = 'GET_CONFIGURATION_SUCCESS';
export const GET_CONFIGURATION_FAIL = 'GET_CONFIGURATION_FAIL';

export const GET_PAGE_START = 'GET_PAGE_START';
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_PAGE_FAIL = 'GET_PAGE_FAIL';

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
  dispatch(getConfigurationStart());
  return fetchConfiguration().then(
    (response) => {
      const data: IConfiguration = response.data;
      dispatch(getConfigurationSuccess(data));
    },
    (error) => dispatch(getConfigurationFail(error)),
  );
};

export const getPageStart = () => {
  return { type: GET_PAGE_START };
};
export const getPageSuccess = (data: IPagesState) => {
  return { type: GET_PAGE_SUCCESS, data };
};
export const getPageFail = (error) => {
  return { type: GET_PAGE_FAIL, error };
};

export const loadPage = (id: number) => (dispatch: Dispatch) => {
  dispatch(getPageStart());
  return fetchPage(id).then(
    (response) => {
      const data: IPagesState = processPages([response.data]);
      dispatch(getPageSuccess(data));
    },
    (error) => dispatch(getPageFail(error)),
  );
};
